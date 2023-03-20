// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4RTeHtUYt0ZHhWprRdySbi1-m2IOMkrg",
  authDomain: "coder-react-comision-39560.firebaseapp.com",
  projectId: "coder-react-comision-39560",
  storageBucket: "coder-react-comision-39560.appspot.com",
  messagingSenderId: "407523458568",
  appId: "1:407523458568:web:883f042e72eccf9695dbbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app
}

