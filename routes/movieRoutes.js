const express = require('express');
const router = express.Router();
const { getMovies,postMovies} = require('../controllers/movieController');

router.get("/", getMovies);

module.exports = router;