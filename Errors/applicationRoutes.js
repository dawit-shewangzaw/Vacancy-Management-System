const express = require('express');
const { applyForVacancy, getApplications } = require('../controllers/applicationController');
const multer = require('multer');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/cvs');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single('cv'), applyForVacancy);
router.get('/', getApplications);

module.exports = router;
