import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>Doha, Qatar</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Sun-Thu: 8AM-6PM</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Follow us:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <BsFacebook className="text-sm" />
                </a>
                <a
                  href="mailto:sales@aarotech-qatar.com"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <FiMail className="text-sm" />
                </a>
                <a
                  href="tel:+97455387973"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  aria-label="Phone"
                >
                  <FaPhone className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <img
                src="/assets/WhiteLogo.jpeg"
                className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                alt="AARO TECH Logo"
              />
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold text-gray-900">
                  AARO TECH
                </div>
                <div className="text-xs text-blue-600 font-medium">
                  Trading & Contracting
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {options.map((item, index) => (
                <a
                  key={index}
                  href={check === "/" ? `#${item?.id}` : "/"}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 group"
                >
                  {item?.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:btn-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Get Quote</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    openMenu ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    openMenu ? "opacity-0" : "top-3"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    openMenu ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              openMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-gray-100">
              <div className="space-y-2">
                {options.map((item, index) => (
                  <a
                    key={index}
                    href={check === "/" ? `#${item?.id}` : "/"}
                    onClick={() => setOpenMenu(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
                  >
                    {item?.label}
                  </a>
                ))}
                <div className="px-4 pt-4 border-t border-gray-100 mt-4">
                  <a
                    href="#contact"
                    onClick={() => setOpenMenu(false)}
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
