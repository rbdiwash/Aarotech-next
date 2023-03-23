"use strict";
(() => {
var exports = {};
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 5420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _productName_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/Components/Footer.js
var Footer = __webpack_require__(841);
// EXTERNAL MODULE: ./src/Components/Navbar.js
var Navbar = __webpack_require__(9157);
// EXTERNAL MODULE: ./src/constants/const.js + 32 modules
var constants_const = __webpack_require__(409);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(9783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/product/[productName].js








async function getStaticProps(context) {
    return {
        props: {
            data: constants_const/* productContent.find */.BE.find((item)=>item?.heading.replace(/\s/g, "") === context?.params?.productName)
        }
    };
}
const getStaticPaths = ()=>{
    const paths = constants_const/* productContent.map */.BE.map((item)=>{
        return {
            params: {
                productName: item?.heading.replace(/\s/g, "")
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
const ProductDetails = ({ data  })=>{
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 2000
        });
    }, []);
    const image = data?.image;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: data?.heading
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.ProductJsonLd, {
                productName: data?.heading,
                images: [
                    image.src
                ],
                brand: data?.brand,
                description: data?.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
                openGraph: {
                    title: data?.heading,
                    description: data?.description,
                    type: "product",
                    images: [
                        {
                            url: `https://www.aarotech-qatar.com${image.src}`,
                            width: 850,
                            height: 650,
                            alt: data?.heading
                        }
                    ]
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "services",
                className: "bg-blue-100 md:py-24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container py-10",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex  items-center justify-between flex-wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-1/2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-5 lg:mb-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "md:text-4xl text-2xl  wow fadeInDown primary",
                                            "data-wow-delay": "0.3s",
                                            children: data?.heading
                                        }),
                                        data?.brand && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-gray-500 py-4 text-2xl",
                                            children: [
                                                "Brand: ",
                                                data?.brand || "-"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-wrap",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-full",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mr-3 pr-6 text-lg text-justify text-gray-600",
                                                    children: data?.description
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mx-3  wow fadeInRight cursor-pointer hover:scale-105 transform transition duration-500",
                                    "data-wow-delay": "0.3s",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: data?.image?.src,
                                        alt: "",
                                        className: "rounded-lg shadow-lg max-h-[500px] lg:ml-auto"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                id: "footer",
                className: "bg-gray-800 pt-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
            })
        ]
    });
};
/* harmony default export */ const _productName_ = (ProductDetails);


/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [775], () => (__webpack_exec__(5420)));
module.exports = __webpack_exports__;

})();