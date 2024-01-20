// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore, collection } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDRM7ox3PrUJPbBL31yQM4OONIbXUnRmwc",
	authDomain: "react-notes-9c5bb.firebaseapp.com",
	projectId: "react-notes-9c5bb",
	storageBucket: "react-notes-9c5bb.appspot.com",
	messagingSenderId: "447664319661",
	appId: "1:447664319661:web:ded1bc29766fbb20c4aa24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);
const notesCollection = collection(db, "notes");
