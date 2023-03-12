import styles from './CreatePost.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument('posts');

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate img url

    // create arr tags

    // check all values

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    })

    // redirect home page

  }


  return (
    <div className={styles.create_post} >
      <h2>Criar post</h2>
      <p>Escreva sobre o quiser e compartilhe suas ideias!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo: </span>
          <input
            type="text"
            name='title'
            required placeholder='Pense em um bom título..'
            onChange={({ target }) => setTitle(target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem: </span>
          <input
            type="text"
            name='image'
            required placeholder='Insira uma imagem que representa seu post..'
            onChange={({ target }) => setImage(target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo: </span>
          <textarea
            name='body'
            required placeholder='Insira o conteúdo do post..'
            onChange={({ target }) => setBody(target.value)}
            value={body}>
          </textarea>
        </label>
        <label>
          <span>Tags: </span>
          <input
            type="text"
            name='tags'
            required placeholder='Insira as tags separadas por vírgula.'
            onChange={({ target }) => setTags(target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Publicar</button>}
        {response.loading && <button className="btn" disabled >Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  )
}

export default CreatePost