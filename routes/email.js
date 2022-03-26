const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/email");

router.post("/send", sendEmail);

module.exports = router;
