import React from "react";
import about from "../../public/assets/img/about.jpg";
import { useEffect } from "react";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const yearsCount = new Date().getFullYear() - 2009;

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h2
            className="mb-12 section-heading wow fadeInDown"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            About <span className="primary">AARO TECH</span>
          </h2>
        </div>
        <div className="flex  items-center flex-wrap">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="mb-5 lg:mb-0">
              <h2
                className="mb-12 section-heading wow fadeInDown"
                data-wow-delay="0.3s"
              >
                We Provide Quality Service <br />
                <span className="primary"> In Qatar</span> With Proud!! ssss
              </h2>

              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="mr-3 pr-6 text-lg text-justify text-gray-600">
                    AARO TECH TRADING & CONT W.L.L. has been established by the
                    good team who has more then {yearsCount} years experience in
                    qatar in various fields of trading, building materials & MEP
                    maintenance / Civil Fit-outs works. <br /> <br />
                    During these {yearsCount} years, we earned better experience
                    of up & down market level & different kind of new ethics &
                    latest technologies in all the above fields. The aim of AARO
                    TECH TRADING & CONT. W.L.L is to give better quality
                    services and fulfill client requirements with reasonable
                    profit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div
              className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight cursor-pointer hover:scale-105 transform transition duration-500"
              data-wow-delay="0.3s"
            >
              <img src={about.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
