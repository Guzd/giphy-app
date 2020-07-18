//@flow
import React from 'react';
import GifItem from './GifItem';
import Col from 'react-bootstrap/Row';

type listProps = {
	gifList: Array<Object>,
	resultsFor: string,
};

const GifList = (props: listProps) => {
	const gifItems = props.gifList.map((item) => {
		return <GifItem key={item.id} gif={item.images.downsized.url} />;
	});
	return (
		<Col>
			<h2>{props.resultsFor}</h2>
			<div className="gifItem">{gifItems}</div>
		</Col>
	);
};

export default GifList;
