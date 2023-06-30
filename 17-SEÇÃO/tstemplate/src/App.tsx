import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";
import State from "./components/State";
import Context from "./components/Context";

import { createContext } from "react";

// 9 - context

interface IAppContext {
  team: string;
  country: string;
  championsLeague: number;
}
export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // 1 - variaveis
  const name: string = 'Andrew';
  const isLogged: boolean = true;

  // 2 - functions
  const userGreeting = (name: string): string => {
    return `Hello ${name}`;
  }

  const contextValue: IAppContext = {
    team: 'Real Madrid',
    country: 'Spain',
    championsLeague: 14
  };


  return (
    <AppContext.Provider value={contextValue} >
      <div className="App">
        <h1>React com typescript</h1>
        {isLogged ? (
          <h2>{name} está logado.</h2>
        ) : (
          <h2>O{name} não está logado.</h2>
        )}
        <hr />
        {userGreeting(name)}
        <FirstComponent />
        <hr />
        <SecondComponent name={name} />
        <hr />
        <Destructuring title="React Ts" content="Learning React with Ts" commentsQty={5} tags={['js', 'html', 'css']} />
        <hr />
        <State />
        <hr />
        <Context />

      </div>
    </AppContext.Provider>
  );
}

export default App;
