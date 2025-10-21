import { useEffect, useState } from "react";
import Book from "./Book";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mb-12">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Total Books : {books.length}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((bookElement) => (
          <Book bookElement={bookElement} key={bookElement.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
