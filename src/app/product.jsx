import { useState } from "react";
import MenuBar from "../components/MenuBar";
import { TiStarFullOutline } from "react-icons/ti";
import { BiBus } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { BsBrowserEdge } from "react-icons/bs";
import { RiRefund2Fill } from "react-icons/ri";
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f6f9fc",
      }}
    >
      {isMenuOpen === true && (
        <div
          style={{
            backgroundColor: "silver",
            width: 200,
            height: "100vh",
          }}
        >
          <MenuBar />
        </div>
      )}
      <div>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          M
        </button>
      </div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          gap: 20,
          position: "relative",
        }}
      >
        <div
          style={{
            // position: "sticky",
            // top: 20,
            display: "flex",
            gap: 30,
            marginTop: 70,
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 20,
              height: "100%",
            }}
          >
            <img
              style={{
                height: 500,
                width: 480,
                marginRight: "20",
              }}
              src={
                "https://wingfi.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fwingfi-9b5b7.appspot.com%2Fo%2Fpro%252F1153%252F2.webp%3Falt%3Dmedia&w=2048&q=75"
              }
            />
          </div>
          <div>
            <div
              style={{
                marginBottom: 40,
              }}
            >
              <p
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                EnergyHub 20000Mah Power Bank
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <TiStarFullOutline color="red" />
                <TiStarFullOutline color="red" />
                <TiStarFullOutline color="red" />
                <TiStarFullOutline color="red" />
                <TiStarFullOutline />
                <p
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                  }}
                >
                  15 Customer Ratings
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontWeight: 700,
                    fontSize: 20,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  ₹1399/-
                </span>
                <span
                  style={{
                    color: "gray",
                  }}
                >
                  ₹4499/-
                </span>
              </div>
              <p
                style={{
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                SKU: 1153
              </p>
              <div
                style={{
                  width: 540,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  class="bg-red-500 hover:bg-black"
                  style={{
                    height: 50,
                    width: 200,
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  Add to Cart
                </button>
                <button
                  class="bg-red-500 hover:bg-black"
                  style={{
                    height: 50,
                    width: 160,
                    color: "white",
                    fontWeight: 600,
                    // backgroundColor: "#f6f9fc",
                  }}
                >
                  Go to Cart
                </button>
                <button
                  class="bg-red-500 hover:bg-black"
                  style={{
                    height: 50,
                    width: 170,
                    color: "white",
                    fontWeight: 600,
                    // backgroundColor: "#f6f9fc",
                    borderColor: "white",
                    boxShadow: "0px 0px 4px 4px rgba(0,0,0,0.03)",
                  }}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 50,
              }}
            >
              <div
                style={{
                  width: 540,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    padding: 10,
                    backgroundColor: "#e2e8f0",
                  }}
                >
                  General
                </p>
                <table>
                  <tr>
                    <td>Ports Input</td> <td>2</td>
                  </tr>
                  <tr>
                    <td>Ports Output </td> <td>3</td>
                  </tr>
                  <tr>
                    <td>Model Name </td> <td>EnergyHUB</td>
                  </tr>
                  <tr>
                    <td>Charging Cable Included </td> <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Sales Package</td>{" "}
                    <td>
                      1 Power Bank, Charging Cable,User Manual, Warranty Card
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{
                  width: 540,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    padding: 10,
                    backgroundColor: "#e2e8f0",
                  }}
                >
                  Warranty
                </p>
                <table>
                  <tr>
                    <td>Coverage </td> <td>Manufacturing Defects</td>
                  </tr>
                  <tr>
                    <td>Warranty Summary </td> <td>3 Months</td>
                  </tr>
                  <tr>
                    <td>Not Covered </td> <td>Physical Damage</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>care@wingfiindia.com</td>
                  </tr>
                </table>
              </div>
              <br />
            </div>
            <div
              style={{
                width: 800,
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <div
                style={{
                  height: 90,
                  width: 240,
                  backgroundColor: "#fdf2f3",
                  padding: 20,
                }}
              >
                <BiBus size={30} />
                <p
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Free shipping
                </p>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                  }}
                >
                  On orders over $50.00
                </p>
              </div>
              <div
                style={{
                  height: 90,
                  width: 240,
                  backgroundColor: "#f0fcf5",
                  padding: 20,
                }}
              >
                <GiReturnArrow size={30} />
                <p
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Very easy to return
                </p>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                  }}
                >
                  Just phone number.
                </p>
              </div>
              <div
                style={{
                  height: 90,
                  width: 240,
                  backgroundColor: "#f0fcf5",
                  padding: 20,
                }}
              >
                <BsBrowserEdge size={30} />
                <p
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Nationwide Delivery
                </p>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                  }}
                >
                  Fast delivery nationwide.
                </p>
              </div>
              <div
                style={{
                  height: 90,
                  width: 240,
                  backgroundColor: "#fefaed",
                  padding: 20,
                }}
              >
                <RiRefund2Fill size={30} />
                <p
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Refunds policy
                </p>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                  }}
                >
                  60 days return for any reason
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignContent: "center",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              <u>
                Power Your Life On-the-Go with the Wingfi India EnergyHub
                20000Mah Power Bank
              </u>
            </p>
            <span
              style={{
                fontWeight: 650,
              }}
            >
              Wingfi India,
            </span>
            <span>
              a prominent name in power solutions for over 4 years, brings you
              the EnergyHub 20000Mah Power Bank, a reliable and powerful
              companion for your daily charge needs.
            </span>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Built with Quality and Convenience in Mind
              </p>
              <ul>
                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Ample Capacity:
                  </span>
                </li>

                <span>
                  The 20000mAh capacity ensures you can charge your smartphone,
                  tablet, or other compatible devices multiple times on a single
                  full charge.
                </span>

                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Versatility:{" "}
                  </span>
                </li>

                <span>
                  Equipped with 2 ports, the Power Bank caters to a wide range
                  of devices, allowing you to charge smartphones, tablets,
                  cameras, and more simultaneously.
                </span>

                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Convenience:
                  </span>
                </li>

                <span>
                  The included charging cable eliminates the need to carry an
                  extra one, while the user manual and warranty card provide
                  clear instructions and peace of mind.
                </span>
              </ul>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Beyond the Technical Specifications
              </p>
              <p>The EnergyHub offers more than just technical features:</p>
              <ul>
                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Peace of mind:
                  </span>
                </li>
                <span>
                  Backed by a 3-month warranty that covers manufacturing
                  defects, you can be assured of the product's quality and
                  durability.
                </span>
                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Reliable performance:{" "}
                  </span>
                </li>
                <span>
                  Wingfi India's own manufacturing ensures rigorous quality
                  control for consistent performance.
                </span>
                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Commitment to sustainability:
                  </span>
                </li>
                <span>
                  By choosing a reusable power bank, you contribute to reducing
                  reliance on disposable batteries and minimizing environmental
                  impact.
                </span>
              </ul>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Who is the EnergyHub Perfect For?
              </p>
              <p>
                The EnergyHub 20000Mah Power Bank is the perfect choice for:
              </p>
              <ul>
                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Professionals on the go:
                  </span>
                </li>
                <span>
                  Stay connected and productive throughout the day with reliable
                  charging for your essential devices.
                </span>
                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Travel enthusiasts:
                  </span>
                </li>
                <span>
                  Capture memories and stay connected with loved ones without
                  worrying about running out of battery.
                </span>
                <li>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Students and young adults:
                  </span>
                </li>
                <span>
                  Keep your devices powered up for studies, entertainment, or
                  social media.
                </span>
              </ul>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Invest in Reliable Power and Peace of Mind
              </p>
              <p>
                Choose the Wingfi India EnergyHub 20000Mah Power Bank and
                experience the freedom of uninterrupted connectivity.
              </p>
              <hr
                style={{
                  margin: 80,
                }}
              />
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
      <Footer />
    </div>
  );
}

export default App;

export function Footer() {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          marginTop: 40,
          display: "flex",
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
          alignContent: "flex-start",
          marginBottom: 40,
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

export function Header() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: 65,
        textAlign: "center",
        boxShadow: "0px 0px 4px 4px rgba(0,0,0,0.15)",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 1300,
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 12,
        }}
      >
        <div>
          <span
            style={{
              fontWeight: 620,
              fontSize: 30,
            }}
          >
            Wingfi India
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <IoHomeOutline size={20} />
            <span
              style={{
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Home
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <AiOutlineShoppingCart size={20} />
            <span
              style={{
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Shop
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <VscAccount size={20} />
            <span
              style={{
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Account
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <CiHeart size={20} />
            <span
              style={{
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Wishlist
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <CiCircleInfo size={20} />
            <span
              style={{
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              About Us
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 10,
          }}
        >
          <CiSearch size={20} />
          <AiOutlineShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
}
