//@flow
import React from 'react';
import GifItem from './GifItem';
import Col from 'react-bootstrap/Row';

type listProps = {
	gifList: Array<Object>,
	ifGifSelect: () => {},
};

const GifList = (props: listProps) => {
	const gifItems = props.gifList.map((item) => {
		return (
			<GifItem key={item.id} gif={item} ifGifSelected={props.ifGifSelect} />
		);
	});
	return (
		<Col>
			<div className="gifItem">{gifItems}</div>
		</Col>
	);
};

export default GifList;
