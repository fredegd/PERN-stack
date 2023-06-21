import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"

import Paginator from "./Paginator";
import BookCard from '../components/BookCard';

export default function Books() {

    const [books, setBooks] = useState([])


    useEffect(() => {
      axios.get("http://localhost:3003/api/books" )
           .then((response)=>{
             setBooks(response.data);
           })
           .catch((err)=>console.error(err,"url not found"))
     }, [])


  return (
   <>
   <div className='paged'>
   <h1>Our Books:</h1>
   <Paginator />
   {
      books.map((book)=>{
        return (
        <Link to={`/books/${book.id}`} key={book.id}>
            <BookCard book={book}/>
        </Link>)
      })
    }
   </div>
   
   </>
  )
}
