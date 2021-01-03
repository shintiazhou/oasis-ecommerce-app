import { combineReducers } from "redux"
import directoryReducers from "./directory/directory.reducers"
import shopReducers from "./shop/shop.reducers"
import cartReducers from "./cart/cart.reducers"
import userReducers from "./user/user.reducers"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers({
    directory: directoryReducers,
    shop: shopReducers,
    cart: cartReducers,
    user: userReducers
})

export default persistReducer(persistConfig, rootReducer)