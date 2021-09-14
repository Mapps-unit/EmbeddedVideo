import React, { useState } from 'react';
import { PageWrapper } from '../components';
import { AddVideo, YoutubeVideo } from '../widgets';

function EditMode(props) {
  const [show, setShow] = useState(false);
  const [youtubeViedoIdList, setYoutubeVideoIdList] = useState([]);

  const YoutubeVideoList = youtubeViedoIdList.map((video) => {
    return <YoutubeVideo embedId={video} />;
  });

  return (
    <PageWrapper>
      <button onClick={() => setShow((show) => !show)}>►</button>
      {show && (<AddVideo setVideoIdList={
        (newVideoId) => {
          setYoutubeVideoIdList((youtubeViedoIdList) => youtubeViedoIdList.concat(newVideoId))
        }} setShow={() => setShow((show) => !show)}/>)}
      {YoutubeVideoList}
    </PageWrapper>
  );
}

export default EditMode;