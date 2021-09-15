import React, { useState } from 'react';
import { PageWrapper, ToolBarWrapper, ToggleButton, Widgets } from '../components';
import { AddVideo, AddImage } from '../widgets';

function EditMode(props) {
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showAddImage, setShowAddImage] = useState(false);
  //const [youtubeViedoIdList] = useState(Cookies.get('widget'));

  // const YoutubeVideoList = youtubeViedoIdList.map(({video}) => {
  //   return <YoutubeVideo embedId={video} />;
  // });

     

  return (
    <PageWrapper>
      <ToolBarWrapper>
        <button onClick={() => setShowAddVideo((show) => !show)}> ► </button>
        <button onClick={() => setShowAddImage((show) => !show)}> 🖼 </button>
      </ToolBarWrapper>
			<ToggleButton label="Save" goto="/"/>
      {showAddVideo && <AddVideo setShow={() => setShowAddVideo((show) => !show)} />}
      {showAddImage && <AddImage setShow={() => setShowAddImage((show) => !show)} />}
      <Widgets />
    </PageWrapper>
  );
}

export default EditMode;