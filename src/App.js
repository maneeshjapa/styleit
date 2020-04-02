import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route } from "react-router-dom";
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <div>
    <Route exact path='/' component={ Homepage } />
    <Route exact path='/shop/hats' component={ ShopPage } />
    </div>
  );
}

export default App;
