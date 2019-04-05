import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCv1Cdf0KlGowRFhmNlWRqryVL0hRtA8As",
  authDomain: "harshal-playground.firebaseapp.com",
  databaseURL: "https://harshal-playground.firebaseio.com",
  projectId: "harshal-playground",
  storageBucket: "harshal-playground.appspot.com",
  messagingSenderId: "361572841529"
}

firebase.initializeApp(config)
 
export default firebase
