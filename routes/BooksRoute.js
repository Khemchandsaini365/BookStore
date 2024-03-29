const express = require('express')
const addBooks = require('../controlers/BookControlers/addBooks');
const deleteBooks = require('../controlers/BookControlers/deleteBooks');
const getBooksByName = require('../controlers/BookControlers/getBooks');
const getBooksByGenre = require('../controlers/BookControlers/getBookByGenre');
const getBooksByPrice = require('../controlers/BookControlers/getBookgtPrice');
const getBooksByPrices = require('../controlers/BookControlers/getBooksbetween');
const updateBook = require('../controlers/BookControlers/Updatenbooks');
const updateBookByName = require('../controlers/BookControlers/updateByName');
const router = express.Router();

router.post("/addbooks", addBooks);
router.delete("/removebook/:id", deleteBooks)
router.get("/getBooks/:name", getBooksByName)
router.get("/getBookbyGener/:genre", getBooksByGenre)
router.get("/getBookbyprice", getBooksByPrice)
router.get("/getBookbypricesbetween10-60", getBooksByPrices)
router.put("/updateBooks/:id", updateBook)
router.put("/updateBooksbyname/:auther", updateBookByName)

module.exports = router;