import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChOuJtLhjAtq2hRlGhCj-YCevRjv9dYdk",
    authDomain: "ecommerce-hockey-elite.firebaseapp.com",
    projectId: "ecommerce-hockey-elite",
    storageBucket: "ecommerce-hockey-elite.appspot.com",
    messagingSenderId: "535284464456",
    appId: "1:535284464456:web:b543c54a6a1fd2d293117d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const db = getFirestore()

export default db