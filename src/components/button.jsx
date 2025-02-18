import styles from "./Button.module.css"
export default function MyButton(){
    return(
       <button className={styles.button}>Click Me!</button>
    );
}


export function Button({isPrimary}){
    return(
        <button className={isPrimary ? styles.primary : styles.secondary}>Click here!</button>
    )
}
