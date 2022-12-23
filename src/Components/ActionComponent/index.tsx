import React from "react";
import "../ActionComponent/style.css";

function ActionComponent(props: {
  label?: string;
  sidelabel?: string;
  style?: React.CSSProperties;
  Action?: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <div className="action-component">
      <span className="page-heading">{props.label}</span>

      <div style={props.style} className="side-label">
        {props.sidelabel}
        &nbsp;
        <span className="page-action" onClick={props.onClick}>
          {props.Action}
        </span>
      </div>
    </div>
  );
}

export default ActionComponent;
