import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    let uniquePrefix = Date.now();
    const fileName = uniquePrefix + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

export default upload;