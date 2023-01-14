import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState('Andrew');
  return (
    <div>
      <div>
        <h1>Isso será exibido??</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
      </div>
      <div>
        <h2>If ternário</h2>
        {name === 'Andrew'
          ? (<p>O nome é Andrew.</p>)
          : (<p>Nome não encontrado.</p>)
        }
        <button onClick={() => (setName('Lindsay'))} >clik here</button>
      </div>
    </div>
  )
}

export default ConditionalRender