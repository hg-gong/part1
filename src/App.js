import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import Card from "./Card"
import Game from "./Game"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Navigate
} from "react-router-dom";
import { Link } from 'react-router-dom';


const App = () => {

  return (
    <div className="main">
      <Game/>
      <Router>
        <Routes>
          <Route path="/Card" element={<Card />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
      <Link to="/Card" className='link'>Everyday Happy Birthday</Link>
      {/* <Link to="/Game">Game</Link> */}
      </Router>

    </div >
  )
}

export default App;
