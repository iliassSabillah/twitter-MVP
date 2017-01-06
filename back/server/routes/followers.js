// REQUIRE IN EXPRESS:
const express = require('express');

// CREATE AN INSTANCE OF EXPRESS ROUTER:
const router = express.Router();

// IMPORT IN MODELS:
const {Message, Tweet, User }= require('../../db/models/index');

// ===========================

// MESSAGE ROUTES GO HERE

module.exports = router;
