//@flow
import React from 'react';

type itemProps = {
	gif: string,
};

function Item(props: itemProps) {
	return <img src={props.gif} alt="" />;
}

export default Item;
