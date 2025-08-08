import React, { useEffect, useState } from "react";
// import Test from './Test.jsx'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [seconds , setSeconds] = useState(0)
    // const seconds = 0

  // something happens when page loads
  useEffect(() => {
    
  }, []);

 setInterval(()=> setSeconds(seconds + 1), 1000)

  return (
    <div className="text-center">
      {seconds}
      
    </div>
  );
};

export default Home;

// {/* <Test propTitle={seconds} /> */}