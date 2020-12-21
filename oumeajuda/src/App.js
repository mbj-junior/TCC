import "fontsource-roboto";

import React, { Component } from "react";

import Menu from "./component/Menu";
import { useCookies } from "react-cookie";

export default function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/",
    });
  }

  return (
    <>
      {/* <div className="App">
      <h1>React cookies</h1>
       {cookies.user && <p>{cookies.user}</p>}
      <button onClick={handleCookie}>Set Cookie</button>
    </div> */}
      <Menu></Menu>
    </>
  );
}
