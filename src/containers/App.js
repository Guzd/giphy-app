//@flow
import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar.js';
import SearchBar from '../components/Search.js';
import List from '../components/List.js';
import '../styles/App.css';

type testProps = {
	name: string,
};
class App extends React.Component<testProps> {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Container>
					<h1>Hello {this.props.name}</h1>
					<SearchBar />
					<List />
				</Container>
			</React.Fragment>
		);
	}
}
export default App;
