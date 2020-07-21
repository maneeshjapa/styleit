import React from "react";
import { ReactComponent as Logo } from "../assests/logo.svg";
import { connect } from "react-redux";
import { auth } from "./firebase.utils";
import CartIcon from "./Cart-Icon.component";
import CartDropdown from "./Cart-Dropdown.component";
import { selectCurrentUser } from "../redux/user/UserSelector";
import { selectCartHidden } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";

import {
HeaderContainer,
LogoContainer,
OptionsContainer,
OptionLinkContainer
} from '../styles/Header.styles.jsx'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to="/shop">
        SHOP
      </OptionLinkContainer>
      <OptionLinkContainer to="/shop">
        CONTACT
      </OptionLinkContainer>
      {currentUser ? (
        <OptionLinkContainer as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLinkContainer>
      ) : (
        <OptionLinkContainer to="/signin">
          SIGN IN
        </OptionLinkContainer>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
