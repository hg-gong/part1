import React from 'react';
import "./Card.css"

export default () => (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY Lwtoom</h3>
        <p>Dear Lwtoom,</p>
        <p>
          Happy birthday to the most amazing and beautiful girl in the world! 
          I am so lucky to have you in my life and I am grateful for every moment we share together.
          See you soon babe.
        </p>
        <p className="name">Fanyuan Lai</p>
      </div>
    </div>
  );
  