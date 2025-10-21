const Book = ({ bookElement }) => {
  const { bookName, image, totalPages, rating } = bookElement;
  return (
    <div>
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
    </div>
  );
};

export default Book;
