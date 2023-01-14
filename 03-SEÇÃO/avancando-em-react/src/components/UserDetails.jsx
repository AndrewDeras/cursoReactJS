import React from 'react'

const UserDetails = ({ name, age, nacionality }) => {
  return (
    <div>
      <h4>Detalhes do usuário. </h4>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Nacionalidade: {nacionality}</li>
      </ul>
      {age >= 18
        ? <p>O usuário pode tirar a habilitação.</p>
        : <p>O usuário não pode tirar a habilitação</p>
      }

    </div>
  )
}

export default UserDetails