import { StarFilled } from "@ant-design/icons";
import { Link, useLoaderData } from "react-router-dom";
import SizeSelector from "../../components/productDetails/SIzeSelector";
import ColorSelector from "../../components/productDetails/ColorSelector";

function ProductDetailsPage() {
  const product = useLoaderData();
  const { name, thumbnail, price, sizes, images, colors } = product;

  return (
    <div className="font-poppins">
      {/* Breadcrumb */}
      <div className="bg-peach h-[100px] flex items-center ">
        <div className="container flex items-center gap-4 px-3 mx-auto lg:px-0">
          <Link to="/" className="text-customGray-100">
            Home
          </Link>
          <span className="material-symbols-outlined">chevron_right</span>
          <Link to="/shop" className="text-customGray-100">
            Shop
          </Link>
          <span className="material-symbols-outlined">chevron_right</span>
          <p>{name}</p>
        </div>
      </div>

      {/* Product DEtails */}
      <div className="container px-3 mx-auto mt-12">
        <div className="flex gap-36">
          <div>
            <div className="flex gap-8">
              {/* Side Image */}
              <div className="space-y-8">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[76px] h-20 rounded-md bg-peach"
                  >
                    <img
                      className="object-cover w-full h-full rounded-md"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <div className="w-[423px] h-[500px] bg-peach rounded-md">
                {/* Thumbnail */}
                <img
                  className="object-cover object-center w-full h-full rounded-md"
                  src={thumbnail}
                  alt={name}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[42px]">{name}</h3>
            <p className="text-2xl font-medium text-customGray-100">
              Rs. {price}
            </p>

            <div className="flex items-center mt-4">
              <div className="flex items-center text-xl text-yellow-400 pe-4 border-e border-customGray-100">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <span className="material-symbols-outlined">star_half</span>
              </div>
              <span className="ml-2 text-gray-500 ps-3 text-[13px]">
                5 Customer Reviews
              </span>
            </div>

            <p className="mt-3.5 text-sm text-black max-w-[414px] text-[13px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* size */}
            <SizeSelector sizes={sizes} />

            {/* color */}
            <ColorSelector colors={colors} />

            {/* buttons selector */}
            <div className="flex items-center gap-4 mt-8">
              <div className="inline-flex px-4 py-4 text-base bg-white border border-solid gap-9 whitespace-nowrap rounded-xl border-neutral-400">
                <button
                  aria-label="Decrease quantity"
                  className="focus:outline-none"
                >
                  -
                </button>
                <span className="text-xl">1</span>
                <button
                  aria-label="Increase quantity"
                  className="focus:outline-none"
                >
                  +
                </button>
              </div>
              <button className="inline-flex px-8 py-4 text-base bg-white border border-solid gap-9 whitespace-nowrap rounded-xl border-neutral-400">
                <span className="text-xl">Add To Cart</span>
              </button>
              <button className="inline-flex px-8 py-4 text-base bg-white border border-solid gap-9 whitespace-nowrap rounded-xl border-neutral-400">
                <span className="text-xl">
                  <span className="pe-2">+</span> Compare
                </span>
              </button>
            </div>

            <hr className="mt-10 border-customGray-800" />

            <div className="mt-10 space-y-4 text-customGray-100">
              <p>SKU:</p>
              <p>Category:</p>
              <p>Tags:</p>
              <p>Share:</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-customGray-800 mt-[60px]" />

      {/* Tabs */}
      <div className="flex items-center justify-center">
      <div role="tablist" className="tabs">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Description"
          defaultChecked
        />
        <div role="tabpanel" className="p-10 tab-content">
        Description
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Additional Information"
        />
        <div role="tabpanel" className="p-10 tab-content">
        Additional Information
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Reviews"
        />
        <div role="tabpanel" className="p-10 tab-content">
        Reviews
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ProductDetailsPage;
