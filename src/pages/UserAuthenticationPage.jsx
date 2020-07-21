import React from "react";
import {UserAuthenticationContainer} from "../styles/UserAuthenticationPage.styles.jsx";
import SignIn from "../components/SignIn.component";
import SignUp from "../components/Sign-Up.component";

const UserAuthenticationPage = () => (
  <UserAuthenticationContainer>
    <SignIn />
    <SignUp />
  </UserAuthenticationContainer>
);

export default UserAuthenticationPage;
