import React from "react";
import { css } from "@emotion/css";

const ToolBarWrapper = ({ children }) => {
  return (
    <div
      className={css`
				display: flex;
				background-color: #F5F5F5;
				flex-direction: row;
				padding: 5px 100px;
				justify-content: center;
				align-items: center;
				border-radius: 3px;
				border: 1px grey solid;
				margin: 20px;
			`}>
      {children}
    </div>
  );
};

export default ToolBarWrapper;
