import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Homeimage/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartWishlist } from "../context/CartWishlistContext";

function Header() {
  const { user, logout, isAuthenticated } = useAuth0();
  const { cart, wishlist } = useCartWishlist();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchInput.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput("");
    }
  };

  const handleSearchClick = () => {
    if (searchInput.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput("");
    }
  };
  return (
    <header className="flex justify-between items-center bg-[#edc057] px-5 py-2 text-black font-medium">
      {/* Logo */}
      <div className="flex items-center gap-2 italic text-[20px]">
        <img src={Logo} alt="Logo" className="w-10" />
        <h1>S.T. Tech</h1>
      </div>

      {/* Navbar */}
      <nav className="flex items-center gap-8">
        <NavLink to="/" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Home
        </NavLink>

        {/* Dashboard Dropdown */}
        <div className="relative group font-medium hover:border-b-3 hover:border-[#003372]">
          <span className="cursor-pointer">Dashboard</span>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black rounded-lg shadow-lg min-w-[150px] z-50">
            <NavLink
              to="/dashboard/admin"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Admin
            </NavLink>
            <NavLink
              to="/dashboard/instructor"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Instructor
            </NavLink>
            <NavLink
              to="/dashboard/student"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Student
            </NavLink>
          </div>
        </div>

        <NavLink to="/courses" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Courses
        </NavLink>
        <NavLink to="/instructors" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Instructors
        </NavLink>
        <NavLink to="/about" className="font-medium hover:border-b-3 hover:border-[#003372]">
          About us
        </NavLink>

        <div className="relative group font-medium hover:border-b-3 hover:border-[#003372]">
          <span className="cursor-pointer">More</span>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black rounded-lg shadow-lg min-w-[150px] z-50">
            <NavLink
              to="/contact"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-sm shadow-black">
          <input
            type="text"
            placeholder="Search for anything"
            className="border-none outline-none text-sm px-4 h-8 rounded-full"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleSearch}
          />
          <button
            onClick={handleSearchClick}
            className="bg-transparent border-none cursor-pointer"
          >
            <FaSearch className="text-[#7A7A7A] size-5" />
          </button>
        </div>

        {/* Cart */}
        <NavLink to="/cart" className="relative">
          <FaCartShopping className="text-[#003372] size-6" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        </NavLink>

        {/* Wishlist */}
        <NavLink to="/dashboard/student/wishlist" className="relative">
          <FaRegHeart className="text-[#003372] size-6" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {wishlist.length}
          </span>
        </NavLink>

        {/* Profile */}
        {isAuthenticated && user ? (
          <div className="relative group border bg-orange-100 w-10 h-10 rounded-full border-red-600 flex items-center justify-center">
            <img
              className="rounded-full object-cover"
              src={user.picture}
              alt={user.name}
            />
           <div className="absolute top-8 w-28 z-50 hidden group-hover:block p-4 rounded-2xl bg-gray-400 text-center">
              <NavLink
                className="block hover:underline hover:text-red-600 mb-2"
                to="/userprofile"
              >
                Profile
              </NavLink>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="block hover:underline hover:text-red-600 ml-4 cursor-pointer"
              >
                LogOut
              </button>
            </div>
          </div>
        ) : (
          <div className="relative group border bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
              alt="default_user"
            />
           <div className="absolute top-8 w-28 z-50 hidden group-hover:block p-4 rounded-2xl bg-gray-400 text-center">
              <NavLink
                className="block hover:underline hover:text-red-600 mb-2"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="block hover:underline hover:text-red-600"
                to="/register"
              >
                Register
              </NavLink>
            </div>
          </div>
        )}
        <TbWorld className="text-white size-6" />
      </div>
    </header>
  );
}

export default Header;