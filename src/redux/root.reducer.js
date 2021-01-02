import { combineReducers } from "redux"
import directoryReducers from "./directory/directory.reducers"
import shopReducers from "./shop/shop.reducers"
import cartReducers from "./cart/cart.reducers"
import userReducers from "./user/user.reducers"
const rootReducer = combineReducers({
    directory: directoryReducers,
    shop: shopReducers,
    cart: cartReducers,
    user: userReducers
})

export default rootReducer