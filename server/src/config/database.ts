import firebaseAdmin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
const serviceAccount = require("../../serviceAccountKey.json");

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
});

const database = getFirestore();

export {
    database
}