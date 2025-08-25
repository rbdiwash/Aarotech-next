import React, { useState } from "react";
import about from "../../public/assets/img/about.jpg";
import { useEffect } from "react";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [showISO, setShowISO] = useState(false);
  const yearsCount = new Date().getFullYear() - 2009;

  return (
    <div className="py-20 lg:py-24 bg-white">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              About Our Company
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Building Excellence for
            <span className="primary"> Over {yearsCount} Years</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Your trusted partner in Qatar for quality trading, building
            materials, and professional services
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div
            className="space-y-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Mission Statement */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Quality Service in Qatar with Pride
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We provide exceptional quality services and fulfill client
                    requirements with competitive pricing and unwavering
                    commitment to excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Story */}
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                <span className="font-semibold primary">
                  AARO TECH TRADING & CONT W.L.L.
                </span>{" "}
                was established by an experienced team with over{" "}
                <span className="font-semibold">{yearsCount} years</span> of
                expertise in Qatar across various fields including trading,
                building materials, and MEP maintenance/Civil Fit-outs works.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Throughout these {yearsCount} years, we have gained extensive
                experience navigating market fluctuations and embracing new
                technologies and methodologies across all our service areas. Our
                commitment to quality and client satisfaction drives everything
                we do.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  {yearsCount}+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Quality Guaranteed
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Professional Team
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Competitive Pricing
                </span>
              </div>
            </div>

            {/* ISO Certificate Button */}
            <div className="mt-8">
              <button
                onClick={() => setShowISO(true)}
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:btn-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                View ISO Certificate
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={about.src}
                  alt="AARO TECH company building and operations"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {yearsCount}+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work with Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference that {yearsCount} years of expertise can
              make for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:btn-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
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
              <a href="#services" className="i btn-alt">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ISO Certificate Modal */}
      {showISO && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ISO Certificate
                </h3>
              </div>
              <button
                onClick={() => setShowISO(false)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
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
              </button>
            </div>

            {/* PDF Viewer */}
            <div className=" h-[calc(90vh-120px)]">
              <iframe
                src="/assets/files/ISO.pdf"
                className="w-full h-full rounded-lg border border-gray-200"
                title="ISO Certificate"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
