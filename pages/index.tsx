import Header from "../components/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(styles.title, "style");

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Welcome Abrar</h1>
    </div>
  );
}
