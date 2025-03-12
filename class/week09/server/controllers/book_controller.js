const Book = require("../models/book");

const getAllBooks = (req, res) => {
    Book.find()
      .then((results) => {
        res.json(results);
      })
      .catch((error) => {
        res.status(500).json({ message: "Error fetching books", error });
      });
  }

module.exports = {
    getAllBooks,
  };