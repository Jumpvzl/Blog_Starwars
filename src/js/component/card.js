import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Card = () => {
	return (
		<div className="overflow-x-scroll">
			<div className="card" style={{ width: "22rem" }}>
				<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-500x281.jpg" className="card-img-top" alt="Descripción de la imagen" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
					<Link to="/ruta/a/donde/quieres/ir" className="btn btn-primary">
						Go somewhere
					</Link>
				</div>
			</div>
		</div>
	);
};
