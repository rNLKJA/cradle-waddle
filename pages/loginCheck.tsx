// import required dependencies
import { useState, useEffect, Dispatch } from "react";
import axios from "axios";
const jwt = require("jsonwebtoken");
import Cookies from "js-cookie";

// define data interface
interface validateUserProps {
  user: string;
  email: string;
  lat: string;
  setUsername: Dispatch<string>;
}

// TODO: This file should be removed since we do not need this route

// login check page
export default function loginCheck() {
  let userInfo: validateUserProps;
  userInfo = jwt.decode(Cookies.get("token"));
  const [username, setUsername] = useState("Cradle User");

  useEffect(() => {
    setUsername(userInfo.user);
  }, [userInfo]);

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}
