import * as React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({categoriaId}) => {
    const { id } = useParams();
    const [items, setItems] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] = React.useState(false);

    const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(productos), 2000);
        });
    };

    const getProductosAsyncAwait = async () => {
        return await getProductos();
    };

    const url = categoriaId ? `http://localhost:3001/products?categoriaId=${categoriaId}` : `http://localhost:3001/products`;
    const idUrl = id ? `http://localhost:3001/products?categoriaId=${id}` : url;

    React.useEffect(() => {
      setCargando(true);

      getProductosAsyncAwait()
      .finally(() => setCargando(false));
      console.log(id);

      fetch(idUrl)
      .then((response) => {
          if (response.ok) {
             return response.json()
          } else {
              throw response
          }
      })
      .then((categorias) => setItems(categorias))
      .catch((error) => setError(error));
  }, [categoriaId, id]);

  return (
    <div className="ItemListContainer">
        { cargando && <p style={{ fontSize: "2rem", margin: "2rem 0" }}>Cargando....</p>}
        { error && <p style={{ fontSize: "2rem", margin: "2rem 0" }}>-------------------{error}---------------------</p>}
        { !error && !cargando && items && <ItemList productos={items} /> }
    </div>
  );
};

export default ItemListContainer;

const productos = [
  {
    id: 0,
    title: "Mochila",
    description: "Esta es la descripción del producto 1",
    price: 10000,
    image: "https://cdn1.static-tgdp.com/ui/productimages/approved/std.lang.all/62/64/696264_sized_1800x1200_rev_1.jpg",
  },
  {
    id: 1,
    title: "Zapatillas",
    description: "Esta es la descripción del producto 2",
    price: 10001,
    image: "https://http2.mlstatic.com/D_NQ_NP_673060-MLA41186638161_032020-O.webp",
  },
];
