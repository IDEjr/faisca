import styles from '../styles/fadein.module.css'

function FadeInImage (props){
    return (
      <div className={styles.fadeInImage}>
        <img src={props.imageSrc}/>
      </div>
    )
}

export default FadeInImage