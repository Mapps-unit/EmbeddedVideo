import React from "react";
import {
  PageWrapper,
  EditWrapper,
  ToolBar,
  ToggleButton,
  Widgets,
} from "../components";

function EditMode(props) {
 

  return (
    <PageWrapper>
      <EditWrapper>
        <ToolBar />
        <ToggleButton label='Save' goto='/' />
        
        <Widgets />
      </EditWrapper>
    </PageWrapper>
  );
}

export default EditMode;
