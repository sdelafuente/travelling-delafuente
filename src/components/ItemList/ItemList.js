import * as React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemListContainer = ({productos}) => {
  return (
    <div  style={{ display: "flex", justifyContent: "space-evenly" }}>
    {
        productos?.map(producto => {
            return (
                <Item
                key={producto.id}
                productoId={producto.id}
                title={producto.title}
                description={producto.description}
                image={producto.image}
                price={producto.price}
                // comprar={comprarProducto}
                />
            );
        })
    }
    </div>
  );
};

export default ItemListContainer;
