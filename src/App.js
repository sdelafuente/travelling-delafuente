import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

const App = () => {
    const nameStyle = {
        backgroundColor: "green",
    };
    
  return (
    <div className="App" style={nameStyle}>
        <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
