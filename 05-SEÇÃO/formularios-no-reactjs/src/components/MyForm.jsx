import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('enviando formulário');
    console.log(name, email, bio, role);

    //07 - limpando os input

    setName('');
    setEmail('');
    setBio('');
    setRole('');
  }


  return (
    <div>
      {/* 1 - criação do form */}
      {/* handle submit */}
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            onChange={handleName}
            type="text"
            name='name'
            placeholder='Digite seu nome'
            value={name} />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          {/* 4 - simplificação de manipulação de state */}
          <span>E-mail</span>
          <input
            type="text"
            name='email' p
            laceholder='Digite aqui seu email'
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio: </span>
          <textarea
            name='bio'
            placeholder='Descrição do usuário'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value='enviar' />
      </form>
    </div>
  )
}

export default MyForm