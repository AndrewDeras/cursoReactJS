//components

import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge'
//css and styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions name="Andrew" job="programador" />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
