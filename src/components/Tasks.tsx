import { SetStateAction } from "react";
import styles from "./Tasks.module.css";
import { Task } from "./Task.js";

export function Tasks({ tasks, setTasks, completes }: TasksProps) {
  return (
    <main className={styles.tasks}>
      <header>
        <h2>
          Tarefas criadas<span> {tasks.length - 1} </span>
        </h2>
        <h3>
          Concluídas
          <span>
            {completes} de {tasks.length - 1}{" "}
          </span>
        </h3>
      </header>
      {tasks.map((task) => {
        if(task.id === "") {
          return
        }
        return <Task id={task.id} task={task.task} finished={task.finished} setTasks={setTasks} key={task.task} />;
      })}
    </main>
  );
}

interface TaskInput {
  id: string;
  task: string;
  finished: boolean;
};

interface TasksProps {
  tasks: TaskInput[];
  setTasks: (value: SetStateAction<TaskInput[]>) => void;
  completes:number;
};