const init = require("./init.js");
const upload = (fileToUpload) => {
    init.bucket.upload(fileToUpload).then((resp) => {
        console.log(resp);
    })
}
module.exports = {
    upload
}
