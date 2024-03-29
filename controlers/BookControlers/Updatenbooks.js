const Book = require('../../models/BookSchema');

const updateBook = async (req, res) => {
    try {
        // const book = await Book.findOne({ id: bookId });
        const bookId = req.params.id;
        const updateBook = req.body
        //  console.log(upadteBook);
        const updatedBook = await Book.findByIdAndUpdate(bookId, updateBook, { new: true });
        console.log(updatedBook);

        if (!updatedBook) return res.status(400).json({ msg: "No Book Found" });

        res.status(200).json({ message: `${updatedBook.book_name} has been updated successfully` })
    }
    catch (err) {
        console.log(`Error in updating Book: ${err}`);
        res.status(500).json({ message: "Internal Server error", err });
    }
}
module.exports = updateBook;