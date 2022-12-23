import React from "react";
import "../DashboardBtnComponent/style.css";

function DashboardBtnComponent(props: {
  label?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="button-component">
      <button
        className={
          props.label === "Edit Profile" ? "edit-button" : "dashboard-button"
        }
      >
        {props.label}
      </button>
    </div>
  );
}

export default DashboardBtnComponent;
