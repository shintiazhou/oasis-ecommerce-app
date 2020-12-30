import { combineReducers } from "redux"
import directoryReducers from "./directory/directory.reducers"
import shopReducers from "./shop/shop.reducers"
import cartReducers from "./cart/cart.reducers"

const rootReducer = combineReducers({
    directory: directoryReducers,
    shop: shopReducers,
    cart: cartReducers
})

export default rootReducer