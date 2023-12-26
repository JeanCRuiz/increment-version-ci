import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import jsonKey from 'file:///C:/Users/JeanCarlosRuizVerigu/Desktop/vue-lugotech/increment-version-ci/firebase-key.json' assert {type: "json"}

initializeApp({
    credential: cert(jsonKey)
})

export const db = getFirestore()
