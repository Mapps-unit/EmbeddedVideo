import React, { useState } from "react";
import { NormalMode, EditMode } from ".";
import { PageWrapper } from "../components";

function Main(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <PageWrapper>
      {(isEditMode === false) && <NormalMode changeMode={() => setIsEditMode(true)}/>}
      {(isEditMode === true) && <EditMode changeMode={() => setIsEditMode(false)}/>}
    </PageWrapper>
  );
}

export default Main;
