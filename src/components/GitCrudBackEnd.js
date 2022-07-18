import React, {useEffect, useState} from 'react'
import axios from 'axios'

function GitCrudBackEnd() {
    const [data, setData] = useState([])

    useEffect (() => {

        axios.get('http://127.0.0.1:8000/main_app/list_products')
        .then(res => {
            console.log(res.data[1].title)
            setData(res.data)
        })
        .catch((err)=> {
            console.log(err);
        })


    }, [])

  return (
    <div>
        <ul>
    {   
    data.map((item )=>
    <li>{item.title}
    </li>
    )
    }
    </ul>
    </div>
  )
}

export default GitCrudBackEnd