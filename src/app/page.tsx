import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Olá mundo!</h1>
      </main>
    </div>
  );
}
