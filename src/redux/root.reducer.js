import { combineReducers } from "redux"
import directoryReducers from "./directory/directory.reducers"
const rootReducer = combineReducers({
    directory: directoryReducers
})

export default rootReducer