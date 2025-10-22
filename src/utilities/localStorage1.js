import { toast } from "react-toastify";

const getReadList = () => {
  const stringifiedStoredLS = localStorage.getItem("read-list");
  if (stringifiedStoredLS) {
    const storedLS = JSON.parse(stringifiedStoredLS);
    return storedLS;
  } else {
    return [];
  }
};

const setReadList = (id) => {
  const storedLS = getReadList();
  if (storedLS.includes(id)) {
    // console.log(id, "already exist");
    toast.error("already exist in read list");
  } else {
    storedLS.push(id);
    // console.log(id, "added item");
    const stringifiedStoredLS = JSON.stringify(storedLS);
    localStorage.setItem("read-list", stringifiedStoredLS);
    toast.success("successfully added in the read list");
  }
};

export { setReadList, getReadList };
