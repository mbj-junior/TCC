const express = require('express');
const router = express.Router();
const controller = require("../controllers/loginController");

// router.post('/', controller.getLogin);
router.post('/new', controller.postLogin);

module.exports = router;