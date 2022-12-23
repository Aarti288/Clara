import React from "react";
import "../ButtonComponent/style.css";

function ButtonComponent(props: {
  label: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <div className="button-component">
      <button
        className="form-button"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}

export default ButtonComponent;
