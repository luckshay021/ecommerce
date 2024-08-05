import backgroundImage from "../assets/backgroundjpg.jpg"; // Adjust the path to your image
// import backgroundImage from "../assets/side-dots.jpg";
import { LuShoppingCart } from "react-icons/lu";
import { BsArrowReturnLeft } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuBadgeCheck } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function App() {
  const Productdata = [
    {
      id: "0",
      url: "https://wingfi.vercel.app/_next/image?url=%2Fimages%2Ffeedback%2F0.png&w=96&q=75",
      name: "Vijay Kumar",
      title: "Entrepreneur",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "1",
      url: "https://wingfi.vercel.app/_next/image?url=%2Fimages%2Ffeedback%2F0.png&w=96&q=75",
      name: "Vijay Kumar",
      title: "Entrepreneur",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "2",
      url: "https://wingfi.vercel.app/_next/image?url=%2Fimages%2Ffeedback%2F0.png&w=96&q=75",
      name: "Vijay Kumar",
      title: "Entrepreneur",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div>
      <div
        className="flex content-center "
        style={{
          backgroundColor: "#1a5166",
          backgroundImage: `url(${backgroundImage})`,
          height: 600,
          backgroundBlendMode: "multiply",
          // display: "flex",
          // alignContent: "center",
        }}
      >
        <div className="flex items-center gap-24 mx-auto mx-w-7xl">
          <img className="h-44" src={"side-dots.webp"} />

          <div className="items-center w-96">
            <p className="tracking-widest text-7xl text-white font-light text-justify mb-6">
              THE NEW STANDARD
            </p>
            <div className="flex space-x-4 tracking-widest text-4xl font-bold mb-6">
              <p className="first-letter:text-red-500 text-white">Crafted</p>
              <p className="first-letter:text-red-500 text-white">Power</p>
              <p className="first-letter:text-red-500 text-white">Banks</p>
            </div>
            <div className="flex tracking-widest text-white text-2xl mb-8">
              <div className="flex mx-auto gap-2">
                <span>STARTING</span>
                <span>FROM</span>
                <span className="font-medium text-3xl">₹ 749/-</span>
              </div>
            </div>
            <button className="flex bg-red-500 hover:bg-blue-500 text-white px-14 py-3 mx-auto">
              BUY NOW
            </button>
          </div>
          <img
            style={{
              height: "500px",
            }}
            src={"hero-img.webp"}
          />
          <img className="h-44" src={"side-dots.webp"} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f6f9fc",
        }}
      >
        <div className="gap-2 flex flex-col max-w-7xl mx-auto pt-10 pb-10">
          <div className="flex items-center gap-6 bg-white p-5 py-8">
            <LuShoppingCart size={50} color="red" />
            <div>
              <p className="font-bold">Free Shipping</p>
              <p>When ordering over ₹1000/-</p>
            </div>
          </div>
          <div className="flex items-center gap-6 bg-white p-5 py-8">
            <BsArrowReturnLeft size={50} color="red" />
            <div>
              <p className="font-bold">Free Return</p>
              <p>Get Return within 30 days</p>
            </div>
          </div>
          <div className="flex items-center gap-6 bg-white p-5 py-8">
            <RiSecurePaymentLine size={50} color="red" />
            <div>
              <p className="font-bold">Secure Payment</p>
              <p>100% Secure Online Payment</p>
            </div>
          </div>
          <div className="flex items-center gap-6 bg-white p-5 py-8">
            <LuBadgeCheck size={50} color="red" />
            <div>
              <p className="font-bold">Best Quality</p>
              <p>Original Product Guarenteed</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col max-w-7xl mx-auto pb-10">
          <p className="text-red-500 ">This Month</p>
          <p className="font-semibold text-3xl">Best Sellers</p>
          <div
            className="flex items-center gap-2 max-w-7xl mt-4 "

            //   boxShadow: "2px 2px 2px lightblue",
          >
            <div className="flex flex-col bg-white content-center relative gap-2 h-40 border shadow-blue-600 px-8 py-4 ">
              <p>wingfi 20000 mah 22.5w compact power bank energyhub</p>
              <div className="flex">
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
              </div>
              <p className="text-gray-500 font-bold">₹4499/-</p>
              <p className="text-red-500 font-bold">₹1399/-</p>

              <img
                className="flex absolute h-60 w-32 top-12 right-8"
                src={"pro_1152_0.webp"}
              />
            </div>
            <div className="flex flex-col bg-white content-center relative gap-2 h-40 border shadow-blue-600 px-8 py-4 ">
              <p>wingfi 20000 mah 22.5w compact power bank energyhub</p>
              <div className="flex">
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
              </div>
              <p className="text-gray-500 font-bold">₹4499/-</p>
              <p className="text-red-500 font-bold">₹1399/-</p>
              <img
                className="flex absolute h-60 w-32 top-12 right-8"
                src={"pro_1153_0.webp"}
              />
            </div>
            <div className="flex flex-col bg-white content-center relative gap-2 h-40 border shadow-blue-600 px-8 py-4 ">
              <p>wingfi 20000 mah 22.5w compact power bank energyhub</p>
              <div
                style={{
                  display: "flex",
                }}
              >
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
              </div>
              <p className="text-gray-500 font-bold">₹4499/-</p>
              <p className="text-red-500 font-bold">₹1399/-</p>
              <img
                className="flex absolute h-60 w-32 top-12 right-8"
                src={"pro_1151_0.webp"}
              />
            </div>
          </div>
        </div>

        <div className="justify-between mt-24 p-10 ">
          <div className=" flex flex-col max-w-7xl content-center mx-auto">
            <p className="text-xl font-semibold mb-4  max-w-75 text-start">
              Recommended by Us
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white border shadow p-2 sm:p-3 sm:gap-4 overflow-hidden rounded-sm w-20%">
                <img className="h-44 w-44" src={"pro_1148_1.webp"} />
                <div className="h-full">
                  <p className="w-96 mb-4">
                    wingfi 10000 mah 18w compact power bank gamechanger
                  </p>
                  <div className="flex mb-3">
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                  </div>
                  <div className="flex mb-3">
                    <p className="text-gray-500 font-bold">₹2999-/</p>
                    <p className="text-red-500 font-bold">₹749-/</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-red-500 hover:bg-blue-500 w-44 text-white h-7">
                      View
                    </button>
                    <button className="bg-white hover:bg-blue-500 w-44 h-7 text-red-500 border-red-500 border">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-white border shadow p-2 sm:p-3 sm:gap-4 overflow-hidden rounded-sm">
                <img className="h-44 w-44" src={"pro_1154_1.webp"} />
                <div className="h-full">
                  <p className="mb-3">
                    wingfi 10000 mah 25w power bank 10000barrel{" "}
                  </p>
                  <div className="w-96 mb-4 flex">
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                  </div>
                  <div className="flex mb-3">
                    <p className="text-gray-500 font-bold">₹3499-/</p>
                    <p className="text-red-500 font-bold">₹1199-/</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-red-500 hover:bg-blue-500 w-44 text-white h-7">
                      View
                    </button>
                    <button className="bg-white hover:bg-blue-500 w-44 h-7 text-red-500 border-red-500 border">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-white border shadow p-2 sm:p-3 sm:gap-4 overflow-hidden rounded-sm w-20% ">
                <img className="h-44 w-44" src={"pro_1149_1.webp"} />
                <div className="h-full">
                  <p className="mb-3">
                    wingfi 20000 mah 18w power bank freewire
                  </p>
                  <div className="w-96 mb-4 flex">
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                  </div>
                  <div className="flex mb-3">
                    <p className="text-gray-500 font-bold">₹4499-/</p>
                    <p className="text-red-500 font-bold">₹1399-/</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-red-500 hover:bg-blue-500 w-44 text-white h-7">
                      View
                    </button>
                    <button className="bg-white hover:bg-blue-500 w-44 h-7 text-red-500 border-red-500 border">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-white border shadow p-2 sm:p-3 sm:gap-4 overflow-hidden rounded-sm w-20%">
                <img className="h-44 w-44" src={"pro_1150_1.webp"} />
                <div className="h-full">
                  <p className="mb-3">wingfi 20000 mah 20w power bank messi</p>
                  <div className="w-96 mb-4 flex">
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                    <FaStar color="red" />
                  </div>
                  <div className="flex mb-3">
                    <p className="text-gray-500 font-bold">₹4499-/</p>
                    <p className="text-red-500 font-bold">₹1399-/</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-red-500 hover:bg-blue-500 w-44 text-white h-7">
                      View
                    </button>
                    <button className="bg-white hover:bg-blue-500 w-44 h-7 text-red-500 border-red-500 border">
                      wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-75 mb-16 mt-30 p-10">
          <div className="mb-5">
            <div className="flex flex-col max-w-7xl content-center mx-auto">
              <span className="text-lg font-semibold sm:font-semibold sm:text-lg text-red-500 ">
                Testimonials
              </span>
              <div className="flex mt-1 items-center sm:flex sm:mt-1 sm:item-center gap-2">
                <FaStar />
                <span className="font-bold text-xl sm:font-bold sm:text-2xl ">
                  4.87 & 142 Users' Reviews
                </span>
              </div>

              <div className="sm:flex sm:ml-auto sm:mr-auto sm:gap-8 sm:mb-4">
                {Productdata.map((item, index) => {
                  return (
                    <div
                      className={[
                        "sm:w-8, relative sm:mb-20 mt-50",
                        index === 1 ? "top-0 sm:top-10 " : "top-0",
                      ].join(" ")}
                    >
                      <div className="flex gap-1">
                        <img
                          className="sm:h-10 sm:w-10 rounded-lg"
                          src={item.url}
                        />
                        <div className="flex flex-col">
                          <span>{item.name}</span>
                          <span className="mb-4">{item.title}</span>
                        </div>
                      </div>
                      <div className="bg-white p-4 border shadow shadow-lg rounded rounded-x1">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-200	w-full max-w-7xl sm:h-72 sm:ml-auto sm:mr-auto content-center p-4 sm:l py-16 relative mb-24">
          <div className="sm:w-38 sm:h-15 relative content-center sm:ml-5 ">
            <div className="sm:flex sm:gap-1 items-center">
              <LuNewspaper color="red" />
              <span className="sm:text-red-500 font-medium">News Letter</span>
            </div>
            <p className="sm:mb-2 sm:font-bold sm:text-3xl">
              Products update Weekly
            </p>
            <div className="flex gap-2 items-center">
              <div className="flex bg-white items-center mt-5 px-4 gap-2">
                <MdOutlineEmail />
                <input
                  className="border-none outline-none h-10 w-80"
                  type="text"
                  id="fname"
                  name="email"
                  placeholder="Email"
                ></input>
              </div>
              <button className="hover:bg-blue-500 sm:h-10 sm:w-40 text-white bg-red-500 mt-5">
                Submit
              </button>
            </div>
          </div>
          <img
            className="sm:h-80 absolute right-40 -top-5 scale-150"
            src={"newsletter.webp"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-white">
      <div className=" flex flex-start p-5 pt-16 pb-10 ">
        <div className="max-w-7xl mx-auto flex gap-32">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: 310,
            }}
          >
            <p
              style={{
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              Wingfi India
            </p>
            <p>
              We help delivers quality securely. Let's Shop. We help delivers
              quality securely. Let's Shop. We help delivers.
            </p>
            <p>Developed with love by Shipsar Developers</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ImFacebook2 size={30} color="gray" />
              <FaLinkedin size={30} color="gray" />
              <FaInstagramSquare size={30} color="gray" />
              <FaSquareWhatsapp size={30} color="gray" />
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              My Account
            </p>
            <ul>
              <li>Track Order</li>
              <li>Orders History</li>
              <li>Wish List</li>
              <li>Cart</li>
              <li>Checkout</li>
            </ul>
          </div>
          <div>
            <p
              style={{
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              Informations
            </p>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Priavcy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 250,
              gap: 10,
            }}
          >
            <p
              style={{
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              Talk to Us
            </p>
            <div
              style={{
                display: "flex",
              }}
            >
              <FaHeadphonesAlt size={38} />
              <span
                style={{
                  gap: 5,
                }}
              >
                Got Questions? Contact us 24/7
              </span>
              <p>+91 8130-506-284</p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <IoMail size={20} />
              <span
                style={{
                  gap: 5,
                }}
              >
                info@shipsar.in
              </span>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <FaLocationDot size={20} />
              <span
                style={{
                  gap: 5,
                }}
              >
                Plot 112, Besides Bata Showroom, deoli, New Delhi, 110062
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // maxWidth:1200,
          textAlign: "center",
          marginBottom: 40,
          fontWeight: 350,
        }}
      >
        <p>Copyright © 2024 - All Rights Reserved by Wingfi India</p>
      </div>
    </div>
  );
}

export default App;
