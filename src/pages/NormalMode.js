import React from 'react';
import { PageWrapper, ToggleButton, Widgets } from '../components';


function NormalMode(props) {
	return (
		<PageWrapper>
			<ToggleButton label='Edit' onClick={props.changeMode}/>
			<Widgets />
		</PageWrapper>
	);
}

export default NormalMode;