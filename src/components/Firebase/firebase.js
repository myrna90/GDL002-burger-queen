import app from "firebase/app";
import "firebase/auth";

const config={
    apiKey: "AIzaSyDT7ALOBhurm20SlZuaOfRZdGVQDbCHIRo",
    authDomain: "menureact-b2d84.firebaseapp.com",
    databaseURL: "https://menureact-b2d84.firebaseio.com",
    projectId: "menureact-b2d84",
    storageBucket: "menureact-b2d84.appspot.com",
    messagingSenderId: "553258226969",
    appId: "1:553258226969:web:e1359fb3428e64f4"
}

class Firebase{
    constructor(){
        app.initializeApp(config);
    }
    
}

export default Firebase;