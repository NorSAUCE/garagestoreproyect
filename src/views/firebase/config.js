// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage,ref, uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4yjmKDO5VZ2xuavt3tfJS5yCc3MxaYAA",
  authDomain: "garagestore-b756e.firebaseapp.com",
  projectId: "garagestore-b756e",
  storageBucket: "garagestore-b756e.appspot.com",
  messagingSenderId: "290752576424",
  appId: "1:290752576424:web:8cb15a5911503dc6703b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file){
 const  storageRef= ref(storage, v4())
  await uploadBytes(storageRef,file)
  const url = await getDownloadURL(storageRef)
  return url
 }
 