//@flow
import React from 'react';
type itemProps = {
	gif: string,
	ifGifSelected: () => {},
};

function GiftItem(props: itemProps) {
	return (
		<div onClick={() => props.ifGifSelected(props.gif)}>
			<img className="gif" alt="" src={props.gif.images.downsized.url} />
		</div>
	);
}

export default GiftItem;
