import React, { useState } from "react";

function AddVideo(props) {
  const [url, setUrl] = useState("");

  const handleChange = ({ target: { value } }) => {
    setUrl(value);
  };

  const handleSubmit = (event) => {
    try {
      let urlObj = new URL(url);
      props.setVideoIdList(urlObj.searchParams.get("v"));
      props.setShow(false);
    } catch (e) {
      alert("url이 이상해요~");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    // form wrapper
    <>
      <input
        type='url'
        name='url'
        value={url}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>위젯으로 만들기</button>
    </>
  );
}

export default AddVideo;
