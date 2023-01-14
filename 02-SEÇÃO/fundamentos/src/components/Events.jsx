const Events = () => {
  const handleThisEvent = (e) => {
    console.log(e);
    console.log('Ativou o evento');
  };

  const renderSomething = (x) => {
    if (x) {
      return (<h1>Posso renderizar isso!!</h1>)
    } else {
      return (<h1>Também posso renderizar isso!!</h1>)
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleThisEvent}>Clique Aqui!!!</button>
      </div>
      <div>
        <button onClick={() => console.log('Clicou!')}>Clique aqui tmb!!</button>
        <button onClick={() => {
          if (true) {
            console.log('Isso funciona, mas não deveria estar aqui!');
          }
        }}>Clique aqui, por favor !!</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events