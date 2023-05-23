// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDCsJ_7m8x3gBWnzO_JvHLTm0k-77WvwaM",
  authDomain: "reactnativegoit-e18b2.firebaseapp.com",
  projectId: "reactnativegoit-e18b2",
  storageBucket: "reactnativegoit-e18b2.appspot.com",
  messagingSenderId: "439637271473",
  appId: "1:439637271473:web:ef10f553feb45b14b65390",
  measurementId: "G-FQ201JLGL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
