import { takeLatest, put, call, all } from "redux-saga/effects"
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import shopActionTypes from "./shop.types"

function* onFetchCollections() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        onFetchCollections
    )
}

export default function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}