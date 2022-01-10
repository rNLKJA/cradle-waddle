// import required components
import LoginInfo from "../../components/login/LoginInfo";
import LoginIllustration from "../../components/login/LoginIllustration";

// import stylesheet
import styles from "../../styles/Login.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.loginMainContainer}>
      <div className={styles.grid1}>
        <div className={styles.loginInfoContainer}>
          <LoginInfo />
        </div>
      </div>
      <div className={styles.grid2}>
        <LoginIllustration />
      </div>
    </div>
  );
}
