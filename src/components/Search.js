//@flow
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

type searchProps = {
	onSearchInputChange: (input: string) => {},
};

class SearchBar extends React.Component<searchProps> {
	handleChange(input: string) {
		this.props.onSearchInputChange(input);
	}
	render() {
		return (
			<React.Fragment>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Search gif"
						aria-label="Search gif"
						aria-describedby="basic-addon2"
						onChange={(event) => this.handleChange(event.target.value)}
					/>
					<InputGroup.Append>
						<Button variant="outline-secondary">Button</Button>
					</InputGroup.Append>
				</InputGroup>
			</React.Fragment>
		);
	}
}

export default SearchBar;
