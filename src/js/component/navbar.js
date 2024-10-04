import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 container-fluid">
			<div className="container d-flex align-items-center">
					<img
						src="https://www.barullo.com/blog-disfraces/wp-content/uploads/2018/11/logo-star-wars-300x169.png"
						alt="Starwars"
						className="navbar-brand"
						style={{ maxHeight: '50px', height: 'auto' }} // Ajusta la altura máxima
					/>

				<ul className="nav nav-pills ms-auto">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favorites</a>
						<ul className="dropdown-menu">
							<li className="dropdown-item" to="#scrollspyHeading3">Third</li>
							<li className="dropdown-item" to="#scrollspyHeading4">Fourth</li>
							<li className="dropdown-item" to="#scrollspyHeading5">Fifth</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
