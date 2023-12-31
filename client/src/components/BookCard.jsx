export default function BookCard({ book }) {
  return (
    <>
      <div className="book-card">
        <hr />
        <img src={book.cover_url} alt={book.title} className="book-card-img" />
        <div className="book-card-text">
          <h2>{book.title}</h2>
          <h2>{book.author}</h2>
       
          <p>{book.description}</p>
          <hr />
        </div>
      </div>
    </>
  );
}
