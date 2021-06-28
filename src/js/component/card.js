import React from "react";

// let Card = {
// 	title: "card title",
// 	description: "description being...",
// 	img:
// 		"https://i.pinimg.com/564x/f2/c8/3a/f2c83a8381f5777701aefaff45681af7.jpg"
// };
const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
