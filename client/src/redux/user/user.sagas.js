import { put, all, call, takeLatest } from "redux-saga/effects"
import userActionTypes from "./user.types"
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from "./user.actions"

import {
    auth,
    createUserProfileDocument,
    googleProvider,
    getCurrentUser
} from "../../firebase/firebase.utils"

function* getSnapShotFromUserAuth(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData)
        const snapShot = yield userRef.get()
        yield put(signInSuccess({
            id: snapShot.id,
            ...snapShot.data()
        }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}
//------------------sign in-------------------
function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield alert(error.message)
        yield put(signInFailure(error.message))
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield alert(error.message)
        yield put(signInFailure(error.message))
    }
}

function* onSignInWithEmailStart() {
    yield takeLatest(
        userActionTypes.SIGN_IN_WITH_EMAIL_START,
        signInWithEmail
    )
}
function* onSignInWithGoogleStart() {
    yield takeLatest(
        userActionTypes.SIGN_IN_WITH_GOOGLE_START,
        signInWithGoogle
    )
}
//-----------------sign out--------------------
function* SignOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield alert(error.message)
        yield put(signOutFailure(error))
    }
}

function* onSignOutStart() {
    yield takeLatest(
        userActionTypes.SIGN_OUT_START,
        SignOut
    )
}
//----------------sign up------------------------

function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch (error) {
        yield alert(error.message)
        yield put(signUpFailure(error))
    }
}

function* onSignUpStart() {
    yield takeLatest(
        userActionTypes.SIGN_UP_START,
        signUp
    )
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapShotFromUserAuth(user, additionalData)
}

function* onSignUpSuccess() {
    yield takeLatest(
        userActionTypes.SIGN_UP_SUCCESS,
        signInAfterSignUp
    )
}
//------------ check user session---------------


function* isUserAuthenticated() {
    try {
        const user = yield getCurrentUser()
        if (!user) { return }
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield alert(error.message)
        yield put(signUpFailure(error))
    }
}


function* checkUserSession() {
    yield takeLatest(
        userActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export default function* userSagas() {
    yield all([
        call(onSignInWithEmailStart),
        call(onSignInWithGoogleStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(checkUserSession)
    ])
}