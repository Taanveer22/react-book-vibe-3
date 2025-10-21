import bannerImage from "../assets/books.jpg";
const Banner = () => {
  return (
    <>
      <div className="hero bg-blue-200 mb-12 max-h-dvh">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImage} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold mb-5">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success">View The List</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
