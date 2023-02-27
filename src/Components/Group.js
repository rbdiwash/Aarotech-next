import React from "react";
import { FaPhone, FaLocationArrow, FaShopify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";
import group from "../../public/assets/img/group.jpeg";

const Group = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {" "}
      <div className="container">
        <div className="text-center">
          <h2
            className="mb-12 section-heading "
            data-wow-delay="0.3s"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our <span className="primary">Group</span>
          </h2>
        </div>
        <div className="flex  items-center justify-center flex-wrap">
          <div
            className="w-full lg:w-1/2 p-8 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={group.src} alt="" className="w-full h-[80%]" />
          </div>
          <div
            className="w-full lg:w-1/2 shadow-lg rounded-xl p-8 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="mb-5 lg:mb-0">
              <h2
                className="mb-12 section-heading wow fadeInDown text-center"
                data-wow-delay="0.3s"
              >
                We have expanded our business
                <span className="primary"> in Nepal</span> also!!
              </h2>
              <div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FaShopify />
                  </div>
                  <p className="pl-3 md:text-xl md:font-semibold">
                    Ultimate Trading, <br /> Sanitary wares & Bathroom
                    Accessories
                  </p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FaLocationArrow />
                  </div>
                  <p className="pl-3">Pokhara, Nepal</p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <MdEmail />
                  </div>
                  <p className="pl-3">
                    <a href="#" className="block">
                      ultimatetradingnp@gmail.com.
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <p className="pl-3">
                    <a href="tel:553879763" className="block">
                      061 565777, +977 9800607695
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

export default Group;
