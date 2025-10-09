import styles from "./ErrorsPage.module.css";
const ErrorsPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.status}>404 - Page Not Found</h1>
      <h2 className={styles.message}>
        The page you're looking for doesn't exist.
      </h2>
    </main>
  );
};

export default ErrorsPage;
