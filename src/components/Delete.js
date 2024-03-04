import React from 'react'
import { useNavigate } from 'react-router-dom'

function Delete() {
    const navigate=useNavigate()
  function  loginHandler(){
    navigate("/")

  }
  return (

    <div>
      <h1>User is deleted</h1>
      <p>Login new user</p>
      <button onClick={loginHandler}>LoginPage</button>
    </div>
  )
}

export default Delete
