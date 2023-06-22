import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import InputForm from "./InputForm";

export default function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookDetail, setBookDetails] = useState({});
  const [editBookData, setEditBookData] = useState(false);
  const [deleteMask, setDeleteMask] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBookDetails(response.data);
      })
      .catch((err) => console.error(err, "url not found"));
  }, []);

  const handleUpdate = (newValue) => {
    setBookDetails(newValue);
    setEditBookData(false)
  };

  const handleAbortDelete = ()=>{
    setDeleteMask(false)
  };

  const deleteBook = () => {
    axios
      .delete(`http://localhost:3003/api/books/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate("/books");
      })
      .catch((err) => console.error(err, "url not found"));
  };

  return (
    <>
      <div>
        {editBookData ? (
          <InputForm
          editBookData={editBookData}
            id={id}
            title={bookDetail.title}
            author={bookDetail.author}
            description={bookDetail.description}
            category={bookDetail.category}
            cover_url={bookDetail.cover_url}
            publishedat={bookDetail.publishedat}
            isactive={bookDetail.isactive}
            handleUpdate={handleUpdate}
          />
        ) : (
          <></>
        )}

        {deleteMask ? (
          <div className="delete-mask">
            <h2>PERMANENTLY DELETING:</h2>
            <img
            src={bookDetail.cover_url}
            alt={bookDetail.title}
            className="book-card-img"
          />
             <h3>"{bookDetail.title}" by "{bookDetail.author}"</h3>
            <h1>ARE YOU SURE?</h1>
            <button onClick={handleAbortDelete}>ABORT OPERARION</button>
            <button onClick={deleteBook}>DELETE PERMANENTLY</button>
          </div>
        ) : (
          <>
        <div className="book-details">
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
            <p>status: {bookDetail.isactive ? "active" : "not active"}</p>
          </div>
        </div>
        <button
          onClick={() => {
            deleteMask ? setDeleteMask(false) : "";
            setEditBookData(!editBookData);
          }}
        >
          edit book data
        </button>
        <button
          onClick={() => {
            editBookData ? setEditBookData(false) : "";
            setDeleteMask(!deleteMask);
          }}
        >
          delete&nbsp;book
        </button>
        </>
        )}

        
      </div>
    </>
  );
}
