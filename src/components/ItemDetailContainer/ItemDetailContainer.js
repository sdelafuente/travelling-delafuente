import * as React from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = (props) => {
    const [item, setItem] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);
    const { id } = useParams();

    React.useEffect(() => {
        setCargando(true);

        fetch(`http://localhost:3001/products/${id}`)
          .then((response) => response.json())
          .then((data) => setItem(data))
          .catch((error) => console.log("Corran.", error))
          .finally(() => setCargando(false));

      }, [id]);

  return (
    <div className="ItemDetailContainer">
    { cargando && <p style={{ fontSize: "2rem", margin: "2rem 0" }}>Cargando....</p>}
    { !cargando && item && <ItemDetail item={item} /> }
    </div>
  );
};

export default ItemDetailContainer;
