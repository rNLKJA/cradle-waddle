import styles from "../styles/error.module.scss";

export default function Custom404() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.error404}>404</h1>

      <p className={styles.errorMsg}>Oops! Page not found.</p>
    </div>
  );
}
