require("dotenv/config");
const express = require("express");
const cors = require("cors");
const booksRouter = require("./routes/books");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());

app.use(express.json());

app.use("/api/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
});
