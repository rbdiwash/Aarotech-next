import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import Contact from "../Components/Contact";
import Slider from "react-slick";
import About from "@/Components/About";
import {
  productContent,
  servicesContent,
  sliderContent,
} from "@/constants/const";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  var settings = {
    fade: true,
    dots: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Head>
        <title>AARO TECH TRADING & CONT W.L.L.</title>
        <meta name="description" content="AARO TECH TRADING & CONT W.L.L." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/assets/WhiteLogo.jpeg" />
        <link rel="icon" href="/favicon.ico" />{" "}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <section id="hero-area" className="relative">
        <div className="relative">
          <Slider {...settings}>
            {sliderContent.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className="relative h-[600px] lg:h-[700px] flex items-center"
                  style={{
                    backgroundImage: `url(${item.image.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

                  {/* Content */}
                  <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-3xl">
                      {/* Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-primary backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          ></path>
                        </svg>
                        AARO TECH - Since 2009
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {item.heading}
                        {/* <span className="block primary mt-2">Excellence</span> */}
                      </h1>

                      {/* Subtitle */}
                      {item.content && (
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-light">
                          {item.content}
                        </p>
                      )}

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="#services"
                          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:btn:hover -700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn"
                        >
                          <span>Explore Services</span>
                          <svg
                            className="w-5 h-5 ml-2"
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

                        <a
                          href="assets/files/profile.pdf"
                          download="Aarotech_Profile.pdf"
                          className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                          </svg>
                          <span>Download Profile</span>
                        </a>
                      </div>

                      {/* Trust Indicators */}
                      <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/20">
                        <div className="flex items-center space-x-2 text-white/90">
                          <svg
                            className="w-5 h-5 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                          </svg>
                          <span className="text-sm font-medium">
                            15+ Years Experience
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/90">
                          <svg
                            className="w-5 h-5 text-blue-400"
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
                          <span className="text-sm font-medium">
                            Based in Qatar
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/90">
                          <svg
                            className="w-5 h-5 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                          <span className="text-sm font-medium">
                            Quality Guaranteed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scroll Indicator */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Slider Navigation */}
          <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
            {sliderContent.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors duration-300 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 primary text-sm font-medium rounded-full border border-blue-100">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
                Our Services
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Professional Services for
              <span className="primary"> Your Success</span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              We deliver comprehensive solutions across multiple domains with
              expertise you can trust
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesContent.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                {/* Service Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-lg">
                    <img
                      src={item.image.src}
                      alt={`${item.heading} service`}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Service Number Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.heading}
                  </h3>

                  {/* Service Features */}
                  <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm">Explore Service</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className="text-center mt-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let us help you achieve your goals with our professional
                services and expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:btn-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us Today
                  <svg
                    className="w-5 h-5 ml-2"
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
                <a href="#about" className=" btn-alt">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 primary text-sm font-medium rounded-full border border-blue-100">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6 0V1"
                  ></path>
                </svg>
                Our Products
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Quality Products for
              <span className="primary"> Every Need</span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Discover our comprehensive range of high-quality products designed
              to meet your specific requirements
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {productContent.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-300 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer "
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-duration="600"
                onClick={() => {
                  handleOpen();
                  setSelected(item);
                }}
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={item.image.src}
                    alt={`${item.heading} product`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>

                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-blue-600 font-medium text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0">
                      View Details
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {item.heading}
                  </h3>

                  {/* Brand if available */}
                  {item.brand && (
                    <p className="text-xs text-gray-500 mt-1 truncate">
                      {item.brand}
                    </p>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className="text-center mt-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Need Something Specific?
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Can't find what you're looking for? Our team can help you
                  source the right products for your project requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:btn-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request Quote
                    <svg
                      className="w-5 h-5 ml-2"
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
                  </a>
                  <button
                    className=" btn-alt"
                    onClick={() => {
                      // Scroll to top of products section to show all products
                      document
                        .getElementById("products")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Browse All Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog
        open={open}
        handler={handleOpen}
        size={"xl"}
        className="max-w-6xl mx-4 md:mx-auto bg-white rounded-2xl shadow-2xl"
      >
        {/* Modern Dialog Header */}
        <DialogHeader className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6 0V1"
                ></path>
              </svg>
            </div>
            <div>
              <Typography variant="h4" className="text-gray-900 font-bold">
                {selected?.heading}
              </Typography>
              {selected?.brand && (
                <p className="text-sm text-blue-600 font-medium mt-1">
                  Brand: {selected?.brand}
                </p>
              )}
            </div>
          </div>
          <IconButton
            color="gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
            className="rounded-full hover:bg-gray-100 p-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </IconButton>
        </DialogHeader>

        {/* Modern Dialog Body */}
        <DialogBody className="p-0 max-h-[70vh] overflow-y-auto">
          <div className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
              {/* Product Image Section */}
              <div className="space-y-4">
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={selected?.image?.src}
                    alt={selected?.heading}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Image overlay with zoom indicator */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 font-medium text-sm">
                      Click to zoom
                    </div>
                  </div>
                </div>

                {/* Product Features/Specs */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Product Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">High Quality</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">Durable</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">Professional Grade</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">Reliable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Product Details
                  </h3>

                  {/* Brand Information */}
                  {selected?.brand && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        <span className="text-blue-900 font-semibold">
                          Trusted Brand: {selected?.brand}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Product Description */}
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {selected?.description ||
                        "Detailed product information will be provided upon request. Contact our team for comprehensive specifications and availability."}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Get This Product
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      onClick={handleOpen}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      Request Quote
                    </a>
                    <button
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      onClick={() => {
                        // You can add functionality to save to wishlist or similar
                        alert("Product added to inquiry list!");
                      }}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      Add to Inquiry
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Need More Information?
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our product specialists are ready to help you with detailed
                    specifications, pricing, and availability.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2 text-blue-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <span>Call us</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>Email us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>

        {/* Modern Dialog Footer */}
        <DialogFooter className="flex items-center justify-between p-6 border-t border-gray-100 bg-gray-50">
          <div className="text-sm text-gray-500">
            Product information subject to availability
          </div>
          <Button
            variant="outlined"
            color="gray"
            onClick={handleOpen}
            className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
      <div id="about" className="">
        <About />
      </div>
      <section id="newsletter" className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 primary text-sm font-medium rounded-full border border-blue-100">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Newsletter
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Stay Updated with
              <span className="primary"> Latest News</span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Subscribe to receive updates about our products, services, and
              industry insights
            </p>
          </div>

          <div
            className="max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:btn-hover transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 btn"
                >
                  <span>Subscribe</span>
                  <svg
                    className="w-4 h-4"
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
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-4 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 bg-white">
        <Contact />
      </section>
      <footer id="footer" className="">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
