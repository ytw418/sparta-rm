//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
   apiKey: "AIzaSyBc31NZyY-y74RyCuWHfWp3ta3CnvlDnww",
   authDomain: "sparta-myhoneytip-jun-93d16.firebaseapp.com",
   projectId: "sparta-myhoneytip-jun-93d16",
   storageBucket: "sparta-myhoneytip-jun-93d16.appspot.com",
   messagingSenderId: "273329978126",
   appId: "1:273329978126:web:3b3c5c646d7dbb2952755f",
   measurementId: "G-TSGSFPPWM1"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()