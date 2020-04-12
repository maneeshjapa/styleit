import { createSelector } from "reselect";

const selectShopData = (state) => state.SHOP_DATA;

export const selectCollections = createSelector(
  [selectShopData],
  (SHOP_DATA) => SHOP_DATA.collections
);
