import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import InputForm from "./InputForm";

export default function BookDetails() {
  const { id } = useParams();
  const [bookDetail, setBookDetails] = useState({});
  const [editActive, setEditActive] = useState(false)

  

   useEffect(() => {
    axios
      .get(`http://localhost:3003/api/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBookDetails(response.data);
      })
      .catch((err) => console.error(err, "url not found"));
  }, []);

  const editEntries = ()=>{
    setEditActive(!editActive);
    console.log("make a put request")
  }
  const deleteBook = ()=>{
    console.log("delete the book")
  }
  return (
    <>
    <div>
      <div className="book-details paged">
        <img
          src={bookDetail.cover_url}
          alt={bookDetail.title}
          className="book-card-img"
        />
        <div className="book-info">
          <h1>{bookDetail.title}</h1>
          <h2>{bookDetail.author}</h2>
          <p>{bookDetail.description}</p>
          <p>Caregory: {bookDetail.category}</p>
          <p>Published by: {bookDetail.publishedat}</p>
          <p>status: {bookDetail.active ? "active" : "not active"}</p>
        </div>
      </div>
      <button onClick={editEntries}>edit book data</button>
      <button  onClick={deleteBook}>delete book</button>
      {editActive?<InputForm  editActive={editActive}
                              id={id} 
                              title={bookDetail.title} 
                              author={bookDetail.author} 
                              description={bookDetail.description} 
                              category={bookDetail.category}
                              cover_url={bookDetail.cover_url}
                              publishedat={bookDetail.publishedat}
                              />:<></>}
    </div>
   
</>
  );
}
