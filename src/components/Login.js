import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate("")

    const loginUser=() =>{
        localStorage.setItem("username", userName)
        localStorage.setItem("password", password)
            navigate("/Home")
        
    }
  return (
    <div>
        <input placeholder='username' onChange={(e) =>{setUserName(e.target.value)}}></input>
        <input type="password" placeholder='password' onChange={(e) =>{setPassword(e.target.value)}}></input>

        <button onClick={loginUser}>Login</button>

    </div>
  )
}

export default Login