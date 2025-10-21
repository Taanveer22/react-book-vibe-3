import { useLoaderData, useParams } from "react-router";

const BookDetail = () => {
  const params = useParams();
  // console.log(params);
  // console.log(params.bookId);
  const booksLoaderData = useLoaderData();
  // console.log(booksLoaderData);
  const convertedBookid = parseInt(params.bookId);
  // console.log(convertedBookid);
  const detailRouteBook = booksLoaderData.find(
    (bookElement) => bookElement.bookId === convertedBookid
  );
  console.log(detailRouteBook);
  const { bookName, review, image } = detailRouteBook;
  return (
    <div>
      <div className="hero bg-green-300 min-h-screen mb-12">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">{review}</p>
            <div className="flex gap-6 items-center">
              <button className="btn btn-primary">Mark As Read</button>
              <button className="btn btn-secondary">Add To Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
