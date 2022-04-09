// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPtHUgPbNRoxjzNBkb07HwU-oCNvc6NZ4',
  authDomain: 'insta-2-clone-6e788.firebaseapp.com',
  projectId: 'insta-2-clone-6e788',
  storageBucket: 'insta-2-clone-6e788.appspot.com',
  messagingSenderId: '421315365450',
  appId: '1:421315365450:web:9e660dc1627602ad3774b3',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
