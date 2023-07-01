import React from 'react'

type Props = {
  btnText: string;
}

const TaskList = ({ btnText }: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" name='title' placeholder='Título da tarefa' />
      </div>
      <div>
        <label htmlFor="task">Tarefa:</label>
        <input type="text" name='task' placeholder='Descrição da tarefa' />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskList