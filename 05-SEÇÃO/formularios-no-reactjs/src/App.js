import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <MyForm user={{
        name: 'Andrew',
        email: 'andrewderas7@gmail.com',
        bio: 'dev',
        role: 'admin'
      }} />
    </div>
  );
}

export default App;
