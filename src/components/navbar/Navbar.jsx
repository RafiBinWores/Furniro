import {
  Cart,
  Cross,
  Heart,
  HomeAlt1,
  Person,
  Search,
  ThreeLineHorizontal,
} from "akar-icons";
import logo from "../../assets/images/logo.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-[60px] md:h-[80px] lg:h-[100px] grid place-items-center relative">
      <nav className="container px-3 mx-auto">
        <div className="flex items-center justify-between">
          <a href="" className="flex items-center gap-1">
            {/* Logo */}
            <img className="w-8 md:w-[50px]" src={logo} alt="Furniro Logo" />
            <span className="font-montserrat font-bold text-2xl md:text-[34px]">
              Furniro
            </span>
          </a>

          {/* Menu */}
          <ul className="lg:flex items-center gap-[75px] font-poppins font-medium hidden">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          {/* Nav buttons */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-[45px]">
            <a href="" className="hidden">
              <span className="material-symbols-outlined">person_alert</span>
            </a>
            <button
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
              }}
            >
              <Search />
            </button>
            <a href="">
              <Heart />
            </a>
            <a href="">
              <ShoppingCartOutlined className="text-2xl" />
            </a>
          </div>

          {/* Search Field */}
          {isSearchOpen && (
            <div className="absolute top-[60px] md:top-[80px] lg:top-[100px] left-1/2 transform -translate-x-1/2 bg-white border shadow-lg w-full flex justify-center p-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 lg:w-2/4"
                placeholder="Search for products..."
              />
            </div>
          )}

          {/* Bottom navigation for small and medium device */}
          <div className="lg:hidden">
            <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 shadow-[-1px_-1px_17px_-3px_rgba(0,_0,_0,_0.2)]">
              <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5"
                >
                  <HomeAlt1 />
                  <span className="text-xs">Home</span>
                </button>
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5"
                >
                  <Heart />
                  <span className="text-xs">Wishlist</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen((prev) => !prev);
                  }}
                  className="inline-flex flex-col items-center justify-center px-5"
                >
                  <Search />
                  <span className="text-xs">Search</span>
                </button>
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5"
                >
                  <Cart />
                  <span className="text-xs">Cart</span>
                </button>
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5"
                >
                  <Person />
                  <span className="text-xs">Account</span>
                </button>
              </div>
            </div>
          </div>

          {/* Hamburger icon */}
          <button
            className="pe-2 lg:hidden"
            onClick={() => {
                setNavToggle((prev) => !prev);
            }}
          >
            <ThreeLineHorizontal className="text-2xl" />
          </button>

          {/* Small and medium device nav sidebar */}
          <div className={`fixed bg-black/50 h-full w-screen backdrop-blur-sm top-0 right-0 transition-all z-50 ${
                navToggle ? "translate-x-0" : "-translate-x-full"
              }`}>
          

            <div className="absolute top-0 left-0 z-20 flex flex-col w-3/5 h-screen gap-8 p-8 text-black bg-white">
              <button 
              onClick={() => {
                setNavToggle((prev) => !prev);
            }}>
              <Cross className="mb-8" />
              </button>

              <a href="" className="font-bold">
                Home
              </a>
              <a href="" className="font-bold">
                Shop
              </a>
              <a href="" className="font-bold">
                Contact
              </a>
              <a href="" className="font-bold">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
