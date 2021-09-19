import React from 'react';

function ToggleButton(props) {
	function changeMode(){
		window.location.assign(props.goto);
	}

	return (
		<button onClick={changeMode}>{props.label}</button>
	);
}

export default ToggleButton;