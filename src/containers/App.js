//@flow
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar.js';
import SearchBar from '../components/Search.js';
import GifList from '../components/GifList.js';
import BoxModal from '../components/modal.js';
import Footer from '../components/Footer.js';
import ResultsFor from '../components/ResultsFor.js';

import '../styles/App.css';
type testProps = {
	gifs: Array<Object>,
	actions: Object,
	modalStatus: Boolean,
	gifSelected: String,
	term: String,
};

class App extends React.Component<testProps> {
	componentDidMount() {
		this.props.actions.fetchGifs('');
	}

	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Jumbotron>
					<Container>
						<Row className="justify-content-center">
							<Col xs="auto">
								<p className="display-4 text-light font-weight-bold">GIPHY</p>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col xs={12} md={8}>
								<SearchBar onSearchInputChange={this.props.actions.fetchGifs} />
							</Col>
						</Row>
					</Container>
				</Jumbotron>
				<Container>
					<Row>
						<ResultsFor term={this.props.term} />
					</Row>
					<Row>
						<Col xs={12}>
							<GifList
								gifList={this.props.gifs}
								ifGifSelect={(gifSelected) =>
									this.props.actions.openModal({ gifSelected })
								}
							/>
							<BoxModal
								modalStatus={this.props.modalStatus}
								gifSelected={this.props.gifSelected}
								handleClose={() => this.props.actions.closeModal()}
							/>
						</Col>
					</Row>
				</Container>
				<Footer />
			</React.Fragment>
		);
	}
}
function mapStateToProps(state) {
	return {
		gifs: state.gifs.data,
		term: state.gifs.term,
		modalStatus: state.modal.modalStatus,
		gifSelected: state.modal.gifSelected,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
