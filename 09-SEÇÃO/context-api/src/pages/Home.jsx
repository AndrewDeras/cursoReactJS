// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// components
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

// 6 - 

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();
  // 6 - alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  }
  return (
    <div>
      <h1 style={{ color }} >Home</h1>
      <p>O valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor('RED')} >Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')} >Azuk</button>
      </div>
    </div>
  )
}

export default Home