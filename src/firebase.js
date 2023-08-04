import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgcy4VgBhohnzDwIoAKyS6G0ZKKNulQOI",
  authDomain: "netflix-clone-3d0d5.firebaseapp.com",
  projectId: "netflix-clone-3d0d5",
  storageBucket: "netflix-clone-3d0d5.appspot.com",
  messagingSenderId: "167198292590",
  appId: "1:167198292590:web:fcfe5895e8780d95ff047f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app)

export {auth}
export default db;