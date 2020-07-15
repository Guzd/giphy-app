import React from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const List = () => {
	const lista = [
		{
			id: 1,
			url: 'http://fakeimg.pl/300/',
		},
		{
			id: 2,
			url: 'http://fakeimg.pl/300/',
		},
		{
			id: 3,
			url: 'http://fakeimg.pl/300/',
		},
	];
	const gifItems = lista.map((item) => {
		return <Item key={item.id} gif={item.url} />;
	});

	return (
		<Container>
			<Row className="justify-content-md-center">{gifItems}</Row>
		</Container>
	);
};

export default List;
