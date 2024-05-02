import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 container ">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Cool</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none w-24 sm:w-64 ease-in-out transition-all duration-300 text-slate-500 "
          />
          <FaSearch className="" />
        </form>
        <ul className="flex gap-12 items-center flex-row">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:text-slate-400 transition-colors duration-300 font-semibold">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:text-slate-400 transition-colors duration-300 font-semibold">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="h-9 w-9 rounded-full object-cover"
                src={currentUser.rest.avatar}
                alt="profile"
              ></img>
            ) : (
              <li className="text-slate-700 hover:text-slate-400 transition-colors duration-300">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
