import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyB78bclLHY3CowEPhHrrorTbayekbYJgCs",
  authDomain: "react-test-tutor.firebaseapp.com",
  projectId: "react-test-tutor",
  storageBucket: "react-test-tutor.appspot.com",
  messagingSenderId: "189659734779",
  appId: "1:189659734779:web:3e6a28720f119a61a4065e"
};


// {
//   apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
//   authDomain: 'crwn-db.firebaseapp.com',
//   databaseURL: 'https://crwn-db.firebaseio.com',
//   projectId: 'crwn-db',
//   storageBucket: 'crwn-db.appspot.com',
//   messagingSenderId: '850995411664',
//   appId: '1:850995411664:web:7ddc01d597846f65'
// };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.collection('users').doc(userAuth.uid);

  userRef.get().then( doc => {
    if (!doc.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      firestore.collection('users').doc(userAuth.uid).set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }).then( () => {
        console.log("user creation succesfull.");
      }).catch(error => {
        console.log("creation not succesfull. error: ", error);
      })
    } else {
      console.log("Already exists")
    }
  })

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
