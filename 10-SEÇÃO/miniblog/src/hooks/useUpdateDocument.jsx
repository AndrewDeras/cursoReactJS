import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config';
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, erro: null }
    case "UPDATED_DOC":
      return { loading: false, erro: null }
    case "ERROR":
      return { loading: false, erro: action.payload }
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {

  const [response, dispatch] = useReducer(updateReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      return dispatch(action);
    }
  };

  const updateDocument = async (id, data) => {
    checkCancelBeforeDispatch({
      type: 'LOADING'
    })
    try {
      const docRef = await doc(db, docCollection, id);

      const updatedDocument = await updateDoc(docRef, data);

      checkCancelBeforeDispatch({
        type: 'UPDATED_DOC',
        payload: updatedDocument
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

  return { updateDocument, response }
};