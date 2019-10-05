import React from "react";

function Conditional(props) {
	if (props.isLoading === true) {
		return (
			<div>Loading...</div>
		 ) 
	} else {
		return (
			<h1>Some conditional rendering...</h1>	
		)
	}
}

export default Conditional;