import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA4sboafo3XIWbDxhYPmPn6JRrNvou7uo4",
    authDomain: "live-chat-3994e.firebaseapp.com",
    projectId: "live-chat-3994e",
    storageBucket: "live-chat-3994e.appspot.com",
    messagingSenderId: "638345475543",
    appId: "1:638345475543:web:02384177b6169328de8792"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
