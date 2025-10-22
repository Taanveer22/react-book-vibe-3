import { toast } from "react-toastify";

const getWishList = () => {
  const stringifiedStoredLS = localStorage.getItem("wish-list");
  if (stringifiedStoredLS) {
    const storedLS = JSON.parse(stringifiedStoredLS);
    return storedLS;
  } else {
    return [];
  }
};

const setWishList = (id) => {
  const storedLS = getWishList();
  if (storedLS.includes(id)) {
    // console.log(id, "already exist");
    toast.error("already exist in the wish list");
  } else {
    storedLS.push(id);
    // console.log(id, "added item");
    const stringifiedStoredLS = JSON.stringify(storedLS);
    localStorage.setItem("wish-list", stringifiedStoredLS);
    toast.success("successfully added in the wish list");
  }
};

export { getWishList, setWishList };
