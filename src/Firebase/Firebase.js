// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTprti7RfEXdIuBon7t6T6Wb7uaHrmq8o",
  authDomain: "toy-doll-client.firebaseapp.com",
  projectId: "toy-doll-client",
  storageBucket: "toy-doll-client.appspot.com",
  messagingSenderId: "854179656573",
  appId: "1:854179656573:web:a3468293e7a5ba3d2c5214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;