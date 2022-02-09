// import required components
import LoginInfo from "../../components/login/LoginInfo";
import RegistrationInfo from "../../components/login/registrationInfo";
import LoginIllustration from "../../components/login/LoginIllustration";

import { useState } from "react";

// import stylesheet
import styles from "../../styles/login/Login.module.scss";

export default function LoginPage(): JSX.Element {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className={styles.loginMainContainer}>
      {/* Left Grid component which contains another box of login component */}
      <div className={styles.grid1}>
        <div className={styles.loginInfoContainer}>
          {isLogin ? (
            <LoginInfo isLogin={isLogin} setLogin={setLogin} />
          ) : (
            <RegistrationInfo isLogin={isLogin} setLogin={setLogin} />
          )}
        </div>
      </div>

      {/* Right Grid component which contains the illustration component */}
      <div className={styles.grid2}>
        <LoginIllustration />
      </div>
    </div>
  );
}
