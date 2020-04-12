import React from "react";
import MenuItem from "./Menu-Item.component";
import "../styles/Menu-Directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../redux/directory/DirectorySelector";

const MenuDirectory = ({ sections }) => (
  <div className="menu-directory">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(MenuDirectory);
