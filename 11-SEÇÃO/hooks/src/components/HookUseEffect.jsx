import { useEffect, useState } from "react"


const HookUseEffect = () => {
  // 1 - useEffect sem dependencia

  useEffect(() => {
    console.log('Estou sendo executado');
  });

  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dep. vazio

  useEffect(() => {
    console.log('Serei executado apenas uma vez');
  }, []);

  // 3 - item no array de deps

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log('Sou executado, quando o anotherNumber mudar');
    }
  }, [anotherNumber]);

  // 4 - cleanup

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('Hello world');
    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000)

    // return () => clearTimeout(timer)
  }, [anotherNumber])

  return (
    <div>
      <h2>HookUseEffect</h2>
      <div className="mb-4">
        <p>numero: {number}</p>
        <button onClick={changeSomething} >Change something</button>
      </div>
      <div className="mb-4">
        <p>AnotherNumber: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)} >Change another number</button>
      </div>
      <hr />
    </div>
  )
}

export default HookUseEffect