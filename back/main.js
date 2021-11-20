const express = require("express");
const { db } = require("./db/init");
const { createUsersTable, createAdmin, createCategories } = require("./db/setUpDb");
const { comparePass } = require("./helpers/hashPassword");
const { sharpImage } = require("./helpers/sharpImage");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const firebaseBucket = require("./firebase/init").bucket;
const multer = require("multer");
const fs = require("fs");
const cors = require("cors")


const INITDB = false;

if (INITDB) {
  createCategories();
  createUsersTable();
}

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const PORT = process.env.SERVER_PORT;

//app
const app = express();
app.use(cors());

app.disable("x-powered-by");
app.use(express.json());

const authentificateToken = (req, resp, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return resp.sendStatus(401);
  jwt
    .verify(token, process.env.ACCESS_TOKEN_SECRET)
    .then((user) => {
      req.user = user;
    })
    .catch((err) => {
      return resp.sendStatus(403);
    });
};
const generateAccessToken = (user) => {
  return jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
};
// routing

app.get("/api/snippets", authentificateToken, (req, resp) => {
  resp.send("ola");
});
app.get("/api/categories", async (req, resp) => {
  try {
    await db
      .query(
        `
    SELECT * FROM categories`
      )
      .then((r) => {
        resp.json(r.rows);
      });
  } catch (e) {
    resp.json({Error:'Unable to find any categories'})
  }
});

app.post("/api/login", (req, resp) => {
  const { user, password } = req.body;
  accessToken = generateAccessToken(user);
  resp.json({ accessToken });
  db.query(
    `
    SELECT * FROM categories WHERE name = $1`,
    [user]
  )
    .then((data) => {
      const userData = data.rows[0];
      comparePass(password, userData.password).then((result) => {
        console.log(result);
      });
    })
    .catch((e) => console.error("lol"));
});

app.get("/image/:filename", (req, resp) => {
  res.json("/image/:filename api");
});

app.post("/image", upload.single("snippetImg"), (req, resp) => {
  const file = req.file;
  const bucketFile = firebaseBucket.file(file.originalname);
  bucketFile.save(file.buffer).then((resp) => {
    console.log(resp);
  });
  // fs.writeFileSync('./lol.png',file.buffer)
  resp.json({ hello: "OK" });
});

app.listen(PORT);
console.log(`Running on ${PORT}`);

// firebaseBucket.file('/Capture decran 2021-07-13 a 01.20.58.png').download({
//   destination:'./images/lol.png'
// }).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })
