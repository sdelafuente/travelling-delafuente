import * as React from "react";
import useWindowSize from '../hooks/useWindowSize'

// Componente de clase repaso 7/9
const MiComponente = () => {
    const [status, setStatus] = React.useState(false);

    const handleClick = () => {
        setStatus((estadoAnterior) => !estadoAnterior);
    };

    const [windowSize, setWindowSize] = React.useState({alto: undefined, ancho: undefined});
    const newWindowSize = useWindowSize();
    // // Primero recibe una funcion y depsues un array
    // React.useEffect(() => {
    //     // Al monetarse el componente
    //     console.log('Se rendeirza');
    //     return () => {
    //         // al desmontarse el componente
    //     };
    // },[status]);

    // // Primero recibe una funcion y depsues un array
    React.useEffect(() => {
        // Al monetarse el componente
        function handleResize () {
            setWindowSize({alto:window.innerHeight, ancho: window.innerWidth })
        }

        // handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            // al desmontarse el componente
            console.log('Se desmonta');
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return(
        <div>
            <p>Hola, el estado del servicio es: {status ? 'Online' : 'Offline' } </p>
            <button onClick={handleClick}>Cambiar Estado</button>
            <p>Alto: {windowSize.alto} </p>
            <p>Ancho:  {windowSize.ancho} </p>
            {
                newWindowSize.alto > 500 ? <ComponenteUno /> : <ComponenteDos />
            }
        </div>
    );
};

// Para los componentes de clase es el useEffect porque no tiene un ciclo de vida
// para poder usar las funciones componentDidMount(), etc
//

export default MiComponente;

const ComponenteUno = () => {
    return <div>Uno</div>
};

const ComponenteDos = () => {
    return <div>Dos</div>
};
