import { useState } from 'react';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-bold">
              GameHub
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-gray-700 text-white h-10 px-5 pr-10 rounded-full text-md focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  // xml:space="preserve"
                >
                  <path
                    d="M23.707,22.293l-6.363-6.363C18.077,14.621,19,12.418,19,10c0-4.962-4.038-9-9-9S1,5.038,1,10s4.038,9,9,9
                  c2.418,0,4.621-0.923,5.93-2.344l6.363,6.363C22.512,22.902,22.756,23,23,23s0.488-0.098,0.707-0.293
                  C24.098,22.268,24.098,21.732,23.707,22.293z M3,10c0-3.859,3.141-7,7-7s7,3.141,7,7s-3.141,7-7,7S3,13.859,3,10z"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4 ml-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-yellow-500 text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Sign-up
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 md:px-3">
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-yellow-500 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign-up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
