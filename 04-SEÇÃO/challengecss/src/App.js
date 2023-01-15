import './App.css';
import ShowCarDetails from './components/ShowCarDetails';

function App() {
  const cars = [
    { id: 1, marca: 'Lambo', ano: 2012, cor: 'laranja' },
    { id: 2, marca: 'Ferrari', ano: 2015, cor: 'vermelho' },
    { id: 3, marca: 'bmw', ano: 2015, cor: 'azul' },
  ]

  return (
    <div className="App">
      <h1>Detalhes dos carros.</h1>
      {cars.map((car) => (
        <ShowCarDetails
          key={car.id}
          marca={car.marca}
          ano={car.ano}
          cor={car.cor}
        />
      ))}
    </div>
  );
}

export default App;
