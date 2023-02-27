import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useRouter } from "next/router";
const Navbar = () => {
  const options = [
    { label: "Home", id: "" },
    { label: "Services", id: "services" },
    { label: "Products", id: "products" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];
  const route = useRouter();
  const check = route.pathname;

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="text-white border-gray-200 bg-gray-800">
        <div className=" flex flex-wrap justify-between items-center mx-auto container px-4 md:px-6 py-2.5">
          <span className="self-center md:text-lg font-semibold text-white">
            Welcome to{" "}
            <span className="primary uppercase">
              AARO TECH Trading & Contracting CO
            </span>
          </span>

          <div className="flex items-center">
            <a
              href="tel:0097455387973"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              <BsFacebook />
            </a>
            <a
              href="mailto:sales@aarotech-qatar.com"
              className="mr-6 text-md font-medium text-gray-500 dark:text-white hover:underline"
            >
              <FiMail />
            </a>
            <a
              href="tel:0097455387973"
              className=" text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              <FaPhone />
            </a>
          </div>
        </div>
      </nav>
      <nav className="p-3 bg-white  border-gray-200  shadow top-0 sticky z-50">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img
              src={"/assets/WhiteLogo.jpeg"}
              className="mr-3 h-6 sm:h-16"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Aarotech
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 "
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              "w-full md:block md:w-auto " + (openMenu ? "" : "hidden")
            }
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 bg-white shadow-lg md:shadow-none text-gray-600 border text-center md:text-gray-400  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              {options.map((item, index) => (
                <li key={index} onClick={() => setOpenMenu(false)}>
                  <a
                    href={check === "/" ? `#${item?.id}` : "/"}
                    className={
                      "hover:text-[#ec1f24] block uppercase text-lg  py-2 pr-4 pl-3   rounded md:bg-transparent md:p-0 border-b border-gray-600 md:border-0"
                    }
                  >
                    {item?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
