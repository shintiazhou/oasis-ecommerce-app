import userActionTypes from "./user.types"

//-------------------sign in---------------------
export const signInWithEmailStart = (emailAndPassword) => ({
    type: userActionTypes.SIGN_IN_WITH_EMAIL_START,
    payload: emailAndPassword
})

export const signInWithGoogleStart = () => ({
    type: userActionTypes.SIGN_IN_WITH_GOOGLE_START
})

export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})

//-------------------sign up---------------------
export const signUpStart = (userCredential) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredential
})

export const signUpSuccess = (data) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: data
})

export const signUpFailure = (error) => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})

//-------------------sign out---------------------
export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION,
})