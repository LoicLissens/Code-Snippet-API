const sharp = require("sharp");
const fs = require("fs");


const sharpImage = async (imgPath) => {
  try {
      const sharpedInfo = await sharp(imgPath).png().toFile(imgPath + ".png")
      console.log(sharpedInfo);
  } catch(err) {
    console.error(err)
  }

};
const path = "./images/base/Capture d’écran 2021-11-15 à 20.08.56.png"

module.exports = {
    sharpImage
}