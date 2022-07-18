import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])

    useEffect (() => {

        axios.get('https://62d3e34acd960e45d44f7cdf.mockapi.io/fakeAPI')
        .then(res => {
            console.log(res.data.title)
            setData(res.data)
        })
        .catch((err)=> {
            console.log(err);
        })


    }, [])
    // update
    const setUpdate =(item)=>{
        let {id, toDo} = item;
        localStorage.setItem("id", id)
        localStorage.setItem("toDo", toDo)

    };

    // get data after delete
    const getData = ()=>{
        axios.get('https://62d3e34acd960e45d44f7cdf.mockapi.io/fakeAPI')
        .then(getData => {
            setData(getData.data)
        })
    }
    // delete data
    const onDelete = (id) => {
        axios
          .delete(`https://62d3e34acd960e45d44f7cdf.mockapi.io/fakeAPI/${id}`)
          .then(() => {
            getData();
          });
      };
  return (
    <div>
        <ul>
    {   
    data.map((item)=>
    <>
    <li>{item.id + " "+ item.toDo}
    </li>
    <Link to="/Update">
    <button onClick={setUpdate(item)}>Update</button>
    </Link>
    <button onClick={()=>{
        onDelete(item.id)
    }} >  Delete  </button>


    </>
    )
    }
    </ul>
    </div>
  )
}

export default Home