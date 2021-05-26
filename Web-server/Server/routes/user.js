const express = require('express');
const router = express.Router();
const { userControl } = require("../controllers/user");


router.get("/", userControl);

module.exports = router;