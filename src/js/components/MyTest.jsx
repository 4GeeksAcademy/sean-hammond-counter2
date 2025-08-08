import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

const counterArray = [0, 0, 0, 0, 0];

//function to run counter
function counterIncrement(index) {
	counterArray[index] += 1;
	if (counterArray[index] >= 10) {
		counterArray[index] = 0;
		if (index >= 0) {
			counterArray[index - 1] += 1;
		}
	} else if (counterArray[index] < 0) {
		console.log("counter digit should not be <0 but it is " + counterArray[index])
		counterArray[index] = 0;
	}
	return(counterArray[index]);
}

//create your first component
const Home = () => {
	return (
		<main className="container">
			<span>{counterIncrement(counterArray.length - 1)}</span>
			<span>{counterIncrement(counterArray.length - 2)}</span>
			<span>{counterIncrement(counterArray.length - 3)}</span>
			<span>{counterIncrement(counterArray.length - 4)}</span>
			<span>{counterIncrement(counterArray.length - 5)}</span>
		</main>
	);
};

export default Home;