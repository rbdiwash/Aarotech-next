import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container text-center md:text-left">
        <div className="flex flex-wrap ">
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp "
            data-wow-delay="0.2s"
          >
            <div className="mx-3 mb-8">
              <div className="footer-logo mb-3">
                <img
                  src={"/assets/img/logo_bg.png"}
                  alt=""
                  className="h-20 mx-auto md:mx-0"
                />
              </div>
              {/* <p className="text-gray-300 text-justify md:px-4">
                AARO TECH has been established with an excellent track of record
                by providing industry-leading products to our valued customers
                around the world.
              </p> */}
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp "
            data-wow-delay="0.4s"
          >
            <div className="mx-3 mb-8">
              <h3 className="font-bold text-xl text-white mb-5 underline ">
                Company
              </h3>
              <ul>
                <li>
                  <a href="#" className="footer-links">
                    Press Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-links">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-links">
                    Strategy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="mx-3 mb-8">
              <h3 className="font-bold text-xl text-white mb-5 underline">
                About
              </h3>
              <ul>
                <li>
                  <a href="#" className="footer-links">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-links">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#products" className="footer-links">
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="mx-3 mb-8">
              <h3 className="font-bold text-xl text-white mb-5 underline">
                Find us on
              </h3>

              <ul className="social-icons flex justify-center md:justify-start">
                <li className="mx-2">
                  <a href="#" className="footer-icon hover:bg-[#ec1f24]">
                    <BsFacebook />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="mailto:sales@aarotech-qatar.com"
                    className="footer-icon hover:bg-[#ec1f24]"
                  >
                    <FiMail />
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="footer-icon hover:bg-[#ec1f24]">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="tel:0097455387973"
                    className="footer-icon hover:bg-[#ec1f24]"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      <section className="bg-gray-800 py-6 border-t-2 border-gray-700 border-dotted">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <p className="text-white">
                Designed and Developed by{" "}
                <a
                  className="ite primary duration-300 hover:underline"
                  href="http://divashranabhat.com.np/?i=1"
                  target="_blank"
                >
                  Divash Ranabhat
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Footer;
