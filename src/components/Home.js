import React, {useState}  from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from './Form';



      const Home = () => {
        const [info, setEmail] = useState({
          email:"",
      }
      );

      const handlechange = (e) => {
        setEmail(e.target.value)
        }

  return (
    
    <>
    <nav>
        <ul>    
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>
    </nav>
    <Form valeur={info.email} onChange={handlechange}/>

   
    </>

  )
}

export default Home;