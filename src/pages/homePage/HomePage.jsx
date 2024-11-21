import { useEffect, useState } from "react";
import heroImage from "../../assets/images/hero.jpg";
import Card from "../../components/card/Card";
import Range from "../../components/range/Range";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  // Show only the first 8 products
  const displayedProducts = products.slice(0, 8);

  return (
    <div>
      <div
        className="h-[400px] md:h-[716px] font-poppins px-3 lg:px-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex items-start justify-end h-full mx-auto">
          <div className="w-[550px] h-auto lg:w-[643px] md:h-[443px] bg-peach rounded-[10px] mt-[152px] -bottom-[50%] z-0 relative md:static">
            {/* Hero content card */}
            <div className="px-[38px] pb-[38px] pt-[42px] md:pt-[60px]">
              <p className="font-semibold text-customGray-300 tracking-[3px]">
                New Arrival
              </p>
              <h1 className="text-[34px] md:text-[52px] font-bold text-golden md:leading-[65px]">
                Discover Our <br /> New Collection
              </h1>
              <p className="font-medium text-sm md:text-[18px] pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <a
                href=""
                className="uppercase bg-golden px-6 py-4 md:px-[72px] md:py-[25px] inline-block mt-7 md:mt-[46px] text-sm md:text-base font-medium md:font-bold text-white"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Browse the range section */}
      <Range />

      {/* Feature Product Section */}
      <div className="container px-3 mx-auto mt-10 lg:px-0 font-poppins">
        <h3 className="font-bold text-[40px] text-customGray-300 text-center">
          Our Products
        </h3>

        {/* Product card grid */}
        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Product Card */}
          {displayedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-8">
          <Link
            to="/shop"
            className="px-20 py-3 font-semibold border text-golden border-golden"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
