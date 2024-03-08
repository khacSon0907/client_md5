import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnbhDaCI29XKGalUct6ZmroFZ6WobNtDE",
  authDomain: "singin-with-ad421.firebaseapp.com",
  projectId: "singin-with-ad421",
  storageBucket: "singin-with-ad421.appspot.com",
  messagingSenderId: "514532889067",
  appId: "1:514532889067:web:32a86678cd8a9ad961c9ae",
  measurementId: "G-7FKGMCLWWB"
};
  const app = initializeApp(firebaseConfig)
  const hanldeLoginGoole = async ()=>{
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
    return await signInWithPopup(auth,provider)
  }

export default {
    hanldeLoginGoole
}