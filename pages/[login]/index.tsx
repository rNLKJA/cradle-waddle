// import required components
import LoginInfo from "../../components/login/LoginInfo";
import LoginIllustration from "../../components/login/LoginIllustration";

// import stylesheet
import styles from "../../styles/Login.module.scss";

export default function LoginPage(): JSX.Element {
  return (
    <div className={styles.loginMainContainer}>
      {/* Left Grid component which contains another box of login component */}
      <div className={styles.grid1}>
        <div className={styles.loginInfoContainer}>
          <LoginInfo />
        </div>
      </div>

      {/* Right Grid component which contains the illustration component */}
      <div className={styles.grid2}>
        <LoginIllustration />
      </div>
    </div>
  );
}
