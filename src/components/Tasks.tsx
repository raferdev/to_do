import { useState } from "react";
import styles from "./Tasks.module.css";

export function Tasks({ tasks }: TasksProps) {
 const [completes, setCompletes] = useState(0);
 
 
  return (
    <main className={styles.tasks}>
      <header>
        <h2>
          Tarefas criadas<span> {tasks.length - 1} </span>
        </h2>
        <h3>
          Concluídas<span>{completes} de {tasks.length - 1} </span>
        </h3>
      </header>
      {tasks.map((task) => {
        return (
          <div className={styles.task} key={task}>
            {task}
          </div>
        );
      })}
    </main>
  );
}

interface TasksProps {
  tasks: string[];
}
