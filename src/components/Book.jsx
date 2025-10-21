import { Link } from "react-router-dom";
const Book = ({ bookElement }) => {
  const { bookName, image, totalPages, rating, bookId } = bookElement;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-blue-300 shadow-sm pt-6">
        <figure>
          <img className="w-1/2 h-60" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Rating : {rating}</button>
            <button className="btn btn-secondary">Pages : {totalPages}</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
