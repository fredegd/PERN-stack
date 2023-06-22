import { useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";

export default function Paginator() {
  const [page, setPage] = useState(0);
  const [books, setBooks] = useState([]);
  const [maxPages, setMaxPages] = useState();

  const booksPerPage = 4;
  const skipAmount = booksPerPage * page;

  const handlePrevious = () => {
    const prevPage = (page) => {
      return page > 0 ? page - 1 : page;
    };
    setPage(prevPage);
  };

  const handleNext = () => {
    const nextPage = (page) => {
      return page < maxPages - 1 ? page + 1 : page;
    };
    setPage(nextPage);
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3003/api/books/books?limit=${booksPerPage}&skip=${skipAmount}`
      )
      .then((response) => {
        setBooks(response.data.books);
        setMaxPages(
          Math.ceil(parseInt(response.data.totalBooks) / booksPerPage)
        );
      })
      .catch((err) => console.error(err, "URL not found"));
  }, [page]);

  return (
    <div className="paged ">
      <div className="pagination">
        <button onClick={handlePrevious}>prev page</button>
        <button onClick={handleNext}>next page</button>
        <p>
          page: {page + 1} of {maxPages}
        </p>
      </div>

      <Books books={books} page={page} />
    </div>
  );
}
