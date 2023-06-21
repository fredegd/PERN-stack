import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from "axios"



export default function BookDetails() {

  const [bookDetail, setBookDetails] = useState({})
  const { id } = useParams();
  // console.log(id, "is the params")
  useEffect(() => {
    axios.get(`http://localhost:3003/api/books/${id}` )
         .then((response)=>{
          console.log(response.data)
           setBookDetails(response.data);
         })
         .catch((err)=>console.error(err,"url not found"))
   }, [])


  return (
    <div>
    <img src={bookDetail.cover_url} alt={bookDetail.title} className="book-card-img" />
    <h3>{bookDetail.title}</h3>
    <h2>{bookDetail.author}</h2>
    <p>{bookDetail.description}</p>
    <p>Caregory: {bookDetail.category}</p>
    <p>Published by: {bookDetail.publisher}</p>
  </div>
  )
}
