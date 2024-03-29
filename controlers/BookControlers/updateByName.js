const Book = require('../../models/BookSchema');

const updateBookByName = async (req, res) => {
    try {
        // const book = await Book.findOne({ id: bookId });
        const autherName = req.params.auther;
        const updateBook = req.body
        //  console.log(upadteBook);
        const updatedBook = await Book.findOneAndUpdate({ author: autherName }, updateBook, { new: true });
        console.log(updatedBook);

        if (!updatedBook) return res.status(400).json({ msg: "No Book Found" });

        res.status(200).json({ message: `${updatedBook.book_name} has been updated by name successfully` })
    }
    catch (err) {
        console.log(`Error in updating by name Book: ${err}`);
        res.status(500).json({ message: "Internal Server error", err });
    }
}
module.exports = updateBookByName;