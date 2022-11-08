import styles from "./styles.module.css"

export default function ButtonDiagonal({children}) {

    return (
        <button className={styles.button}>
            <div></div>
            {children}
        </button>
    )
}