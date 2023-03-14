import styles from './EditPost.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

const EditPost = () => {

  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);
      const textTags = post.tagsArray.join(', ');
      setTags(textTags);
    }
  }, [post])

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument('posts');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // validate img url

    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.');
    }

    // create arr tags

    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    // check all values

    if (!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos campos.');
    }

    if (formError) return;

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data);

    // redirect home page

    navigate('/dashboard');

  }


  return (
    <div className={styles.edit_post} >
      {post && (
        <>
          <h2>Editado post {post.title}</h2>
          <p>Altere os dados como precisar.</p>
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
            <p className={styles.preview_title} >Preview da imagem atual</p>
            <img className={styles.image_preview} src={post.image} alt={post.title} />
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
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && <button className="btn" disabled >Aguarde...</button>}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  )
}

export default EditPost