import { Header } from "./Components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
