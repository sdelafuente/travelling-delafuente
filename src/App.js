import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <div className="App">
        <NavBar />
      <header className="App-header">
        {
            // <ItemListContainer  />
        }
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
