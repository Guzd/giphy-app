import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchBar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Form>
					<Row>
						<Col xs={8}>
							<FormControl type="text" placeholder="Search" />
						</Col>
						<Col xs={true}>
							<Button variant="outline-primary">Search</Button>
						</Col>
					</Row>
				</Form>
			</React.Fragment>
		);
	}
}

export default SearchBar;
