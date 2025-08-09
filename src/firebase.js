// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
     createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword, 
     signOut
     } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-u676FyVg5V2eDKLIQnUVSox0WcgOBLU",
  authDomain: "netflix-clone-773c8.firebaseapp.com",
  projectId: "netflix-clone-773c8",
  storageBucket: "netflix-clone-773c8.firebasestorage.app",
  messagingSenderId: "396665154365",
  appId: "1:396665154365:web:6f49230c663e775d53f354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
const db =getFirestore(app)

const signup = async(name,email,password)=>{

    try {
        const res =await createUserWithEmailAndPassword(auth,email,password)
        const user =res.user;
        //Store data in firebase:
        await addDoc(collection(db,'user'),{
            uid: user.uid,
            name,
            authProvider:'local',
            email,
        })
        toast.success('User created succesfully')

    } catch (error) {
        console.error('User Create Error:'+ error.message)
       
        toast.error(error.code)
    }
}

const login = async(email,password)=>{
 try {
    await signInWithEmailAndPassword(auth,email,password)
 } catch (error) {
    console.error(error.message)
   
    toast.error(error.code)
    toast.success('Log In')
 }  
}

const logout =()=>{
    signOut(auth);
    toast.success('signing Out')
}

export {auth,db,login,signup,logout}