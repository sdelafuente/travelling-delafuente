import * as React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
  return (
    <div className="item">
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.description}</p>
      <ItemCount stock={5} inicial={1} />
    </div>
  );
};

export default ItemListContainer;
