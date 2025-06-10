import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
 apiKey: "***REMOVED***",
  authDomain: "***REMOVED***",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.firebasestorage.app",
  messagingSenderId: "***REMOVED***",
  appId: "1:***REMOVED***:web:09e6d9b10cd5f6e1ad531a"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


export { storage,googleProvider,auth };



