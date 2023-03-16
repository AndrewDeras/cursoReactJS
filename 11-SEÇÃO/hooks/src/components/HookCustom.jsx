import { useState, useStatef } from 'react';

// custom hook

import { usePrevious } from '../../hooks/usePrevious';

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousNumber = usePrevious(number);
  return (
    <div>
      <h2>HookCustom</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousNumber}</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100))} >Alterar number</button>
      <hr />
    </div>
  )
}

export default HookCustom