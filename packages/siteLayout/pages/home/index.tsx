import { Contaner10 } from "../../src";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Contaner10 className={styles.c10}>Container10</Contaner10>

      <Contaner10 className={styles.c10} setStylesToChild>
        <div>Container10 - setStylesToChild</div>
      </Contaner10>
    </div>
  );
}

export default Home;
