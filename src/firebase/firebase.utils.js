import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDx6F1UACoWxIDRUjMBJhk0zGfE95ZugJQ',
  authDomain: 'hack-now-28797.firebaseapp.com',
  databaseURL: 'https://hack-now-28797.firebaseio.com',
  projectId: 'hack-now-28797',
  storageBucket: 'hack-now-28797.appspot.com',
  messagingSenderId: '770405318250',
  appId: '1:770405318250:web:6ed151b01248c6ddcd1413',
  measurementId: 'G-117TBYS1YD',
};

const app = firebase.initializeApp(config);

const auth = firebase.auth(app);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export { config, app, auth, googleProvider, db };

export default firebase;
