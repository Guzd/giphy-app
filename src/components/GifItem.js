//@flow
import React from 'react';
type itemProps = {
	gif: string,
};

function GiftItem(props: itemProps) {
	return <img className="gif" alt="" src={props.gif} />;
}

export default GiftItem;
