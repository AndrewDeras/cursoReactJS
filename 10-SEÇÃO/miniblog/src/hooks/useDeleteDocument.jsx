import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null
};

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, erro: null }
    case "DELETE_DOC":
      return { loading: false, erro: null }
    case "ERROR":
      return { loading: false, erro: action.payload }
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection) => {

  const [response, dispatch] = useReducer(deleteReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      return dispatch(action);
    }
  };

  const deleteDocument = async (id) => {
    checkCancelBeforeDispatch({
      type: 'LOADING'
    })
    try {
      const deletedDocument = await deleteDoc(doc(db, docCollection, id));

      checkCancelBeforeDispatch({
        type: 'DELETED_DOC',
        payload: deletedDocument
      })

    } catch (error) {
      checkCancelBeforeDispatch({
        type: 'ERRO',
        payload: error.message
      })
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, [])

  return { deleteDocument, response }
};