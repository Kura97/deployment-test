import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Update from './Update'

function ToDo() {
    const [toDo, setToDo] = useState("")
    const navigate = useNavigate("")

    const postData=() =>{
        axios.post ('https://62d3e34acd960e45d44f7cdf.mockapi.io/fakeAPI/', {
            toDo,
        }).then(res=>{
            console.log(res);
            navigate("/Home")
        })

    }
  return (
    <div>
        <input placeholder='Enter something' onChange={(e) =>{setToDo(e.target.value)}}></input>
        <button onClick={postData}>Add to my list</button>

    </div>
  )
}

export default ToDo