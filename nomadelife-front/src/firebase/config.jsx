import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {  getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwqMxqoAtFzK1yTP5yawszw0sBPp3pTk4",
  authDomain: "nomadelife-jt.firebaseapp.com",
  projectId: "nomadelife-jt",
  storageBucket: "nomadelife-jt.appspot.com",
  messagingSenderId: "773339048441",
  appId: "1:773339048441:web:845ba54083aef335eef528",
  measurementId: "G-0X6PM11NPL"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}
