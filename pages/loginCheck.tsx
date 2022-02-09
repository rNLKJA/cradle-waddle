// import required dependencies
import { useState, useEffect } from "react";
import axios from "axios";

// login check page
export default function loginCheck() {
  const [username, setUsername] = useState("NOT DEFINE");

  useEffect(() => {
    obtainSessionInformation(setUsername);
  }, []);

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}

// TODO: change types for parameters
// TODO: add jsdoc
export const obtainSessionInformation = async (setUsername: any) => {
  try {
    await axios.get("http://localhost:9550/user/userinfo").then((res) => {
      console.log(res);
      setUsername(res.data.username);
    });
  } catch (err) {
    console.log(err);
  }
};
