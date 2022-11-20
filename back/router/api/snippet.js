import fs from 'node:fs'

// import { bucket } from './firebase/init.js' => need to get the json certificate from firebase
import multer from 'multer'
import { sharpImage } from './helpers/sharpImage.js'
const storage = multer.memoryStorage()
const upload = multer({ storage })
fastify.post('/image', upload.single('snippetImg'), (req, resp) => {
  const file = req.file
  const bucketFile = firebaseBucket.file(file.originalname)
  bucketFile.save(file.buffer).then((resp) => {
    console.log(resp)
  })
  // fs.writeFileSync('./lol.png',file.buffer)
  resp.json({ hello: 'OK' })
})

// firebaseBucket.file('/Capture decran 2021-07-13 a 01.20.58.png').download({
//   destination:'./images/lol.png'
// }).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })
