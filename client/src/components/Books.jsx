import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Paginator from "./Paginator";
import BookCard from "../components/BookCard";

export default function Books({ books, page }) {
  return (
    <>
      <div className="paged-books-container">
        <h1>Our&nbsp;Books from&nbsp;A&nbsp;to&nbsp;Z :</h1>
        {books.map((book) => {
          return (
            <Link to={`/books/${book.id}`} key={book.id}>
              <BookCard book={book} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
