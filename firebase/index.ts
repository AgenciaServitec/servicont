import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { currentConfig, currentEnvironment } from "@/config";

// Initialize Firebase
const app = initializeApp(currentConfig.firebaseApp);

// Initialize Firebase services
const firestore = getFirestore(app);
const storage = getStorage(app);

const { version, apiUrl } = currentConfig;

console.log(currentEnvironment, ":", version);

export { firestore, storage, apiUrl };
