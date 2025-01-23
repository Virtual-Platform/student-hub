// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRh8P7HtwAIM0vbHYxHE5CHgdgqDofGiw",
    authDomain: "student-hub-4c649.firebaseapp.com",
    projectId: "student-hub-4c649",
    storageBucket: "student-hub-4c649.firebasestorage.app",
    messagingSenderId: "358420296507",
    appId: "1:358420296507:web:ab326d80899d7b5526bd1e",
    measurementId: "G-Z73REPXTZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;