import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
  databaseURL:"https://copydrop-52961-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig)

export default  app;
