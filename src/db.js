import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA5_es11KzEvzMEgZNJoRm6P29Utu927DY',
  authDomain: 'shoppinglist-b34be.firebaseapp.com',
  projectId: 'shoppinglist-b34be',
  storageBucket: 'shoppinglist-b34be.appspot.com',
  messagingSenderId: '40659190092',
  appId: '1:40659190092:web:65d46f065cece058aa0fe9',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
