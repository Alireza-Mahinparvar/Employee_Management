import firebase from 'firebase/App'
import "firebase/auth"

const app=firebase.initializeApp({
    apiKey: Process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: Process.env.REACT_APP_AUTH-DOMAIN,
    projectId: Process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: Process.env.REACT_APP_FIREBASE_STORAGE-BUCKET,
    messagingSenderId: Process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: Process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth=app.auth()
export default app