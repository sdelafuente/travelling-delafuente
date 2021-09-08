import * as React from "react"; 

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState({alto: undefined, ancho: undefined});
    
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
    
    return windowSize;
};

export default useWindowSize;
