import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from '../App.js';

const About = () => {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(1)

  useEffect(() => {
    // setRenderCount(prevRenderCount => prevRenderCount + 1)
    renderCount.current = renderCount.current + 1
  }, [name])
  return (
  <>
    <nav>
    <ul>    
      <li>
        <Link to="/">app</Link>
      </li>

      
    </ul>
    </nav>  
    <input value={name} onChange={e => setName(e.target.value)} />
      <div>Mon nom est {name}</div>
      <div>J'ai rendu l'image {renderCount.current} fois</div>
  </>
  )
}

export default About;