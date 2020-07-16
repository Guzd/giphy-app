//@flow
import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar.js';
import SearchBar from '../components/Search.js';
import List from '../components/gif-list.js';
import '../styles/App.css';

type testProps = {
	name: string,
	gifs: Array<Object>,
};
class App extends React.Component<testProps> {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Container fluid>
					<h1>Hello {this.props.name}</h1>
					<SearchBar />
					<List gifList={this.props.gifs} />
				</Container>
			</React.Fragment>
		);
	}
}
function mapStateToProps(state) {
	return {
		gifs: state.gifs,
	};
}

export default connect(mapStateToProps)(App);
