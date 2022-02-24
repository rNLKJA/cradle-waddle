// import required stylesheet
import styles from "../../styles/login/Login.module.scss";

export default function LoginIllustration(): JSX.Element {
  return (
    <div className={styles.illustration}>
      <div className={styles.illustrationTextContainer}>
        <h1 className={styles.h1} hidden>
          随便の前端技术堆积站
        </h1>
        <p className={styles.p} hidden>
          @rNLKJA, kwitter777
        </p>
      </div>
    </div>
  );
}
