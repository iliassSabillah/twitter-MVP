// REQUIRE IN EXPRESS:
const express = require('express');

// CREATE AN INSTANCE OF ROUTER:
const router = express.Router();

// IMPORT IN MODELS:
const {Message, Tweet, User }= require('../../db/models/index');

// ========================================

// USERNAME & PASSWORD AUTEHNTICATION GO HERE!

module.exports = router;
