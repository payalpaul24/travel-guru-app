import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
	const { toggleUser} = props;

	return (
		<section className="m-auto" style={{border: '1px solid',padding: '20px',width:'60%'}}>
		<div className=" w-50 m-auto">
			<h3>Login</h3>
			<div className="form-group">
				<input type="email" className="form-control" placeholder="Email" />
			</div>
			<div className="form-group">
				<input type="password" className="form-control" placeholder="Password" />
			</div>
			<div className=" form-group d-flex forgot-pass">
				<div className="custom-control custom-checkbox mr-sm-2">
					<input type="checkbox" className="custom-control-input" id="rememberUser" />
					<label className="custom-control-label" htmlFor="rememberUser">
						Remember me
					</label>
				</div>
				<Link to="/" className="forgot-passowrd ml-auto text-warning">
					Forgot Password
				</Link>
			</div>
			<button type="submit" className="btn btn-warning tg-primary btn-block">
				Login
			</button>
			<div className="register-login">
				Don’t have an account?
				<button className="btn btn-logintoggle text-warning" onClick={toggleUser}>
					Create an account
				</button>
			</div>
		</div>
		</section>
	);
};

export default LoginForm;
