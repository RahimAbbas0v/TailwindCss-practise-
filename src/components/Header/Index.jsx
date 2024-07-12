import React, { useState } from "react";
const Index = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <header className="h-auto m-0 box-border py-6 md:py-8 bg-black text-white font-roboto ">
        <div className="container flex justify-evenly sm:justify-between items-center px-3 space-x-4 sm:space-x-12 lg:space-x-16">
          <div className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 to-rose-600 bg-clip-text text-transparent">
            GEGA
          </div>
          <nav className="flex  justify-between items-center flex-row-reverse md:flex-row  md:flex-1 ">
            <button
              onClick={toggleNavbar}
              className="flex md:hidden mx-4 sm:mx-5"
            >
              {isClick ? (
                <i className="fa-solid fa-xmark text-white text-xl"></i>
              ) : (
                <i class="fa-solid fa-bars text-white "></i>
              )}
            </button>
            <div className="menu">
              <ul className="hidden md:flex list-none space-x-6 lg:space-x-8">
                <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                  MOVIES
                </li>
                <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                  CELEBRITIES
                </li>
                <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                  BLOG
                </li>
                <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                  NEWS
                </li>
                <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                  ABOUT
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center  space-x-6">
              <i className="fa-solid fa-magnifying-glass border-r px-5 py-1 border-red-700"></i>
              <div className="flex justify-between items-center space-x-4 sm:space-x-8">
                <p className="cursor-pointer">LOGIN</p>
                <p className="p-2 bg-red-500 cursor-pointer whitespace-nowrap">
                  SIGN UP
                </p>
              </div>
            </div>
          </nav>
        </div>
        {isClick && (
          <div className="menu transition-all duration-1000">
            <ul className="list-none text-center space-y-2 py-3">
              <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                MOVIES
              </li>
              <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                CELEBRITIES
              </li>
              <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                BLOG
              </li>
              <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                NEWS
              </li>
              <li className="hover:text-yellow-500 transition ease-in duration-200 cursor-pointer">
                ABOUT
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Index;
