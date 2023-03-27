// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCfu8V5iugMkghJ86kH9a_XeYIWjOc28Xw",
 authDomain: "test-auth-vaathi.firebaseapp.com",
 projectId: "test-auth-vaathi",
 storageBucket: "test-auth-vaathi.appspot.com",
 messagingSenderId: "66546504454",
 appId: "1:66546504454:web:d2ed8eec057da4ac2f4487",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
