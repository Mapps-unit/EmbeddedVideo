import React, { useState } from "react";
import { EmbeddedVideo } from "../widgets";
import { PageWrapper } from "../components";
import { css, cx } from "@emotion/css";

function Main(props) {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const [videoIdList, setVideoIdList] = useState([]);

  const handleChange = ({ target: { value } }) => {
    setUrl(value);
  };

  const handleSubmit = (event) => {
    try {
      let urlObj = new URL(url);
      setVideoIdList((videoIdList) =>
        videoIdList.concat(urlObj.searchParams.get("v"))
      );
      setUrl("");
    } catch (e) {
      alert("이상한 url!!!");
    }
  };
  const EmbeddedVideoList = videoIdList.map((video, idx) => {
    return <EmbeddedVideo embedId={video} />;
  });

  const handleKeyDown = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const color = "white";

  return (
    <PageWrapper>
      <h3>Click button to add video widget</h3>
      <button onClick={() => setShow((show) => !show)}>+ video </button>
      <p>state:{show}</p>
      {show && (
        <div
          className={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${color};
            }
          `}
        >
          <input
            type="url"
            name="url"
            value={url}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSubmit}>임베드하기</button>
        </div>
      )}
      <p>videoList:</p>
      {videoIdList}
      {EmbeddedVideoList}
    </PageWrapper>
  );
}

export default Main;
