import './NavBar.css';
import logo from './logo.svg';

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
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;