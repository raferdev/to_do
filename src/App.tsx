import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./Header.js";

function App() {
  return <div className={styles.app}>
    <Header/>
  </div>;
}

export default App;
