import './NavBar.css';
import logo from './logo.svg';
import imagen from '../imagenes/shopping-cart-2.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="header">
            <nav id="navigation">
                <img src={logo} className="logo-inicio" alt="inicio" />
                <ul>
                    <li>
                        <a href="#" target="_self" tabindex="1">Inicio</a>
                    </li>
                    <li>
                        <a href="#" tabindex="2">Productos</a>
                    </li>
                    <li>
                        <a href="#" tabindex="3">Nosotros</a>
                    </li>
                    <li>
                        <a href="#" tabindex="4">Contacto</a>
                    </li>
                    <li>
                        <a href="#" tabindex="4">Formulario</a>
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