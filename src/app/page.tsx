import styles from "./home.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.homeBox}>
      <h1 className={styles.homeTitle}>Task Badge Board</h1>
      <p className={styles.homeP}>Sblocca gli obiettivi, completando le task!</p>
    </div>
    </>
  )
}
