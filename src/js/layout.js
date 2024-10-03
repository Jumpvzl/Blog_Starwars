import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const footerData = [
		{
			githubURL: "https://github.com/Jumpvzl",
			name: "Juan Pablo Castillo",
			geeksName: "4geeksacademy",
			geeksURL: "https://www.4geeksacademy.com",
			imagenURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NzJUc0PYtkgp7lfNKizmgQHaHB%26pid%3DApi&f=1&ipt=271cb3eb7e5f15522c250313a63e781bdb17fd428148a3cfa3fc136c7c118f42&ipo=images",
		},
	];
	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/update/:idContact" element={<Demo />} />
						<Route path="/create" element={<Demo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer properties={footerData}/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};


export default injectContext(Layout);
