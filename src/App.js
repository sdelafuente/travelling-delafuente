import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";

const App = () => {

  return (
    // <div className="App">
    //     <NavBar />
    //   <header className="App-header">
    //   </header>
    // </div>
    <CartProvider>
        <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/categoria/:id" component={Home} />
                <Route exact path="/item/:id" component={ItemDetailContainer } />
                <Route exact path="/cart" component={Cart } />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
