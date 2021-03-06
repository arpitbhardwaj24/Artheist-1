const multer = require("multer");

// Upload object
const upload = multer({
  limits: {
    fileSize: 1500000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  },
});

module.exports = upload;
