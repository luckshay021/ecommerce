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
        style={{
          backgroundColor: "#1a5166",
          backgroundImage: `url(${backgroundImage})`,
          height: 600,
          backgroundBlendMode: "multiply",
          display: "flex",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            // backgroundColor:"red",
            width: 1200,
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              height: 180,
            }}
            src={"side-dots.webp"}
          />

          <div
            style={{
              width: 400,
              alignItems: "center",
            }}
          >
            <p
              className="tracking-widest"
              style={{
                fontSize: "72px",
                color: "white",
                fontWeight: 250,
                // textAlign:"justify",
              }}
            >
              THE NEW STANDARD
            </p>
            <div
              className="flex space-x-4 tracking-widest "
              style={{
                fontSize: "36px",
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              <p className="first-letter:text-red-500 text-white">Crafted</p>
              <p className="first-letter:text-red-500 text-white">Power</p>
              <p className="first-letter:text-red-500 text-white">Banks</p>
            </div>
            <div
              className="tracking-widest"
              style={{
                fontSize: "24px",
                color: "white",
                width: 310,
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
                marginLeft: 50,
              }}
            >
              <span>STARTING</span>
              <span>FROM</span>
              <span>₹ 749/-</span>
            </div>
            <button
              className="bg-red-500 hover:bg-sky-700 "
              style={{
                height: "48px",
                width: "188.89px",
                marginLeft: 100,
                color: "white",
              }}
            >
              BUY NOW
            </button>
          </div>
          <img
            style={{
              height: 500,
            }}
            src={"hero-img.webp"}
          />
          <img
            style={{
              height: 180,
            }}
            src={"side-dots.webp"}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f6f9fc",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            // marginTop: 40,
            padding: 20,
            gap: 5,
          }}
        >
          <div
            style={{
              borderRadius: 1,
              backgroundColor: "white",
              height: "137.33px",
              width: "294px",
              boxShadow: "2px 2px 2px lightblue",
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <LuShoppingCart size={50} color="red" />
            <div>
              <p
                style={{
                  fontWeight: 650,
                }}
              >
                Free Shipping
              </p>
              <p>When ordering over ₹1000/-</p>
            </div>
          </div>
          <div
            style={{
              borderRadius: 1,
              backgroundColor: "white",
              height: "137.33px",
              width: "294px",
              boxShadow: "2px 2px 2px lightblue",
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <BsArrowReturnLeft size={50} color="red" />
            <div>
              <p
                style={{
                  fontWeight: 650,
                }}
              >
                Free Return
              </p>
              <p>Get Return within 30 days</p>
            </div>
          </div>
          <div
            style={{
              borderRadius: 1,
              backgroundColor: "white",
              height: "137.33px",
              width: "294px",
              boxShadow: "2px 2px 2px lightblue",
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <RiSecurePaymentLine size={50} color="red" />
            <div>
              <p
                style={{
                  fontWeight: 650,
                }}
              >
                Secure Payment
              </p>
              <p>100% Secure Online Payment</p>
            </div>
          </div>
          <div
            style={{
              borderRadius: 1,
              backgroundColor: "white",
              height: "137.33px",
              width: "294px",
              boxShadow: "2px 2px 2px lightblue",
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <LuBadgeCheck size={50} color="red" />
            <div>
              <p
                style={{
                  fontWeight: 650,
                }}
              >
                Best Quality
              </p>
              <p>Original Product Guarenteed</p>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            justifyContent: "space-between",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 40,
            padding: 20,
          }}
        >
          <p className="text-red-500">This Month</p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: 600,
            }}
          >
            Best Sellers
          </p>
          <div
            style={{
              display: "flex",
              borderRadius: 1,
              backgroundColor: "white",
              // height: "137.33px",
              // width: "294px",
              boxShadow: "2px 2px 2px lightblue",
              alignItems: "center",
              gap: 15,
              maxWidth: "1200px",
              justifyContent: "space-between",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
            }}
          >
            <div
              style={{
                borderRadius: 1,
                backgroundColor: "white",
                height: "154.92px",
                width: "389.33px",
                boxShadow: "2px 2px 2px lightblue",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                gap: 15,
                position: "relative",
              }}
            >
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
              <p>₹4499/-</p>
              <p
                style={{
                  color: "red",
                }}
              >
                ₹1399/-
              </p>

              <img
                style={{
                  width: "130px",
                  height: "240px",
                  zIndex: 1,
                  display: "flex",
                  marginLeft: "auto",
                  marginBottom: 40,
                  // backgroundColor: "red",
                  position: "absolute",
                  top: 60,
                  right: 30,
                }}
                src={"pro_1152_0.webp"}
              />
            </div>
            <div
              style={{
                borderRadius: 1,
                backgroundColor: "white",
                height: "154.92px",
                width: "389.33px",
                boxShadow: "2px 2px 2px lightblue",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                gap: 15,
                position: "relative",
              }}
            >
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
              <p>₹4499/-</p>
              <p
                style={{
                  color: "red",
                }}
              >
                ₹1399/-
              </p>
              <img
                style={{
                  width: "130px",
                  height: "240px",
                  zIndex: 1,
                  display: "flex",
                  marginLeft: "auto",
                  marginBottom: 40,
                  // backgroundColor: "red",
                  position: "absolute",
                  top: 60,
                  right: 30,
                }}
                src={"pro_1153_0.webp"}
              />
            </div>
            <div
              style={{
                borderRadius: 1,
                backgroundColor: "white",
                height: "154.92px",
                width: "398.33px",
                boxShadow: "2px 2px 2px lightblue",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                gap: 15,
                position: "relative",
              }}
            >
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
              <p>₹4499/-</p>
              <p
                style={{
                  color: "red",
                }}
              >
                ₹1399/-
              </p>
              <img
                style={{
                  width: "130px",
                  height: "240px",
                  zIndex: 1,
                  display: "flex",
                  marginLeft: "auto",
                  marginBottom: 40,
                  // backgroundColor: "red",
                  position: "absolute",
                  top: 60,
                  right: 30,
                }}
                src={"pro_1151_0.webp"}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            justifyContent: "space-between",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 180,
            padding: 20,
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: 600,
              marginBottom: 15,
            }}
          >
            Recommended by Us
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <div
              style={{
                borderRadius: 1,
                backgroundColor: "white",
                // backgroundColor: "red",
                height: "205.33px",
                width: "550px",
                boxShadow: "2px 2px 2px lightblue",
                display: "flex",
                gap: 15,
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "180px",
                  width: "180px",
                  marginLeft: 10,
                }}
                src={"pro_1148_1.webp"}
              />
              <div>
                <p
                  style={{
                    marginBottom: 10,
                  }}
                >
                  wingfi 10000 mah 18w compact power bank gamechanger
                </p>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                </div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                    }}
                  >
                    ₹2999-/
                  </p>
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    ₹749-/
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: 370,
                    gap: 5,
                  }}
                >
                  <button
                    className="bg-red-500 hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "white",
                    }}
                  >
                    View
                  </button>
                  <button
                    className="bg-white hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "red",
                      borderColor: "red",
                      borderWidth: 1,
                    }}
                  >
                    wishlist
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: 1,
                backgroundColor: "white",
                // backgroundColor: "red",
                height: "205.33px",
                width: "550px",
                boxShadow: "2px 2px 2px lightblue",
                display: "flex",
                gap: 15,
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "180px",
                  width: "180px",
                  marginLeft: 10,
                }}
                src={"pro_1154_1.webp"}
              />
              <div>
                <p
                  style={{
                    marginBottom: 10,
                  }}
                >
                  wingfi 10000 mah 25w power bank 10000barrel{" "}
                </p>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                </div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                    }}
                  >
                    ₹3499-/
                  </p>
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    ₹1199-/
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: 370,
                    gap: 5,
                  }}
                >
                  <button
                    className="bg-red-500 hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "white",
                    }}
                  >
                    View
                  </button>
                  <button
                    className="bg-white hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "red",
                      borderColor: "red",
                      borderWidth: 1,
                    }}
                  >
                    wishlist
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: 1,
                backgroundColor: "white",
                // backgroundColor: "red",
                height: "205.33px",
                width: "550px",
                boxShadow: "2px 2px 2px lightblue",
                display: "flex",
                gap: 15,
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "180px",
                  width: "180px",
                  marginLeft: 10,
                }}
                src={"pro_1149_1.webp"}
              />
              <div>
                <p
                  style={{
                    marginBottom: 10,
                  }}
                >
                  wingfi 20000 mah 18w power bank freewire
                </p>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                </div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                    }}
                  >
                    ₹4499-/
                  </p>
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    ₹1399-/
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: 370,
                    gap: 5,
                  }}
                >
                  <button
                    className="bg-red-500 hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "white",
                    }}
                  >
                    View
                  </button>
                  <button
                    className="bg-white hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "red",
                      borderColor: "red",
                      borderWidth: 1,
                    }}
                  >
                    wishlist
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: 1,
                backgroundColor: "white",
                // backgroundColor: "red",
                height: "205.33px",
                width: "550px",
                boxShadow: "2px 2px 2px lightblue",
                display: "flex",
                gap: 15,
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "180px",
                  width: "180px",
                  marginLeft: 10,
                }}
                src={"pro_1150_1.webp"}
              />
              <div>
                <p
                  style={{
                    marginBottom: 10,
                  }}
                >
                  wingfi 20000 mah 20w power bank messi
                </p>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                </div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                    }}
                  >
                    ₹4499-/
                  </p>
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    ₹1399-/
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: 370,
                    gap: 5,
                  }}
                >
                  <button
                    className="bg-red-500 hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "white",
                    }}
                  >
                    View
                  </button>
                  <button
                    className="bg-white hover:bg-sky-700 "
                    style={{
                      width: "150px",
                      height: "32px",
                      color: "red",
                      borderColor: "red",
                      borderWidth: 1,
                    }}
                  >
                    wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 1200,
            marginBottom: 60,
            marginTop: 40,
            padding:10,
          }}
        >
          <div
            style={{
              marginBottom: 10,
            }}
          >
            <span
              style={{
                fontWeight: 500,
                color: "red",
                fontSize: 15,
              }}
            >
              Testimonials
            </span>
            <div
              style={{
                display: "flex",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <FaStar />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 26,
                }}
              >
                4.87 & 142 Users' Reviews
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: 1200,
              marginLeft: "auto",
              marginRight: "auto",
              gap: 50,
              marginBottom: 70,
            }}
          >
            {Productdata.map((item, index) => {
              return (
                <div
                  style={{
                    width: "33%",
                    position: "relative",
                    top: index === 1 ? 50 : 0,
                    marginBottom: 120,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <img
                      style={{
                        height: 40,
                        weight: 40,
                        // marginRight: 40,
                        borderRadius: 18,
                      }}
                      src={item.url}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span>{item.name}</span>
                      <span>{item.title}</span>
                    </div>
                  </div>
                  <p
                    style={{
                      // width: 250,
                      backgroundColor: "white",
                      borderRadius: 10,
                      padding: 15,
                      boxShadow: "0px 0px 4px 4px rgba(0,0,0,0.15)",
                      // display:"flex",
                      // flexDirection:"column",
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#e2e8f0",
            width: "1200px",
            height: "275.85px",
            marginLeft: "auto",
            marginRight: "auto",
            alignContent: "center",
            padding:10,
          }}
        >
          <div
            style={{
              width: "616px",
              height: "248px",
              position: "relative",
              alignContent: "center",
              marginLeft: 80,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 5,
              }}
            >
              <LuNewspaper color="red" />
              <span
                style={{
                  color: "red",
                  fontWeight: 500,
                }}
              >
                News Letter
              </span>
            </div>
            <p
              style={{
                fontWeight: 700,
                fontSize: 30,
              }}
            >
              Products update Weekly
            </p>
            <div
              style={{
                display: "flex",
                gap: 5,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "320px",
                  height: "48px",
                  backgroundColor: "white",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <MdOutlineEmail />
                <input
                  className=" border-none outline-none"
                  type="text"
                  id="fname"
                  name="email"
                  placeholder="Email"
                ></input>
              </div>
              <button
                className="hover:bg-sky-700"
                style={{
                  height: "48px",
                  width: "144.49px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <img
            style={{
              width: "408px",
              height: "468.95px",
              position: "absolute",
              top: 2310,
              right: 300,
            }}
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
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          marginTop: 100,
          display: "flex",
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
          alignContent: "flex-start",
          marginBottom: 40,
          padding:10,
        }}
      >
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
