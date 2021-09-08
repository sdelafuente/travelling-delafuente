import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MiComponente from './components/MiComponente';

const App = () => {
    const nameStyle = {
        backgroundColor: "green",
    };

  return (
    <div className="App" style={nameStyle}>
        <NavBar />
        <header className="App-header">
            <MiComponente />
            <ItemListContainer
            title="Bienvendio"
            description="Este va a ser mi E-commerce"
            />
        </header>
    </div>
  );
}

export default App;
