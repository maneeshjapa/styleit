import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./CollectionPreview.component";
import { selectCollectionsForOverview } from "../redux/shop/ShopSelector";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview
});

export default connect(mapStateToProps)(CollectionOverview);
