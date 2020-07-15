import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component<{}> {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark" expand="lg">
					<Navbar.Brand>The Heru-Gifs App</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#">Home</Nav.Link>
							<Nav.Link href="#">Diana's top gifs</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;
