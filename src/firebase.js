// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjxR9Jz36pgN8Hlxiz_S2VaQQqR7kAK-0",
  authDomain: "bazar-d44d0.firebaseapp.com",
  projectId: "bazar-d44d0",
  storageBucket: "bazar-d44d0.appspot.com",
  messagingSenderId: "426616252912",
  appId: "1:426616252912:web:071ffcd6d187e8995f1535",
  measurementId: "G-LLLVJEG3HX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
