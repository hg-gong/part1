import React from 'react';
import './App.css';
import Card from "./Card"
import Game from "./Game"
import {
  BrowserRouter as Router,
  Route,
  Routes,
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
