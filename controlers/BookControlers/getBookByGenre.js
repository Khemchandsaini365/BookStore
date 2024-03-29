const Book = require('../../models/BookSchema');

const getBooksByGenre = async (req, res) => {
    try {
        const book = await Book.find({ genre: req.params.genre });

        if (!book) return res.status(400).json({ msg: "No Book Found" });
        res.json(book)
    }
    catch (err) {
        console.log(`Error in finding Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = getBooksByGenre;