import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <div className="App">
        <NavBar />
      <header className="App-header">
        <ItemListContainer
        title="Bienvendio"
        description="Este va a ser mi E-commerce"
        />
      </header>
    </div>
  );
}

export default App;
