
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA3cRwHHvrJKASXjNPoEdcEKDNPC-7ZbJw",
    authDomain: "safeher-4a7ca.firebaseapp.com",
    databaseURL: "https://safeher-4a7ca-default-rtdb.firebaseio.com",
    projectId: "safeher-4a7ca",
    storageBucket: "safeher-4a7ca.firebasestorage.app",
    messagingSenderId: "808608328634",
    appId: "1:808608328634:web:befcf5f319175ff7af8b83",
    measurementId: "G-M8K1BR7M9G"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);