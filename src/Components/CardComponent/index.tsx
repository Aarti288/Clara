import React from "react";
import "../CardComponent/style.css";

function CardComponent(props: { children: React.ReactNode }) {
  return <div className="card-component">{props.children}</div>;
}

export default CardComponent;
