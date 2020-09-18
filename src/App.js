import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginAuthentication from "./components/LoginAuthentication/LoginAuthentication";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error/Error";
import Destination from "./components/Destination/Destination";
import PrivateRoutePath from "./components/PrivateRoutePath/PrivateRoutePath";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/login">
						<LoginAuthentication></LoginAuthentication>
					</Route>
					<Route path="/booking/:id">
						<Booking></Booking>
					</Route>
					<PrivateRoutePath path="/destination">
						<Destination></Destination>
					</PrivateRoutePath>
					<Route path="*">
						<Error></Error>
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
