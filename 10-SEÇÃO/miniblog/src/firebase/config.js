import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmkKjQHpsOJfilJjeCqDoM3tWHEVInAn0",
  authDomain: "mini-blog-ea386.firebaseapp.com",
  projectId: "mini-blog-ea386",
  storageBucket: "mini-blog-ea386.appspot.com",
  messagingSenderId: "708419790729",
  appId: "1:708419790729:web:20d17087033b13c4a1e358"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };