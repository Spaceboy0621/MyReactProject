import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATPkHM0DCC2t7TbnPtkobTs-Zor7bgkGs",
    authDomain: "spaceboy-project.firebaseapp.com",
    projectId: "spaceboy-project",
    storageBucket: "spaceboy-project.appspot.com",
    messagingSenderId: "1031566095365",
    appId: "1:1031566095365:web:72cf11da1c4a2dd1a5d86c",
    measurementId: "G-2DJ0XXDF2B"
}

firebase.initializeApp(firebaseConfig)
export default firebase