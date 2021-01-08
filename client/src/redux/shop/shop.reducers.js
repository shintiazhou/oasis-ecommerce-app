import shopActionTypes from "./shop.types"
const INITIAL_STATE = {
    collections: null,
    isLoading: false,
    error: ""
}
const shopReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isLoading: true
            }
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                collections: action.payload,
                error: ""
            }
        case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
export default shopReducers