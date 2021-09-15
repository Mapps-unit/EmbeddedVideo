import React from 'react';
import { PageWrapper, ToggleButton, Widgets } from '../components';


function NormalMode(props) {
	return (
		<PageWrapper>
			<ToggleButton label="Edit" goto="/edit"/>
			<Widgets />
		</PageWrapper>
	);
}

export default NormalMode;