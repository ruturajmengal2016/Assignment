import React from "react";
import Styles from "../Styles/Login.module.scss";

function Login() {
  return (
    <div className={Styles.root}>
      <form action="">
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password..." />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
