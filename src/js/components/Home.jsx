import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";

// REMINDER: ANNOTATE HOW CODE WORKS FOR FUTURE SELF

//create your first component
const Home = ({ time }) => {
  const stringTime = time.toString();
  console.log(stringTime + 1);
  const digit1 = time < 10 ? stringTime[0] : stringTime[1];
  const digit2 = time < 10 ? "0" : stringTime[0];

// condition ? do this : do that;          THIS IS A TERNARY OPERATOR

// 0 1 2 POSITIONS
// ---------------
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 10
// 13

  return (
    <div className="text-center">
      <span className="digit1 border bg-secondary p-3 m-2">{digit2}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{digit1}</span>
    </div>
  );
};

export default Home;

//{stringTime[0]}
