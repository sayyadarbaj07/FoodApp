import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import logo from "../assets/logo3.png"; // Logo import

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-4 px-6">
      {/* Logo + App Name */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Logo"
          className="w-14 h-14 object-contain rounded-full transition-transform duration-300 hover:scale-110 shadow-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-500">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-3xl font-bold text-green-600">Foods App</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full lg:w-[30vw] mt-3 lg:mt-0">
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          name="search"
          placeholder="🔍 Search delicious food..."
          autoComplete="off"
          className="p-3 border border-gray-300 text-sm rounded-full outline-none w-full bg-gray-100 focus:ring-2 focus:ring-green-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
