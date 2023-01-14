const Challenge = () => {

  const num1 = 5;
  const num2 = 5;


  const sum = () => console.log(num1 + num2);

  return (
    <div>
      <p>{num1}</p>
      <p>{num2}</p>
      <button onClick={sum}>Somar</button>
    </div>
  )
}

export default Challenge