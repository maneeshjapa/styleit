import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header.component";
import UserAuthenticationPage from './pages/UserAuthenticationPage';
import { auth } from './components/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => 
      {this.setState({ currentUser: user })
      });
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

  render(){
  return (
    <div>
      <Header currentUser = { this.state.currentUser }/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={UserAuthenticationPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
