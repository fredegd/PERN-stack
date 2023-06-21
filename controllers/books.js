const pool = require("../db");

const getBooks = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM books ORDER BY title;");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

const getLimitedBooks = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM books LIMIT $1 OFFSET $2;",[4,0]);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM books WHERE id=$1;", [id]);

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, description, category, cover_url, publishedat, isActive } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO books (title, author, description, category, cover_url, publishedat ) VALUES ($1, $2, $3, $4, $5, $6);",
                         [ title, author, description, category, cover_url, publishedat ]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, description, category, cover_url, publishedAt } = req.body;

    const { rows } = await pool.query(
      "UPDATE books SET title=$1, author=$2, description=$3, category=$4, cover_url=$5, publishedAt=$6 WHERE id=$7 RETURNING *;",
      [title, author, description, category, cover_url, publishedAt,  id]
    );

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query("DELETE FROM books where id=$1;", [id]);
    if (result.rowCount > 0) {
      res.status(200).json("success");
    } else {
      {
        res.status(400).json("not found");
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { getBooks, getLimitedBooks, getBook, createBook, updateBook, deleteBook };
