import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const menuClick = () => {
    setClick(!click);
  };
  return (
    <div className="flex justify-center w-full bg-white">
      <div className="navbar  sm:container">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={menuClick}
              tabIndex={0}
              role="button"
              className=" lg:hidden mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#111111] font-bold"
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
              onClick={menuClick}
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                click ? "hidden" : ""
              }`}
            >
              <li className="text-base text-[#111111] mb-2">
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li className="text-base text-[#111111] mb-2">
                <Link to="/products">Products</Link>
              </li>

              <li className="text-base text-[#111111] mb-2">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" text-xl font-bold text-[#111111] ">
            <img className="w-[100px]" src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-base text-[#111111] mr-8">
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className="text-base text-[#111111] mr-8">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-base text-[#111111] mr-8">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="text-base text-[#111111] mr-8">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="text-base text-[#111111] mr-8">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="text-base text-[#111111] mr-8">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
