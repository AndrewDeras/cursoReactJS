import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 11;
  const [name] = useState('Andrew');
  const redTitle = false;

  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>
      {/*  css componente */}
      <MyComponent />
      <p>paragrafo global app.js</p>
      {/* css inline */}
      <p style={{
        color: 'blue',
        padding: '25px',
        borderTop: '2px solid red'
      }} >
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 15
        ? ({ color: 'green' })
        : ({ color: 'red' })} >
        Css inline dinâmico
      </h2>
      <h2 style={n > 15
        ? ({ color: 'green' })
        : ({ color: 'red' })} >
        Css inline dinâmico
      </h2>
      <h2 style={name === 'Andrew'
        ? ({ color: 'green', backgroundColor: 'black' })
        : null} >
        Name teste
      </h2>
      {/* classes dinâmicas */}
      <h2 className={redTitle ? 'red-title' : 'title'} >
        Este titulo vai ter classe dinâmica
      </h2>
      {/* css module */}
      <Title />
    </div>
  );
}

export default App;
