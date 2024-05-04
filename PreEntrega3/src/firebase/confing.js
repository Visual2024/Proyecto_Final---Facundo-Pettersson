import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlzEPo8BYfk743vUoOHr-Y_DKtdeTzIF8",
  authDomain: "ecommerce-3792b.firebaseapp.com",
  projectId: "ecommerce-3792b",
  storageBucket: "ecommerce-3792b.appspot.com",
  messagingSenderId: "277800471114",
  appId: "1:277800471114:web:bb97cf050764232b8cf4b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)