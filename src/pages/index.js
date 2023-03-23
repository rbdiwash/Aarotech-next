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

      <section id="hero-area" className="bg-blue-100 ">
        <div className="">
          <Slider {...settings}>
            {sliderContent.map((item, index) => (
              <div className="" key={index}>
                <div
                  className="p-4 flex items-center justify-start"
                  style={{
                    backgroundImage: `url(${item.image.src})`,
                    width: "100%",
                    height: "550px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="md:container  flex items-start justify-start flex-col text-left">
                    <h3 className="md:text-5xl text-3xl primary ">
                      {item.heading}
                    </h3>
                    <h2 className="text-2xl my-4 font-semibold text-gray-600">
                      {item.content}
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4">
                      <a className="btn mr-4 sm:mb-0" href="#services">
                        Our Services
                      </a>

                      <a
                        className="btn-alt"
                        type="button"
                        href={"assets/files/profile.pdf"}
                        download={"Aarotech_Profile.pdf"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Our Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section id="services" className="bg-blue-100 py-24">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Our <span className="primary">Services</span>
            </h2>
          </div>

          <div className="flex flex-wrap">
            {servicesContent.map((item, index) => (
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4" key={index}>
                <div className="m-4 " data-aos="fade-up" data-aos-delay="200">
                  <div className="icon text-7xl rounded-lg shadow-lg p-4 min-h-[350px] bg-white">
                    <img
                      src={item.image.src}
                      alt="manpower image "
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div>
                    <h3 className="service-title">{item.heading}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="products" className="py-24 bg-white">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Our <span className="primary">Products</span>
            </h2>
          </div>
          <div className="flex flex-wrap">
            {productContent.map((item, index) => (
              <a
                // href={`/product/${item?.heading.replace(/\s/g, "")}`}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6"
                key={index}
                onClick={() => {
                  handleOpen();
                  setSelected(item);
                }}
              >
                <div className="m-4 " data-aos="fade-up" data-aos-delay="200">
                  <div className="flex flex-col items-start justify-between icon rounded-lg shadow-lg p-4 min-h-[250px] cursor-pointer transform transition duration-500 hover:scale-105">
                    <img
                      src={item.image.src}
                      alt="manpower image "
                      className="object-cover h-full w-full"
                    />
                    <p className="text-base  text-gray-500">{item.heading}</p>
                  </div>
                  <div></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Dialog
        open={open}
        handler={handleOpen}
        size={"lg"}
        className="w-full max-w-full lg:max-w-3/5  mx-2 md:mx-0"
      >
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            {selected?.heading}
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            X
          </IconButton>{" "}
        </DialogHeader>
        <DialogBody divider className="p-0">
          <section id="services" className="bg-blue-100 md:py-24 px-0 lg:px-12">
            <div className="container py-10">
              <div className="flex  items-center justify-between flex-wrap">
                <div className="w-full lg:w-1/2">
                  <div className="mb-5 lg:mb-0">
                    <h2
                      className="md:text-4xl text-2xl mb-2  wow fadeInDown primary"
                      data-wow-delay="0.3s"
                    >
                      {selected?.heading}
                    </h2>
                    {selected?.brand && (
                      <p className="text-gray-500 py-4 text-2xl">
                        Brand: {selected?.brand || "-"}
                      </p>
                    )}
                    <div className="flex flex-wrap">
                      <div className="w-full">
                        <div className="lg:mr-3 lg:pr-6 text-lg text-justify text-gray-600">
                          {selected?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div
                    className="mx-3  wow fadeInRight cursor-pointer hover:scale-105 transform transition duration-500"
                    data-wow-delay="0.3s"
                  >
                    <img
                      src={selected?.image?.src}
                      alt=""
                      className="rounded-lg shadow-lg max-h-[700px]"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </section>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 border rounded-lg"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div id="about" className="bg-blue-100 py-24">
        <About />
      </div>
      <section id="Subscribes" className="text-center py-20 bg-blue-100">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="flex justify-center mx-3">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <h4
                className="mb-3 section-heading wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Start For <span className="primary">Free</span>
              </h4>
              <p
                className="mb-4 text-gray-600 leading-loose text-base wow fadeInUp"
                data-wow-delay="0.6s"
              >
                Subscribe to our newsletter for our offers and new products.
                <br /> Get daily, weekly or monthly updates.
              </p>
              <form>
                <div className="wow fadeInDown" data-wow-delay="0.3s">
                  <input
                    type="Email"
                    className="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="border-0 bg-[#ec1f24] text-white rounded-full w-12 h-12 duration-300 hover:opacity-75"
                    type="submit"
                  >
                    <AiOutlineArrowRight className="h-full w-full" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 bg-white">
        <Contact />
      </section>
      <footer id="footer" className="bg-gray-800 pt-16">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
