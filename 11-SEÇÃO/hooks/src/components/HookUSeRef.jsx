import { useEffect, useState, useRef } from 'react'

const HookUSeRef = () => {
  // 1- useref básico
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2 - useRef e dom

  const inputRef = useRef();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');

    inputRef.current.focus();

  }

  return (
    <div>
      <h2>HookUSeRef</h2>
      {/* 1 - useRef  */}
      <p>O componente renderizou: {numberRef.current} vezez. </p>
      <div className="m-4">
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)} >Contador A</button>
      </div>
      <div className="m-4">
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)} >Contador B</button>
      </div>
      {/* 2 - useRef e Dom */}
      <div className="m-4">
        <form onSubmit={handleSubmit} >
          <input type="text" ref={inputRef} value={text} onChange={({ target }) => setText(target.value)} />
          <input type="submit" value='Enviar' /></form>
      </div>
      <hr />
    </div>
  )
}

export default HookUSeRef