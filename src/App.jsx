import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Logo from "./assets/logo.png";
import { ImCross } from "react-icons/im";
import { useState } from "react";

import FlipCard from "./components/FlipCard";

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [crossBtn, setCrossBtn] = useState(false);

  function showMenu() {
    setShowMobileNav(true);
  }

  function hideMenu() {
    setShowMobileNav(false);
  }

  return (
    <header className="border-b border-gray-400 ">
      <div className="container--fluid">
        <div className="flex justify-between items-center py-4 md:hidden ">
          <div className="border border-[--var(btn-color)]-500 rounded-lg md:hidden hover:border-[var(--secondary-color)]  sm:hidden">
            <GiHamburgerMenu
              onClick={showMenu}
              className={`h-[2rem] w-[2rem] p-2 cursor-pointer ${
                showMobileNav ? "hidden" : "block"
              }`}
            />
            <ImCross
              onClick={hideMenu}
              className={`h-[2rem] w-[2rem] p-2 cursor-pointer ${
                showMobileNav ? "block" : "hidden"
              }   `}
            />
          </div>

          <div className="flex gap-2 items-center">
            <div className="h-[2.5rem] w-[2.5rem] flex items-center">
              <img src={Logo} alt="logo" />
            </div>
            <h1>Sumu Clothing</h1>
          </div>

          <div className="border border-[--var(btn-color)]-500 rounded-lg hover:border-[var(--secondary-color)] ">
            <FaCartArrowDown className="h-[2rem] w-[2rem] p-2 cursor-pointer z-50" />
          </div>
        </div>

        {/* navlinks */}
        <nav
          className={`mt-1 ${
            showMobileNav ? "block" : "hidden"
          }   md:hidden  bg-[var(--specific-color)]`}
        >
          <div className="text-[0.8rem] ">
            <div className="relative flex items-center ">
              <input
                type="text"
                className="p-1 border rounded-lg w-full "
                placeholder="search for products"
              />
              <span className="absolute right-2 text-[--var(btn-color)]-400">
                <button>
                  <FaSearch />
                </button>
              </span>
            </div>

            <ul className="flex flex-col pt-[0.25rem] gap-1 cursor-pointer pl-[0.4rem] ">
              <li>All</li>
              <li>Shirt</li>
              <li>Stikers</li>
              <li>
                <button
                  onClick={() => {
                    setCrossBtn(true);
                  }}
                  className="border border-[--var(btn-color)]-600 rounded-lg  p-1 text-[0.6rem] font-extrabold"
                >
                  Hello, Signin
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* for tablates */}

        <div className="md:flex justify-between  items-center hidden  py-4">
          <nav className="flex gap-2 items-center lg:w-[40%] xl:w-[33.33%]  ">
            <div className="flex gap-2 items-center">
              <div className="h-[2.5rem] w-[2.5rem] flex lg:w[3rem] lg:w-[3rem] items-center">
                <img src={Logo} alt="logo" />
              </div>
              <h1 className="hidden lg:block font-bold">Sumu Clothing</h1>
            </div>
            <ul className="flex pt-[0.25rem] gap-4 cursor-pointer text-[0.875rem] pl-[0.4rem]   ">
              <li>
                <a>All</a>
              </li>
              <li>
                <a>Shirt</a>
              </li>
              <li>
                <a>Stikers</a>
              </li>
            </ul>
          </nav>
          <div className="relative flex lg:w-[30%]  xl:w-[33.33%]">
            <input
              type="text"
              className="p-1 border rounded-lg w-full placeholder:text-[0.875rem] "
              placeholder="Search for products"
            />
            <span className="absolute right-2 top-[50%] flex items-center translate-y-[-50%] text-[--var(btn-color)]-400">
              <button>
                <FaSearch />
              </button>
            </span>
          </div>
          <div className=" xl:w-[33.33%] flex justify-end gap-4 lg:w-[30%]">
            <FaCartArrowDown className="h-[2rem] w-[2rem] p-2 cursor-pointer border border-[--var(btn-color)]-500  rounded-lg hover:border-[var(--secondary-color)]" />
            <button
              onClick={() => {
                setCrossBtn(true);
              }}
              className="border border-[--var(btn-color)]-600 rounded-lg hidden md:block px-2.5 py-1 py text-[0.6rem] font-extrabold"
            >
              Hello, Signin
            </button>
          </div>
        </div>
      </div>
      <FlipCard crossBtn={crossBtn} setCrossBtn={setCrossBtn} />
    </header>
  );
}

export default App;
