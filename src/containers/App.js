//@flow
import React from 'react';
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
					<Row>
						<Col xs={{ span: 6, offset: 3 }}>
							<h1>GIPHY</h1>
						</Col>
					</Row>
					<Row className="mb-4">
						<Col xs={12} md={{ span: 10, offset: 1 }}>
							<SearchBar onSearchInputChange={this.props.actions.fetchGifs} />
						</Col>
					</Row>
					<Row>
						<p>Trendy |</p>
						<p>| Random</p>
					</Row>
					<Row>
						<GifList gifList={this.props.gifs} />
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
