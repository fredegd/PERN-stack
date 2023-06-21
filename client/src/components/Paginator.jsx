import { useState, useEffect } from "react";

export default function Paginator({ next, previous }) {
  
    const booksPerPage =2;
    const [skipAmount, setSkipAmount] = useState(0)
  
    const [url, setUrl] = useState(
    `http://localhost:3003/api/books/books/?limit=${booksPerPage}&skip=${skipAmount}`
  );

  return (
    <div className="pagination">
      <button
        disabled={!next}
        onClick={() => {
          setUrl(next);
        }}
      >
        Next
      </button>
      <button
        disabled={!previous}
        onClick={() => {
          setUrl(previous);
        }}
      >
        Prev
      </button>
    </div>
  );
}
