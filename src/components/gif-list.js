//@flow
import React from 'react';
import Item from './gif-Item';
import Row from 'react-bootstrap/Row';

type listProps = {
	gifList: Array<Object>,
};

const List = (props: listProps) => {
	const gifItems = props.gifList.map((item) => {
		return <Item key={item.id} gif={item.url} />;
	});
	return <Row>{gifItems}</Row>;
};

export default List;
