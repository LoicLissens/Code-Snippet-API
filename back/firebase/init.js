const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const serviceAccount = require('../serviceAccountKey.json')
initializeApp({
  credential: cert(serviceAccount),
  storageBucket:'code-snippet-96716.appspot.com'
});
const bucket = getStorage().bucket()

exports.bucket = bucket