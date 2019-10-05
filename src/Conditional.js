import React from "react";

function Conditional(props) {
	return (
		<div>
			{props.isLoading ? <div>Loading...</div> : <div>Some cool stuff..</div>}
		</div>
	)
}

export default Conditional;