import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.js";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.body}></div>
    </div>
  );
}

export default App;
