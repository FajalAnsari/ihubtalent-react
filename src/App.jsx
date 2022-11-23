import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/service" element={<Service />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;