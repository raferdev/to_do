import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.js";
import { TaskInput } from "./components/TaskInput.js";
import { Tasks } from "./components/Tasks.js";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["tucsigatunds"])
  return (
    <div className={styles.app}>
      <Header />
      <TaskInput setTasks={setTasks}/>
      <Tasks tasks={tasks}/>
      <div className={styles.body}></div>
    </div>
  );
}

export default App;
