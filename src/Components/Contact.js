import React from "react";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useEffect } from "react";
import Aos from "aos";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h2
            className="mb-12 text-4xl text-gray-700 font-bold tracking-wide wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Contact
          </h2>
        </div>

        <div
          className="flex flex-wrap contact-form-area wow fadeInUp"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="w-full md:w-1/2">
            <div className="contact">
              <h2 className="uppercase font-bold text-xl text-gray-700 mb-5 ml-3">
                Contact Form
              </h2>
              <form id="contactForm" action="assets/contact.php">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <div className="mx-3">
                      <input
                        type="text"
                        className="form-input rounded-full"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        data-error="Please enter your name"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <div className="mx-3">
                      <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        className="form-input rounded-full"
                        name="email"
                        required
                        data-error="Please enter your email"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-3">
                      <input
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        name="subject"
                        className="form-input rounded-full"
                        required
                        data-error="Please enter your subject"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-3">
                      <textarea
                        className="form-input rounded-lg"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        data-error="Write your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="submit-button mx-3">
                      <button className="btn" id="form-submit" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="ml-3 md:ml-12 wow fadeIn">
              <h2 className="uppercase font-bold text-xl text-gray-700 mb-5">
                Get In Touch
              </h2>
              <div className="text-gray-600">
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FaLocationArrow />
                  </div>
                  <p className="pl-3">Doha, State of Qatar</p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <p className="pl-3">
                    <a href="#" className="block">
                      sales@aarotech-qatar.com
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <p className="pl-3">
                    <a href="tel:553879763" className="block">
                      +97455387973
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
