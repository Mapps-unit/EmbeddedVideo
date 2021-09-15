import React, { useState } from "react";
import { NormalMode } from ".";
import { PageWrapper } from "../components";
import { ToggleButton } from "../components";

function Main(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <PageWrapper>
      <NormalMode />
      <ToggleButton editMode={isEditMode} changeMode={() => setIsEditMode} />
    </PageWrapper>
  );
}

export default Main;
