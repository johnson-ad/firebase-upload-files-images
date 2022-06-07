import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 


const firebaseConfig = {
    apiKey: "AIzaSyBVtnVSC3hpTiv4x9udXi9vAQbcMz9c-wA",
    authDomain: "upload-images-files.firebaseapp.com",
    projectId: "upload-images-files",
    storageBucket: "upload-images-files.appspot.com",
    messagingSenderId: "184344932417",
    appId: "1:184344932417:web:64c745edf6662771b596c0",
    measurementId: "G-K1LYF5FCEC"
  };
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
