import './App.css';

import { useState } from 'react';

import { useFetch } from './hooks/useFetch';


const url = 'http://localhost:3000/products'

function App() {

  // const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // custom hook

  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 1 -  resgatando dados

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);
  // 2  - add products

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // 3 - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando POST

    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  };

  //desafio

  const handleRemove = async (id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* loading */}
      {loading && <p>Carregando dados....</p>}
      {error && <p>{error}</p>}
      {!error &&
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price} -
                <button
                  onClick={ ()=>handleRemove(product.id)}
                >Remover produto
                </button>
              </li>
            ))}
        </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome do produto: </span>
            <input
              type="text"
              name='name'
              value={name}
              onChange={({ target }) => setName(target.value)} />
          </label>
          <label>
            <span>Preço do produto: </span>
            <input
              type="number"
              name='price'
              value={price}
              onChange={({ target }) => setPrice(target.value)} />
          </label>
          {/* 7 - state loading no post */}
          {loading && <input type="submit" value="Aguarde..." disabled />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
