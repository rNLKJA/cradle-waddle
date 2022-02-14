import React, { useState, useEffect, useRef } from "react";

export default function Tutorial() {
  const [text, setText] = useState("text");
  const [isText, setIsText] = useState(true);
  const [data, setData] = useState({ username: 123, password: 123 });

  // if axios request
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submit");
  };

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <>
      <input
        ref={inputElement}
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>

      <button onClick={focusInput}>Focus</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
