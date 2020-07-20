//@flow
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Props = {
	onSearchInputChange: (input: String) => any,
};

type State = {
	query: String,
};

class SearchBar extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = { query: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(input: String) {
		this.setState({ query: input });
	}
	handleSubmit(e: any) {
		e.preventDefault();
		this.props.onSearchInputChange(this.state.query);
	}
	render() {
		return (
			<React.Fragment>
				<Form onSubmit={this.handleSubmit}>
					<InputGroup>
						<FormControl
							placeholder="Search gif"
							aria-label="Search gif"
							aria-describedby="basic-addon2"
							onChange={(event) => this.handleChange(event.target.value)}
						/>
						<InputGroup.Append>
							<Button variant="outline-secondary" type="submit">
								Search
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
			</React.Fragment>
		);
	}
}

export default SearchBar;
