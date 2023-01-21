import './App.css';

import { useState, useEffect } from 'react';

import { useFetch } from './hooks/useFetch';


const url = 'http://localhost:3000/products'

function App() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // custom hook

  const { data: items } = useFetch(url);

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

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - carregamento dinâmico

    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName('');
    setPrice('');

  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
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
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
