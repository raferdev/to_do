import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.js";
import { TaskInput } from "./components/TaskInput.js";
import { Tasks } from "./components/Tasks.js";
import { useState } from "react";
import { EmptyTasks } from "./components/EmptyTasks.js";

function App() {
  const [tasks, setTasks] = useState([
    { id: "", task: "", finished: false },
  ]);
  let completes = 0;

  tasks.forEach((task) => {
    if (task.finished) {
      completes++;
    }
  });

  return (
    <div className={styles.app}>
      <Header />
      <TaskInput setTasks={setTasks} />
      {tasks.length > 1 ? (
        <Tasks tasks={tasks} setTasks={setTasks} completes={completes} />
      ) : (
        <EmptyTasks />
      )}
      <div className={styles.body}></div>
    </div>
  );
}

export default App;
