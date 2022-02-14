// import required libraries
import useSWR from "swr";
import { useRouter } from "next/router";
const jwt = require("jsonwebtoken");
import Cookies from "js-cookie";

/**
 * This function should return a user dashboard
 * This Dashboard is available to anyone who knows the username
 * @returns Dashboard(): JSX.Element
 */
export default function UserDashboard() {
  // decode user information from the given access token
  const userInfo = jwt.decode(Cookies.get("token"));

  return <h1>{`${userInfo.user} Dashboard`}</h1>;
}

interface userInfo {
  username: string;
}

const fetchUserInfo = ({ username }: userInfo) => {
  const router = useRouter();
};
