import AllBooks from "../components/AllBooks";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};

export default HomePage;
