export default function BookCard({book}) {
  return (
    <>
      <div className="book-card">
        <img src={book.cover_url} alt={book.title} className="book-card-img" />
       <div className="book-card-text">
       <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
        <p>Caregory: {book.category}</p>
        <p>Published by: {book.publishedat}</p>
       </div>
       
      </div>
    </>
  );
}
