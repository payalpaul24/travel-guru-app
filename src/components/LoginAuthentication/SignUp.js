import React from "react";
import { Button, Form } from "react-bootstrap";

const SignUp = (props) => {
	const { toggleUser, submit } = props;

	return (
		<div className="m-auto" style={{ border: '1px solid', padding: '20px', width: '60%' }}>
			<h3>Create an account</h3>

			<Form onSubmit={submit}>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Your Name"
					/>
				</div>
				<div className="form-group">
					<input type="email" className="form-control" placeholder="Email" name="email" />

				</div>
				<div className="form-group">
					<input type="password" className="form-control" placeholder="Password"
					/>
				</div>
				<div className="form-group">
					<input type="password" className="form-control" placeholder="Confirm Password"
					/>
				</div>

				<Button type="submit" className="btn btn-warning tg-primary btn-block">
					Create an account
				</Button>
			</Form>

			<div>
				Already have an account?
				<Button className="btn btn-logintoggle text-warning" onClick={toggleUser}>
					Login
				</Button>
			</div>
		</div>
	);
};

export default SignUp;
