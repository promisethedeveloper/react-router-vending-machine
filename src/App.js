import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Cocacola from "./Cocacola";
import Fanta from "./Fanta";
import Sprite from "./Sprite";
import VendingMachine from "./VendingMachine";
import "./App.css";
import Navbar from "./Navbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/cocacola">
					<Cocacola />
				</Route>
				<Route exact path="/fanta">
					<Fanta />
				</Route>
				<Route exact path="/sprite">
					<Sprite />
				</Route>
				<Navbar />
			</BrowserRouter>
		</div>
	);
}

export default App;
