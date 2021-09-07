import React from 'react';
			// src={`https://www.youtube.com/embed/${embedId}`}
	const EmbeddedVideo = ({ embedId }) => (
		<div>
			<p>Embedded video</p>
			<p>props: {embedId}</p>
		  <iframe
			width="640"
			height="360"
			src="https://www.youtube.com/embed/r6AKOIZOC1I"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		  />
		</div>
	  );
	  

export default EmbeddedVideo;