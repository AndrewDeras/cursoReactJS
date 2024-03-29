import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'

// css
import styles from './TaskForm.module.css';

// interface

import { ITask } from '../../interfaces/Task';

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, description: string): void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, description);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, description };

      setTaskList!([...taskList, newTask]);

      setTitle('');
      setDescription('');
    }

  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    if (target.name === 'title') {
      setTitle(target.value)
    } else {
      setDescription(target.value);
    }
  }


  return (
    <form onSubmit={addTaskHandler} className={styles.form} >
      <div className={styles.input_container} >
        <label htmlFor="title">Título:</label>
        <input id='title' type="text" name='title' placeholder='Título da tarefa' value={title} onChange={handleChange} />
      </div>
      <div className={styles.input_container} >
        <label htmlFor="description">Descrição:</label>
        <input id='description' type="text" name='description' placeholder='Descrição da tarefa' value={description} onChange={handleChange} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm