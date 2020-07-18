//@flow
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar.js';
import SearchBar from '../components/Search.js';
import GifList from '../components/GifList.js';

import '../styles/App.css';
type testProps = {
	gifs: Array<Object>,
	actions: Object,
};

class App extends React.Component<testProps> {
	componentDidMount() {
		this.props.actions.fetchGifs('');
	}

	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Container>
					<Row className="justify-content-center">
						<Col xs="auto">
							<p className="display-4 font-weight-bold">GIPHY</p>
						</Col>
					</Row>
					<Row className="justify-content-center mb-3">
						<Col xs={12} md={8}>
							<SearchBar onSearchInputChange={this.props.actions.fetchGifs} />
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col xs={12}>
							<GifList gifList={this.props.gifs} resultsFor="Trendy gifs" />
						</Col>
					</Row>
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
