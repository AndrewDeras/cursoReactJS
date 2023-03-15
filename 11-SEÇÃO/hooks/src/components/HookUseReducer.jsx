import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  })

  // useReducer com actions

  let initialsTasks = [
    { id: 1, text: 'Alguma coisa 1' },
    { id: 2, text: 'Alguma coisa 2' },
    { id: 3, text: 'Alguma coisa 3' }
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText
        };
        setTaskText('');

        return [...state, newTask];

      case 'DELETE':
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState('');
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialsTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: 'ADD' });
  }

  const removeTask = (id) => {
    dispatchTasks({ type: 'DELETE', id })
  }


  return (
    <div>
      <div className="mb-4">
        <h2>HookUseReducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch} >Alterar número</button>
      </div>
      <div className="mb-4">
        <h3>Tarefas: </h3>
        <form onSubmit={handleSubmit} >
          <input type="text" value={taskText} onChange={({ target }) => setTaskText(target.value)} />
          <input type="submit" value="Salvar" />
        </form>
        {
          tasks.map((task) => (
            <li onDoubleClick={() => removeTask(task.id)} key={task.id} >{task.text}</li>
          ))
        }
      </div>
      <hr />
    </div>
  )
}

export default HookUseReducer