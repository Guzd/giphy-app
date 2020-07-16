//@flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar.js';
import SearchBar from '../components/Search.js';
import GifList from '../components/GifList.js';
import '../styles/App.css';

type testProps = {
	gifs: Array<Object>,
	actions: Object,
};
class App extends React.Component<testProps> {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Container fluid>
					<h1>Hello</h1>
					<SearchBar onSearchInputChange={this.props.actions.fetchGifs} />
					<GifList gifList={this.props.gifs} />
				</Container>
			</React.Fragment>
		);
	}
}
function mapStateToProps(state) {
	return {
		gifs: state.gifs.data,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
