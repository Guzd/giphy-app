//@flow
import React from 'react';
import GifItem from './GifItem';
import Row from 'react-bootstrap/Row';

type listProps = {
	gifList: Array<Object>,
};

const GifList = (props: listProps) => {
	const gifItems = props.gifList.map((item) => {
		return <GifItem key={item.id} gif={item.images.downsized.url} />;
	});
	return <Row>{gifItems}</Row>;
};

export default GifList;
