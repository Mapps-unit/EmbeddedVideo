import React, { useState } from "react";
import { EmbeddedVideo } from "../widgets";
import { PageWrapper } from "../components"

function Main(props) {
  const [ state, setState ] = useState("hidden");
  const [ url, setUrl ] = useState("");
  const [ videoIdList, setVideoIdList ] = useState([]);
  

  const handleChange = ({ target: { value }}) => {
	  	setUrl(value);
	};

  const handleSubmit = (event) => {
	  event.preventDefault();
	  let videoId = url.split('v=')[1];
	  let position = videoId.indexOf('&');
	  if(position !== -1) {
		videoId = videoId.substring(0, position);
	  }
		setVideoIdList(videoIdList => videoIdList.concat(videoId));
	  setUrl("");
  }
  const EmbeddedVideoList = videoIdList.map((video, idx) => {
	return (
		<EmbeddedVideo embedId={video} />
	);
  });

  return (
    <PageWrapper>

      <h3>Click button to add video widget</h3>
      <button onClick={() =>
		  setState("visible")
		  }>+ video </button>
		<p>state:{state}</p>
      {state === "visible" ? (
		  <form onSubmit={handleSubmit}>
			  <input
			  	type="url"
			  	name="url"
				value={url}
				onChange={handleChange}
				/>
			  <button type="submit">임베드하기</button>
		  </form>
	  	)
	   : null}
	   <p>
	   videoList:

	   </p>
	   {videoIdList}
      	{EmbeddedVideoList}
  </PageWrapper>
  );
}

export default Main;
