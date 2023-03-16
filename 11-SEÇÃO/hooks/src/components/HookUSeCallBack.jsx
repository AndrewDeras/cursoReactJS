import { useCallback, useState } from 'react';
import List from './List';

const HookUSeCallBack = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDatabase = useCallback(() => {
    return ['a', 'b', 'c'];
  }, [])
  return (
    <div>
      <h2>HookUSeCallBack</h2>
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setCounter(counter + 1)} >Alterar!</button>
      <p>{counter}</p>
      <hr />
    </div>
  )
}

export default HookUSeCallBack