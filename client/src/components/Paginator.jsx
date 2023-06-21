import { useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";

export default function Paginator() {
  const [page, setPage] = useState(0);
  const [books, setBooks] = useState([])

  const booksPerPage = 2;
  const skipAmount = booksPerPage * page;
  const handlePrevious = () => {
    setPage((page)=>page-1);
  }
  const handleNext = () => {
    setPage((page)=>page+1);
  }
  useEffect(() => {
    axios
      .get(
        `http://localhost:3003/api/books/books?limit=${booksPerPage}&skip=${skipAmount}`
      )
      .then((response) => {
        setBooks(response.data);
        console.log(response.data)
      })
      .catch((err) => console.error(err, "URL not found"));
  }, [page]);



  return (
    <div className='paged pagination'>
      <button
        onClick={handlePrevious}
      >
        prev page
      </button>
      <button onClick={handleNext}>next page</button>
      <p>{page}</p>
      <Books books={books} page={page} />
    </div>
  );
}
