import React from "react";
import Card from "./card.js";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className=" card text-center mt-5">
			<Navbar />
			<Jumbotron />
			<Card />
            <Card />
            <Card />
            <Card />
			<Footer />
		</div>
	);
}
