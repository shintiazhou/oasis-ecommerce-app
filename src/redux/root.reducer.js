import { combineReducers } from "redux"
import directoryReducers from "./directory/directory.reducers"
import shopReducers from "./shop/shop.reducers"
const rootReducer = combineReducers({
    directory: directoryReducers,
    shop: shopReducers
})

export default rootReducer