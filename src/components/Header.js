import React from "react";
import { Link } from "react-router-dom";


function Header() {
  const handleClick=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
  return (
    <div>
        <nav>
            <ul className='navul'>
                <li className='navli'>
                <Link to="/Home">Home</Link>
                </li>
                {/* <li className='navli'>
                <Link to="/GitCrudBackEnd">GitCrud BackEnd</Link>
                </li> */}
                <li className='navli'>
                <Link to="/ToDo">ToDo</Link>
                </li>
                {/* <li className='navli'>
                <Link to="/Update">Update (using only by update button on Home page) </Link>
                </li> */}
                <li className='navli'>
                <Link to="/login">Login</Link>
                </li>
                <li className='navli' onClick={handleClick}>
                <Link to="/Home">Logout</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
