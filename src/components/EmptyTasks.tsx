import styles from "./EmptyTasks.module.css";
import bookListIcon from "../assets/Clipboard.svg";

export function EmptyTasks() {
  return (
    <div className={styles.bodyDiv}>
      <img src={bookListIcon} alt="book list icon" />
      <div className={styles.textWrapper}>
        <h1>{"You don't have tasks yet :("}</h1>
        <p>Create a new task and organize your things to do</p>
      </div>
    </div>
  );
}
