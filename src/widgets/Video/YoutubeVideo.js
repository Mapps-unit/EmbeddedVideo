import React from "react";
import { WidgetWrapper } from "../../components";

const YoutubeVideo = ({ embedId }) => (
  <WidgetWrapper>
    <iframe
      width='640'
      height='360'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </WidgetWrapper>
);

export default YoutubeVideo;
