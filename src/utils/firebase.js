// Firebase konfiguratsiyasi bu yerga qo‘shiladi
// Firebase projectni yaratib, configni bu yerga joylang

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
   apiKey: "AIzaSyCeRxWAKD16EI8Cxg_936c2XKWY5F0IIXI",
  authDomain: "cafe-booking-app-4a42d.firebaseapp.com",
  projectId: "cafe-booking-app-4a42d",
  storageBucket: "cafe-booking-app-4a42d.firebasestorage.app",
  messagingSenderId: "561546974452",
  appId: "1:561546974452:web:ec7dcf7c74256eb38efaa1",
  measurementId: "G-5QLRD5BS0W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const sendOrder = async (table, items) => {
  await addDoc(collection(db, 'orders'), {
    id: uuidv4(),
    table,
    items,
    status: 'pending',
    timestamp: new Date()
  });
};

export const listenToOrders = (callback) => {
  onSnapshot(collection(db, 'orders'), (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(o => o.status !== 'completed');
    callback(data);
  });
};

export const markOrderComplete = async (id) => {
  await deleteDoc(doc(db, 'orders', id));
};
