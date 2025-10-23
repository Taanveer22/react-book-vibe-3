import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadList } from "../utilities/localStorage1";
import Book from "../components/Book";
import { getWishList } from "../utilities/localStorage2";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  const booksLoaderData = useLoaderData();
  // console.log(booksLoaderData);

  useEffect(() => {
    const localStoredReadList = getReadList();
    // console.log(localStoredReadList);
    const localStoredReadListInteger = localStoredReadList.map((id) =>
      parseInt(id)
    );
    // console.log(localStoredReadListInteger);
    const checkReadListBooks = booksLoaderData.filter((bookElement) =>
      localStoredReadListInteger.includes(bookElement.bookId)
    );
    // console.log(checkReadListBooks);
    setReadList(checkReadListBooks);
  }, [booksLoaderData]);

  useEffect(() => {
    const loacalStoredWishList = getWishList();
    // console.log(loacalStoredWishList);
    const loacalStoredWishListInteger = loacalStoredWishList.map((id) =>
      parseInt(id)
    );
    // console.log(loacalStoredWishListInteger);
    const checkWishListBooks = booksLoaderData.filter((bookElement) =>
      loacalStoredWishListInteger.includes(bookElement.bookId)
    );
    // console.log(checkWishListBooks);
    setWishList(checkWishListBooks);
  }, [booksLoaderData]);

  const handleSort = (type) => {
    // console.log(type);
    setSort(type);

    if (type === "ratings") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }

    if (type === "pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }

    if (type === "ratings") {
      const sortedWishList = [...wishList].sort((x, y) => y.rating - x.rating);
      setWishList(sortedWishList);
    }

    if (type === "pages") {
      const sortedWishList = [...wishList].sort(
        (x, y) => y.totalPages - x.totalPages
      );
      setWishList(sortedWishList);
    }
  };

  return (
    <div className="w-11/12 mx-auto mb-12">
      <div className="mb-24 flex justify-center items-center">
        <div className="dropdown dropdown-open">
          <div tabIndex={0} role="button" className="btn btn-accent m-1">
            {sort ? `Sort By ${sort}` : `Sort By`}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort("ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("pages")}>
              <a>Pages</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-xl font-medium mb-6 text-center">
              Total Read List Books : {readList.length}
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {readList.map((bookElement) => (
                <Book bookElement={bookElement} key={bookElement.bookId}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-xl font-medium mb-6 text-center">
              Total Read List Books : {wishList.length}
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {wishList.map((bookElement) => (
                <Book bookElement={bookElement} key={bookElement.bookId}></Book>
              ))}
            </div>
          </TabPanel>
        </Tabs>
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-xl font-medium mb-6 text-center">
              Total Read List Books : {readList.length}
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {readList.map((bookElement) => (
                <Book bookElement={bookElement} key={bookElement.bookId}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-xl font-medium mb-6 text-center">
              Total Read List Books : {wishList.length}
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {wishList.map((bookElement) => (
                <Book bookElement={bookElement} key={bookElement.bookId}></Book>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
