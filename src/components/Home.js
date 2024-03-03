import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to admin</h1>
      <Link to="/newemploy"><button>Create new Employee</button></Link>
    </div>
  )
}

export default Home
