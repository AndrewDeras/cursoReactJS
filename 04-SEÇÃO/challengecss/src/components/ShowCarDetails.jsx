import styles from './ShowCarDetails.module.css'

const ShowCarDetails = ({ marca, ano, cor }) => {
  return (
    <div className={styles['container']}>
      <ul>
        <li className={styles['li_style']} >Marca: {marca}</li>
        <li className={styles['li_style']} >Ano: {ano}</li>
        <li className={styles['li_style']} >Cor: {cor}</li>
      </ul>
    </div>
  )
}

export default ShowCarDetails