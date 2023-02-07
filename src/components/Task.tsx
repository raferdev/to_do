import { SetStateAction } from "react";
import styles from "./Task.module.css";
import { ReactComponent as TrashIcon} from '../assets/trash.svg';

export function Task({id, task, finished, setTasks }: TaskProps) {
  function handlerCheckInput() {
    setTasks((state) => {
      return state.map((oldTask) => {
        if (oldTask.id === id) {
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
  function handlerDeleteTask() {
    setTasks((state) => {
      return state.filter((oldTask) => {
        if (oldTask.id === id) {
          return false
        }
        return true;
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
        />
        <label htmlFor={`checkbox_${task}`}></label>
      </div>
      <p>{task}</p>
      <div onClick={handlerDeleteTask} className={styles.trashWrapper}>
        <TrashIcon className={styles.svgTrash}/>
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
  id:string;
  task: string;
  finished: boolean;
  setTasks: (value: SetStateAction<TaskInput[]>) => void;
}
