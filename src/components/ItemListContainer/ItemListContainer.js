import * as React from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="item">
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default ItemListContainer;