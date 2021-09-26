import * as React from "react";
import "./Categorias.css";

const Categorias = ({setSelectedCategory}) => {
    const [categorias, setCategorias] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/categorias")
        .then((response) => response.json())
        .then((categorias) => setCategorias(categorias));
    }, []);

    const manejarEvento = (e) => {
        setSelectedCategory(e.target.value);
    };

  return (
    <div className="Categorias">
        <select className="categorias" name="categorias" defaultValue="" onChange={manejarEvento}>
            <option value="" disabled>Seleccione una categoria</option>
            <option value="" >Todas</option>
            {categorias?.map((categoria) => (
                <option value={categoria.id} key={categoria.id}>{categoria.nombre}</option>
            ))}
        </select>
    </div>
  );
};

export default Categorias;
