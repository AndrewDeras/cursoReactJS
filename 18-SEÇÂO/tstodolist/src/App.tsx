import { useState } from 'react';

//css
import styles from './App.module.css';

// interface
import { ITask } from './interfaces/Task';

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';


function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div >
      <Header />
      <div className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Salvar tarefa' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas.</h2>
          <TaskList btnText='Salvar tarefa' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
