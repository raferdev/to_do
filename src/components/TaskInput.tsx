import styles from "./TaskInput.module.css";
import plusSvgIcon from "../assets/plus.svg";
import { ChangeEvent, SetStateAction, useState } from "react";

export function TaskInput({ setTasks }: TaskInputProps) {

  const [task, setTask] = useState("");

  function handleInputNewTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleButtonNewTask(task: Task) {
    setTasks((tasks) => {
      return [...tasks, task];
    });
    setTask("");
  }

  return (
    <div className={styles.inputWrap}>
      <input
        name="inputTask"
        value={task}
        onChange={handleInputNewTask}
        className={styles.input}
        placeholder="Create a new task here!"
      />
      <button
        className={styles.createButton}
        onMouseDown={() => handleButtonNewTask({
          task,
          finished:false
        })}
      >
        Create <img src={plusSvgIcon} />
      </button>
    </div>
  );
}

interface Task {
  task: string;
  finished: boolean;
};

interface TaskInputProps {
  setTasks: (value: SetStateAction<Task[]>) => void;
};