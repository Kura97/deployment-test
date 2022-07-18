import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Update() {
    const [id, setId] = useState(null) //عشان اول ما افتح الجهاز بتكون القيمة نل
    const [toDo, setToDo] = useState("")
    const navigate = useNavigate("")
 
      const updateData = () => {
        axios
          .update(`https://62d3e34acd960e45d44f7cdf.mockapi.io/fakeAPI/${id}`, {
            toDo
          })
          .then((res) => {
            console.log(res);
            navigate("/Home");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    

  return (
    <div>
        <input placeholder='To Do' onChange={(e) =>{setToDo(e.target.value)}}></input>
        <button onClick={updateData}>Update (not working x_x) </button>
        <p>{toDo}</p>

    </div>
  )
}

export default Update