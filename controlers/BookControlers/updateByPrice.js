const Book = require('../../models/BookSchema');

const updateBookByPrice = async (req, res) => {
    try {
        // const book = await Book.findOne({ id: bookId });
        const bookname = req.params.bookname;
        const updatePrice = req.body.price
        //  console.log(upadteBook);
        const updatedBook = await Book.findOne({ book_name: bookname });


        if (!updatedBook) return res.status(400).json({ msg: "No Book Found" });
        updatedBook.price = updatePrice
        await updatedBook.save();
        res.status(200).json({ message: `${bookname} has been updated successfully`, updatedBook })
    }
    catch (err) {
        console.log(`Error in updating Book: ${err}`);
        res.status(500).json({ message: "Internal Server error", err });
    }
}
module.exports = updateBookByPrice;