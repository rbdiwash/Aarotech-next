import React from "react";
import { BsFacebook } from "react-icons/bs";

import { FaInstagram, FaTwitter } from "react-icons/fa";
import image1 from "../../public/assets/img/team/Bharat.png";
import image2 from "../../public/assets/img/team/bharat2png.png";
import image3 from "../../public/assets/img/team/img3.jpg";
import { useEffect } from "react";
import Aos from "aos";

const team = [
  { name: "Bharat Ranabhat", role: "Managing Director", image: image1.src },
  { name: "Bharat Ranabhat", role: "Managing Director", image: image2.src },
  { name: "Ashok Ranabhat", role: "Managing Director", image: image1.src },
];
const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {" "}
      <div className="container">
        <div className="text-center">
          <h2
            className="mb-12 section-heading wow fadeInDown"
            data-wow-delay="0.3s"
          >
            Our <span className="primary"> Team </span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {team?.map((arg) => (
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img className="img-fluid" src={arg.image} alt="" />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-indigo-500">
                          <BsFacebook />
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-blue-400">
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-red-500">
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">{arg?.name}</h3>
                  <p>{arg?.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
