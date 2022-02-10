import React, { useState, useEffect } from "react";

export default function Tutorial() {
  const [text, setText] = useState("text");
  const [isText, setIsText] = useState(true);
  const [data, setData] = useState({ username: 123, password: 123 });

  // if axios request
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>

      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
