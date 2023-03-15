import { useState } from "react";

const HookUseState = () => {
  // 1 - usestate
  let userName = 'Andrew';
  const [name, setName] = useState('Deras');

  const changeNames = () => {
    userName = 'Andrew Barbosa';
    setName('Andrew Deras');
  }
  // 2 - useStae e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    //envio a uma API
    console.log(age);
  }


  return (
    <div>
      {/* 1 - useState */}
      <h2>HookUseState</h2>
      <div className="mb-4">
        <p>Variável: {userName}</p>
        <p>useSate: {name}</p>
        <button className="btn btn-primary" onClick={changeNames} >Mudar Nomes</button>
      </div>
      {/* 2 - useState e input */}
      <p>Digite sua idade: </p>
      <div className="mb-4">
        <form onSubmit={handleSubmit} >
          <input type="text" value={age} onChange={({ target }) => setAge(target.value)} />
          <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos!</p>
      </div>
      <hr />
    </div>
  )
}

export default HookUseState