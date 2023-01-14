import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Andrew', 'Lindsay', 'Jeffrey', 'Maria', 'Alexandre']);

  const [users, setUsers] = useState([
    { id: 1, name: 'Andrew', age: 24 },
    { id: 2, name: 'Lindsay', age: 16 },
    { id: 3, name: 'Jeffrey', age: 31 }
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    setUsers((prevUsers) => {
      console.log(prevUsers);

      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom} >Delete random user</button>
    </div>
  )
}

export default ListRender