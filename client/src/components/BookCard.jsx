export default function BookCard({book}) {
  return (
    <>
      <div>
        <img src={book.cover_url} alt={book.title} className="book-card-img" />
        <h3>{book.title}</h3>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
        <p>Caregory: {book.category}</p>
        <p>Published by: {book.publisher}</p>
      </div>
    </>
  );
}
