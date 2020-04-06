import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header.component";
import UserAuthenticationPage from "./pages/UserAuthenticationPage";
import { auth, createUserProfileDocument } from "./components/firebase.utils";
import { connect } from "react-redux";
import {setCurrentUser} from "./redux/user/UserActions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={UserAuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
