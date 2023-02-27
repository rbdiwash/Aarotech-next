import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { productContent } from "@/constants/const";
import Aos from "aos";
import { NextSeo, ProductJsonLd } from "next-seo";
import Head from "next/head";
import { useEffect } from "react";

export async function getStaticProps(context) {
  return {
    props: {
      data: productContent.find(
        (item) =>
          item?.heading.replace(/\s/g, "") === context?.params?.productName
      ),
    }, // will be passed to the page component as props
  };
}

export const getStaticPaths = () => {
  const paths = productContent.map((item) => {
    return {
      params: {
        productName: item?.heading.replace(/\s/g, ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const ProductDetails = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const image = data?.image;
  return (
    <div>
      <Head>
        <title>{data?.heading}</title>
      </Head>
      <ProductJsonLd
        productName={data?.heading}
        images={[image.src]}
        brand={data?.brand}
        description={data?.description}
      />
      <NextSeo
        openGraph={{
          title: data?.heading,
          description: data?.description,
          type: "product",
          images: [
            {
              url: `https://www.aarotech-qatar.com/${image.src}`,
              width: 850,
              height: 650,
              alt: data?.heading,
            },
          ],
        }}
      />
      <Navbar />
      <section id="services" className="bg-blue-100 md:py-24">
        <div className="container py-10">
          <div className="flex  items-center justify-between flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="mb-5 lg:mb-0">
                <h2
                  className="md:text-4xl text-2xl  wow fadeInDown primary"
                  data-wow-delay="0.3s"
                >
                  {data?.heading}
                </h2>
                {data?.brand && (
                  <p className="text-gray-500 py-4 text-2xl">
                    Brand: {data?.brand || "-"}
                  </p>
                )}
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="mr-3 pr-6 text-lg text-justify text-gray-600">
                      {data?.description}
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
                  src={data?.image?.src}
                  alt=""
                  className="rounded-lg shadow-lg max-h-[500px] lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="bg-gray-800 pt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
