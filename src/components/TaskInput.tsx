import styles from "./TaskInput.module.css";
import plusSvgIcon from "../assets/plus.svg"
export function TaskInput() {
  return (
    <div className={styles.inputWrap}>
      <input className={styles.input} placeholder="Create a new task here!" />
      <button className={styles.createButton}>Create <img src={plusSvgIcon}/></button>
    </div>
  );
}
