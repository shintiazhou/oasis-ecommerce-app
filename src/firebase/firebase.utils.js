import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCo41yKI-luiq0dXNpkxMJMd_ZnsRb79cs",
    authDomain: "oasis-clothing.firebaseapp.com",
    projectId: "oasis-clothing",
    storageBucket: "oasis-clothing.appspot.com",
    messagingSenderId: "162780091565",
    appId: "1:162780091565:web:770f71fc2ad8c8e26f6224"
}
firebase.initializeApp(config)

export const addCollectionAndDocument = async (collectionName, objectToAdd) => {
    const collectionRef = firestore.collection(collectionName);
    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs
        .map(doc => {
            const { title, items } = doc.data()
            return {
                id: doc.id,
                routeName: encodeURI(title.toLowerCase()),
                title,
                items,
            }
        })
    return transformedCollection
        .reduce((acc, currentValue) => {
            acc[currentValue.title.toLowerCase()] = currentValue
            return acc
        }, {});
}
export const createUserProfileDocument = async (user, aditionalData) => {
    if (!user) return

    const userRef = firestore.doc(`users/${user.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = user
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            })
        } catch (error) {
            console.log(error.message)
            alert("error creating user profile document", error.message)
        }
    }
    return userRef
}

export const auth = firebase.auth()

export const googleProvider = new firebase.auth.GoogleAuthProvider()

googleProvider.setCustomParameters({ prompt: "select_account" })
export const firestore = firebase.firestore();

export default firebase;