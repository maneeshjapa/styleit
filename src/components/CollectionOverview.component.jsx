import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./CollectionPreview.component";
import { selectCollectionsForOverview } from "../redux/shop/ShopSelector";
import { CollectionOverviewContainer } from "../styles/CollectionOverview.styles";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
