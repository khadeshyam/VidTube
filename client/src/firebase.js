import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvZCxh8ndETaIUukIvmPpO_Vdu7eiJvlQ",
  authDomain: "video-7c7a3.firebaseapp.com",
  projectId: "video-7c7a3",
  storageBucket: "video-7c7a3.appspot.com",
  messagingSenderId: "8315631699",
  appId: "1:8315631699:web:f91f60773c520864042ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;