import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/portfolio" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
