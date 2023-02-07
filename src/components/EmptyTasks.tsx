import styles from "./EmptyTasks.module.css";
import bookListIcon from "../assets/Clipboard.svg";

export function EmptyTasks() {
  return (
    <div className={styles.bodyDiv}>
      <img src={bookListIcon} alt="book list icon" />
      <div className={styles.textWrapper}>
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
