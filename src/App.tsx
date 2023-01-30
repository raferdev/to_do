import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.js";
import { TaskInput } from "./components/TaskInput.js";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TaskInput/>
      <div className={styles.body}></div>
    </div>
  );
}

export default App;
