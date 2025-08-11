import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";


// ---------> REMINDER: ANNOTATE HOW CODE WORKS FOR FUTURE SELF !!!!!!!!!!!!!!!!! <---------

// "Time" IN MY COMMENTS refers to the number of seconds since the page loaded. Not to be confused with the variable called "time", which in theory is the same thing. The "time" variable is passed in from Counter.jsx in the Components folder.

//create your first component
const Home = ({ time }) => {
  const stringTime = time.toString(); // time as a string WITHOUT leading zeros
  let stringTimeWithZeros = stringTime; // time as a string WITH leading zeros
  let leadingZeros = 7 - stringTime.length; // how many leading zeros to display before the time if time has less than 6 digits
  // Keeps adding leading zeros until stringTimeWithZeros has 6 digits
  for (let i = 1; i < leadingZeros; i++) {
    stringTimeWithZeros = "0" + stringTimeWithZeros;
  } 

  return (
    <div className="container text-center">
      {/* Each digit of time displayed in a span, from left to right, starting with leading zeros, such that the entire number always has 6 digits */}
      <span className="digit1 border bg-secondary p-3 m-2">&#128344;</span>
      <span className="digit1 border bg-secondary p-3 m-2">{stringTimeWithZeros[0]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTimeWithZeros[1]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTimeWithZeros[2]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTimeWithZeros[3]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTimeWithZeros[4]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTimeWithZeros[5]}</span>
      <div className="text-white fixed-bottom">Made by Sean Hammond, student at 4Geeks Academy</div>
    </div>
  );
};

export default Home;
// Project made by Sean Hammond, student at 4Geeks Academy
