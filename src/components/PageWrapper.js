import React from 'react';

const PageWrapper = ({children}) => {
	return (
		<div
			style={{
				display: 'flex',
				backgroundColor: 'rightgrey',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				paddingTop: '50px'
			}}>
			{children}
		</div>
	);
}

export default PageWrapper;