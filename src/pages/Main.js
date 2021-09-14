import React from 'react';
import { EditMode } from '.';
import Cookies from 'js-cookie';

function Main(props) {
	Cookies.remove('video');

	return (
		<div>
			<EditMode />
		</div>
	);
}

export default Main;