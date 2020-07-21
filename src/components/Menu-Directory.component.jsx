import React from "react";
import MenuItem from "./Menu-Item.component";
import { MenuDirectoryContainer } from "../styles/Menu-Directory.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../redux/directory/DirectorySelector";

const MenuDirectory = ({ sections }) => (
  <MenuDirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </MenuDirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(MenuDirectory);
