//@flow
import React from 'react';
import Col from 'react-bootstrap/Col';
type itemProps = {
	gif: string,
};

function GiftItem(props: itemProps) {
	return (
		<Col xs={12}>
			<img src={props.gif} alt="" />
		</Col>
	);
}

export default GiftItem;
