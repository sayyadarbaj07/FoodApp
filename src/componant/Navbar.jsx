import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import logo from "../assets/logo3.png"; // Logo import

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-3 px-4 lg:px-6">
      {/* Logo + App Name (Upar Left on Mobile, Left on Desktop) */}
      <div className="w-full lg:w-auto order-1 lg:order-1 flex justify-start items-center gap-4">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 lg:w-14 lg:h-14 object-contain rounded-full hover:scale-110 transition-transform duration-300"
        />
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-500">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-3xl font-bold text-green-600">Foods App</h1>
        </div>
      </div>

      {/* Search Bar (Niche Right on Mobile, Right on Desktop) */}
      <div className="w-full lg:w-[30vw] order-2 lg:order-2 flex justify-end mt-3 lg:mt-0">
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          name="search"
          placeholder="🔍 Search delicious food..."
          autoComplete="off"
          className="p-3 border border-gray-300 text-sm rounded-full outline-none w-full max-w-[300px] bg-gray-100 focus:ring-2 focus:ring-green-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
