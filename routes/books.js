const express = require("express");
const {
  getBooks,
  getLimitedBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

const booksRouter = express.Router();

booksRouter.get("/", getBooks);

booksRouter.get("/books", getLimitedBooks);

booksRouter.get("/:id", getBook);

booksRouter.post("/", createBook);

booksRouter.put("/:id", updateBook);

booksRouter.delete("/:id", deleteBook);

module.exports = booksRouter;
