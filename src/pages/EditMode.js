import React, { useState } from 'react';
import { PageWrapper, ToolBarWrapper } from '../components';
import { AddVideo, YoutubeVideo, AddImage, Image } from '../widgets';
import Cookies from 'js-cookie';

function EditMode(props) {
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showAddImage, setShowAddImage] = useState(false);
  //const [youtubeViedoIdList] = useState(Cookies.get('widget'));

  // const YoutubeVideoList = youtubeViedoIdList.map(({video}) => {
  //   return <YoutubeVideo embedId={video} />;
  // });

      const video = <YoutubeVideo embedId={Cookies.get('video')} />
      const image = <Image src={Cookies.get('image')} />

  return (
    <PageWrapper>
      <ToolBarWrapper>
        <button onClick={() => setShowAddVideo((show) => !show)}> ► </button>
        <button onClick={() => setShowAddImage((show) => !show)}> 🖼 </button>
      </ToolBarWrapper>
      {showAddVideo && <AddVideo setShow={() => setShowAddVideo((show) => !show)} />}
      {showAddImage && <AddImage setShow={() => setShowAddImage((show) => !show)} />}
      video: {video}
      image: {image}
    </PageWrapper>
  );
}

export default EditMode;