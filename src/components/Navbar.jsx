import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gray-200 shadow-sm mb-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/listedbooks">Listed Books</Link>
              </li>
              <li>
                <Link to="/dashboard">Dash Board</Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-ghost text-xl">Book Vibe</button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/listedbooks">Listed Books</Link>
            </li>
            <li>
              <Link to="/dashboard">Dash Board</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="btn btn-primary">Sign In</button>
          <button className="btn btn-secondary">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
