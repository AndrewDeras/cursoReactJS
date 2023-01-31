// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando context
import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Produtos</h1>
      <p>O valor do contador: {counter}</p>
    </div>
  )
}

export default Products