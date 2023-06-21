
export default function pagination({ next, previous, setUrl }) {
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
  )
}
