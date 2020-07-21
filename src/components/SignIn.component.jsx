import React from "react";
import {ButtonsContainer,SignInContainer} from "../styles/SignIn.styles";
import FormInput from "./FormInput.component";
import CustomButton from "./CustomButton.component";
import { auth, SignInWithGoogle } from "./firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(console.error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Signin with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            label="Email"
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            onChange={this.handleChange}
            label="Passsword"
            value={this.state.password}
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
