import { createSelector } from "reselect"

export const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectShopError = createSelector(
    [selectShop],
    shop => shop.error
)
export const selectShopisLoading = createSelector(
    [selectShop],
    shop => shop.isLoading
)
export const selectShopCollectionsMap = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectShopCollection = collectionUrl => createSelector(
    [selectShopCollections],
    collection => collection ? collection[collectionUrl] : null
)
export const selectShopIsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)