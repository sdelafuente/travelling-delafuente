import * as React from "react";

import './NavBar.css';
import logo from './logo.svg';
import imagen from '../imagenes/shopping-cart-2.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [categorias, setCategorias] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/categorias")
        .then((response) => response.json())
        .then((categorias) => setCategorias(categorias));
    }, []);

    return (
        <div className="header">
            <nav id="navigation">
                <Link to="/">
                    <img src={logo} className="logo-inicio" alt="inicio" />
                </Link>

                <ul>
                    {categorias?.map((categoria) => (
                        <li value={categoria.id} key={categoria.id}>
                            <Link to={`/categoria/${categoria.id}`}>
                                {categoria.nombre}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="https://atom.io/docs" tabIndex="4">FAQ</a>
                    </li>
                    <li>
                        <CartWidget title="imagen" image={imagen} cantidad={0} />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
