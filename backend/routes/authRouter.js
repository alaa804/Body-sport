const express = require("express");
const router = express.Router();

const { register } = require("../controllers/authController")


// POST : /api/register
// DESCRIPTION : REGISTER THE USER 
// ACCESS : PUBLIC
router.post('/register' , register)

module.exports = router  