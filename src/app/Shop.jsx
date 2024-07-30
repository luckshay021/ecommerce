import { useState } from "react";
import MenuBar from "../components/MenuBar";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Productdata = [
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      title: "realme Pl Pro 5G (Phoenix Red, 256 GB)",
      ratings: "9,690 Ratings & 607 Reviews",
      details: [
        "8GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Full HD+ Display",
        "50MP + 8MP 1 16MP Front Camera",
        "5000 mAh Battery",
        "6 Gen 1 Processor",
        "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories",
      ],
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      title: "realme P2 Pro 5G (Phoenix Red, 256 GB)",
      ratings: "9,690 Ratings & 607 Reviews",
      details: [
        "8GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Full HD+ Display",
        "50MP + 8MP 1 16MP Front Camera",
        "5000 mAh Battery",
        "6 Gen 1 Processor",
        "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories",
      ],
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      title: "realme Pl Pro 5G (Phoenix Red, 256 GB)",
      ratings: "9,690 Ratings & 607 Reviews",
      details: [
        "8GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Full HD+ Display",
        "50MP + 8MP 1 16MP Front Camera",
        "5000 mAh Battery",
        "6 Gen 1 Processor",
        "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories",
      ],
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      title: "realme Pl Pro 5G (Phoenix Red, 256 GB)",
      ratings: "9,690 Ratings & 607 Reviews",
      details: [
        "8GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Full HD+ Display",
        "50MP + 8MP 1 16MP Front Camera",
        "5000 mAh Battery",
        "6 Gen 1 Processor",
        "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories",
      ],
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      title: "realme Pl Pro 5G (Phoenix Red, 256 GB)",
      ratings: "9,690 Ratings & 607 Reviews",
      details: [
        "8GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Full HD+ Display",
        "50MP + 8MP 1 16MP Front Camera",
        "5000 mAh Battery",
        "6 Gen 1 Processor",
        "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories",
      ],
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      title: "realme Pl Pro 5G (Phoenix Red, 256 GB)",
      ratings: "9,690 Ratings & 607 Reviews",
      details: [
        "8GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Full HD+ Display",
        "50MP + 8MP 1 16MP Front Camera",
        "5000 mAh Battery",
        "6 Gen 1 Processor",
        "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories",
      ],
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      title: "realme Pl Pro 5G (Phoenix Red, 256 GB)",
      ratings: "9,690 Ratings & 607 Reviews",
      details: [
        "8GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Full HD+ Display",
        "50MP + 8MP 1 16MP Front Camera",
        "5000 mAh Battery",
        "6 Gen 1 Processor",
        "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories",
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
        <h1>Shop Page</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {Productdata.map((item) => {
          return (
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                style={{
                  height: 250,
                  weight: 200,
                  marginRight: 40,
                }}
                src={item.url}
              />
              <div>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: "gray",
                    fontWeight: 500,
                  }}
                >
                  9,690 Ratings & 607 Reviews
                </p>
                <button style={{
                  marginRight:10,
                }}>Add to cart</button>
                <button>Go to cart</button>

                <ul>
                  <li>8GB RAM | 256 GB ROM</li>
                  <li>17.02 cm (6.7 inch) Full HD+ Display</li>
                  <li>50MP + 8MP 1 16MP Front Camera</li>
                  <li>5000 mAh Battery</li>
                  <li>6 Gen 1 Processor</li>
                  <li>
                    1 Year Manufacturer Warranty for Device and 6 Months
                    Manufacturer Warranty for Inbox Accessories
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
