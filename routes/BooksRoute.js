const express = require('express')
const addBooks = require('../controlers/BookControlers/addBooks');
const deleteBooks = require('../controlers/BookControlers/deleteBooks');
const getBooksByName = require('../controlers/BookControlers/getBooks');
const getBooksByGenre = require('../controlers/BookControlers/getBookByGenre');
const getBooksByPrice = require('../controlers/BookControlers/getBookgtPrice');
const getBooksByPrices = require('../controlers/BookControlers/getBooksbetween');
const router = express.Router();

router.post("/addbooks", addBooks);
router.delete("/removebook/:id", deleteBooks)
router.get("/getBooks/:name", getBooksByName)
router.get("/getBookbyGener/:genre", getBooksByGenre)
router.get("/getBookbyprice", getBooksByPrice)
router.get("/getBookbypricesbetween10-60", getBooksByPrices)

module.exports = router;