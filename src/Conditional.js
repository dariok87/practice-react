import React from "react";

function Conditional(props) {
	return (
		<div>
			{props.isLoading === true ? <div>Loading...</div> : <div>Some cool stuff..</div>}
		</div>
	)
}

export default Conditional;