import React from "react";
import "../InputLabelComponent/style.css";

function InputLabelComponent(props: {
  label: string;
  type: string;
  value?: string;
  name?: string;
  error?: string;
  onChange: React.ChangeEventHandler;
  onfocus?: React.FocusEventHandler;
}) {
  return (
    <div className="input-label-component">
      <span className="form-input-label">{props.label}</span>

      <div>
        <input
          className="input-field"
          type={props.type}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          onFocus={props.onfocus}
        />
        <p className="form-error">{props.error}</p>
        <div>&nbsp;</div>
      </div>
    </div>
  );
}

export default InputLabelComponent;
