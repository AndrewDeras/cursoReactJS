import './App.css';
import City from '../src/assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChnageMessageState from './components/ChnageMessageState';
import UserDetails from './components/UserDetails';



function App() {
  //const name = 'Deras';
  const [userName] = useState('Barbosa');

  const cars = [
    { id: 1, brand: 'kia', km: 0, color: 'branco', newCar: true },
    { id: 2, brand: 'mercedes', km: 2000, color: 'prata', newCar: false },
    { id: 3, brand: 'honda', km: 27700, color: 'amarelo', newCar: false }
  ];

  const users = [
    { id: 1, name: 'Andrew', age: 24, nacionality: 'brasileiro, guatemalteco e salvadorenho' },
    { id: 2, name: 'Lindsay', age: 16, nacionality: 'brasileira e salvadorenha' },
    { id: 3, name: 'Jeffrey', age: 30, nacionality: 'brasileiro' },
    { id: 4, name: 'Alexandre', age: 64, nacionality: 'brasileiro' },
    { id: 5, name: 'Maria', age: 50, nacionality: 'salvadorenha' },
  ]

  function showMessage() {
    console.log('Ativou a função');
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando no react</h1>
      {/* Imagem em pasta public */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="cidade" />
      </div>
      <ManageData />
      <ListRender />
      {/* codicionais */}
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="Lambo" km={10} color="laranja" newCar={true} />
      <CarDetails brand="bmw" km={1110} color="azul" newCar={false} />
      <CarDetails brand="ferrari" km={1220} color="vermelho" newCar={true} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propsFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChnageMessageState handleMessage={handleMessage} />
      {/* tarefa */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          nacionality={user.nacionality}
        />
      ))}
    </div>
  );
}

export default App;
