//@flow
import React from 'react';

type resultsForType = {
	term: String,
};
const ResultsFor = (props: resultsForType) => {
	if (props.term === '') {
		return <p className="lead font-weight-bold resultsfor">Trendy</p>;
	}
	return (
		<p className="lead  resultsfor">
			Results for:
			<span className="font-weight-bold"> {props.term} </span>
		</p>
	);
};

export default ResultsFor;
