import { Container10 } from "../../src";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Container10 className={styles.c10}>Container10</Container10>

      <Container10 className={styles.c10} setStylesToChild>
        <div>Container10 - setStylesToChild</div>
      </Container10>
    </div>
  );
}

export default Home;
