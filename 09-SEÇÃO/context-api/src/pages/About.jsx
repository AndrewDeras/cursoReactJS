// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando context
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  // context mais complexo
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
      <h1 style={{ color: color }} >About</h1>
      <p>O valor do contador: {counter}</p>
      <button onClick={() => setTitleColor("BLUE")} >Azul</button>
      <button onClick={() => setTitleColor("RED")} >Vermelho</button>
    </div>
  )
}

export default About