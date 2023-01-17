import './Start.css'

const Start = ({ startGame }) => {
  return (
    <div className='start' >
      <h1>Secret Word</h1>
      <p>Clique no botão para começar a jogar!!</p>
      <button onClick={startGame} >Começar o jogo</button>
    </div>
  )
}

export default Start