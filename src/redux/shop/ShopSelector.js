import { createSelector } from "reselect";

const selectShopData = (state) => state.SHOP_DATA;

export const selectCollections = createSelector(
  [selectShopData],
  (SHOP_DATA) => SHOP_DATA.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
