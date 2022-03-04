import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About.js';

const App = () => {
    const [post, setPost] = useState(''); 
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        // console.log(response)
        return response.json()
      })  
        .then((result) => {
          // console.log(result)
          setPost(result)
        
      })

    });
  return (
      <>
      <Router>
              <Routes>
              <Route path="/" element={<Home />} />        
              <Route path="About" element={<About />} />       
            </Routes>
          </Router>
          {post.title}
          
          
      </>
  );
}

export default App;
