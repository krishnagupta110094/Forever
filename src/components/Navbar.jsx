import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const {setShowSearch , getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between  py-5 font-medium">
      <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className="w-36 cursor-pointer" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <Link to={'/login'}>
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md">
              <p className="cursor-pointer hover:text-black">My Profile </p>
              <p className="cursor-pointer hover:text-black">Orders </p>
              <p className="cursor-pointer hover:text-black">Logout </p>
            </div>
          </div>
        </div>
        <Link  to="/cart" className="relative w-5 min-w-5">
          <img src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/** Sidebar Menu for Small Screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 px-5 py-2 rounded-xl cursor-pointer 
             bg-white/10 backdrop-blur-md border border-white/20 shadow-sm 
             transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <img
              src={assets.dropdown_icon}
              alt="Back"
              className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1 opacity-80"
            />
            <p className="text-sm text-Black tracking-wide font-semibold">
              Back
            </p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b-2 transition-all duration-300 ${
                isActive
                  ? "text-white border bg-black font-semibold"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b-2 transition-all duration-300 ${
                isActive
                  ? "text-white border bg-black font-semibold"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`
            }
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b-2 transition-all duration-300 ${
                isActive
                  ? "text-white border bg-black font-semibold"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b-2 transition-all duration-300 ${
                isActive
                  ? "text-white border bg-black font-semibold"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`
            }
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
