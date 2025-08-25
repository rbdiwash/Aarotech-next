import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src={"/assets/img/logo_bg.png"}
                  alt="AARO TECH Logo"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner in Qatar for quality trading, building
                materials, and professional services with over 15 years of
                excellence.
              </p>

              {/* Quick Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Doha, State of Qatar</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaPhone className="text-blue-400 flex-shrink-0" />
                  <a
                    href="tel:+97455387973"
                    className="text-sm hover:text-blue-400 transition-colors duration-300"
                  >
                    +974 5538 7973
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span>Our Services</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:primary transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300 text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span>Manpower Supply</span>
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span>Motor Rewinding & Repair</span>
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span>Equipment Rental</span>
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span>MEP Maintenance</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></div>
              </h3>

              {/* Contact CTA */}
              <div className="bg-blue-600/10 rounded-xl p-6 border border-blue-600/20">
                <p className="text-gray-300 text-sm mb-4">
                  Ready to start your project? Contact us today for a
                  consultation.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:btn-hover transition-colors duration-300"
                >
                  Contact Us
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

              {/* Social Media */}
              <div>
                <p className="text-gray-300 text-sm mb-4">
                  Follow us on social media
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                    aria-label="Facebook"
                  >
                    <BsFacebook className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="mailto:sales@aarotech-qatar.com"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                    aria-label="Email"
                  >
                    <FiMail className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://wa.me/97455387973"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300 group"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-950 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} AARO TECH TRADING & CONT W.L.L. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">
                Designed and Developed by{" "}
                <a
                  href="http://divashranabhat.com.np/?i=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  Divash Ranabhat
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
