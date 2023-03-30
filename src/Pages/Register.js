import React from 'react'
import Styles from '../Styles/Register.module.scss'
function Register() {
  return (
    <div className={Styles.root}>
      <form action="">
        <input type="text" placeholder="User..." /> 
        <input type="email" placeholder="Email..." /> 
        <input type="password" placeholder="Password..." />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register