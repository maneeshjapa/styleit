import React from "react";
import { CustomButtonContainer } from "../styles/CustomButton.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
