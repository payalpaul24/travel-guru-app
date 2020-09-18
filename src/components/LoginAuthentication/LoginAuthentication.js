import React, { useContext, useState } from "react";
import AnotherAccount from "../AnotherAccount/AnotherAccount";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
	const [newUser, setNewUser] = useState(false);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [currentUser, setCurrentUser] = useState({
		isSignedIn: false,
		email: "",
		password: "",
		error: "",
		success: false,
	});

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/" } };

	if (!firebase.apps.length) {
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}
	
	// Goolge Authentication

	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email } = result.user;
				const newUser = {
					isSignedIn: true,
					email: email,
					name: displayName,
				};
				setCurrentUser(newUser);

				setLoggedInUser(newUser);
				history.replace(from);
				console.log(newUser);
			})
			.catch(function(error) {
				const newUser = { ...currentUser };
				newUser.error = error.message;
				newUser.success = false;
				setLoggedInUser(newUser);
				console.log(error);
			});
	};

	// Facebook Authentication

	const handleFacebookSignIn = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email } = result.user;
				const newUser = {
					isSignedIn: true,
					email: email,
					name: displayName,
				};
				setCurrentUser(newUser);

				setLoggedInUser(newUser);
				history.replace(from);
				console.log(newUser);
			})
			.catch(function(error) {
				const newUser = { ...currentUser };
				newUser.error = error.message;
				newUser.success = false;
				setLoggedInUser(newUser);
				console.log(error);
			});
	};

	return (
		<section className="text-center">
			<div className="container">
				{newUser ? (
					<SignUp></SignUp>
				) : (
					<LoginForm></LoginForm>
				)}
				<AnotherAccount google={handleGoogleSignIn} facebook={handleFacebookSignIn}></AnotherAccount>
			</div>
		</section>
	);
};

export default Login;
