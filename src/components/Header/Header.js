import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
	const history = useHistory();
	const handleLoginRoute = () => {
		history.push("/login");
	};
	return (
		<div className="navbar">
			<Navbar expand="md" bg="dark" variant="dark" style={{ width: '90%', margin: 'auto' }}>
				<Navbar.Brand href="#home"><img src={logo} style={{ maxWidth: "120px", backgroundColor: 'white' }} alt="logo dark" /></Navbar.Brand>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button className="btn btn-warning " variant="outline-primary">Search</Button>
				</Form>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto nav-link">
						<Link className="mr-4 " to="/">Home</Link>
						<Link className="mr-4" to="/destination">Destination</Link>
						<Link className="mr-4" to="/">Blog</Link>
						<Button className="mr-4" className="btn btn-warning" onClick={handleLoginRoute}>Login</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
