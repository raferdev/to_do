import { SetStateAction } from "react";
import styles from "./Task.module.css";
import trashIcon from "../assets/trash.svg"
export function Task({ task, finished, setTasks }: TaskProps) {
  function handlerCheckInput() {
    setTasks((state) => {
      return state.map((oldTask) => {
        if (oldTask.task === task) {
          let newTask = {
            id: oldTask.id,
            task: oldTask.task,
            finished: !oldTask.finished,
          };
          return newTask;
        }
        return oldTask;
      });
    });
  }

  return (
    <div
      className={finished ? styles.taskChecked : styles.taskUnchecked}
      key={task}
    >
      <div className={styles.checkboxWrapper}>
        <input
          onClick={handlerCheckInput}
          className={finished ? styles.inputChecked : styles.inputUncheked}
          name={`checkbox_${task}`}
          id={`checkbox_${task}`}
          type="checkbox"
          checked={finished}
        />
        <label htmlFor={`checkbox_${task}`}></label>
      </div>
      <p>{task}</p>
      <div className={styles.trashWrapper}>
        <img src={trashIcon}/>
      </div>
    </div>
  );
}
interface TaskInput {
  id:string;
  task: string;
  finished: boolean;
}

interface TaskProps {
  task: string;
  finished: boolean;
  setTasks: (value: SetStateAction<TaskInput[]>) => void;
}
