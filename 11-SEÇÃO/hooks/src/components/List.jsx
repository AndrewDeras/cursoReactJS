import { useState, useEffect } from 'react';

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log('Buscando itens do banco..');

    setMyItems(getItems);

  }, [getItems])


  return (
    <div>
      <h2>List</h2>
      {myItems && myItems.map((item) => (
        <p key={item} >{item}</p>
      ))}
    </div>
  )
}

export default List