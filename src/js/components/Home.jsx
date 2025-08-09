import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";

//create your first component
const Home = ({ time }) => {
  const stringTime = time.toString();
  console.log(stringTime + 1);

// 12 --> [0][1]

  return (
    <div className="text-center">
      <span className="digit1 border bg-secondary p-3 m-2">{stringTime[0]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTime[1]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTime[2]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTime[3]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTime[4]}</span>
      <span className="digit2 border bg-secondary p-3 m-2">{stringTime[5]}</span>
    </div>
  );
};

export default Home;
