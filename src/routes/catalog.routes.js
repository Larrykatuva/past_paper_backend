const express = require('express');
const router = express.Router();
const CatalogController = require('../controllers/catalog.controllers');
const multer = require('multer');
const upload = multer({ dest: 'upload/'});


var type = upload.single('file');


router.post('/', CatalogController.createResearchPaper);
router.get('/', CatalogController.getAllResearchPapers);

module.exports = router;