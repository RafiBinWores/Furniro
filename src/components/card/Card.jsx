import PropTypes from "prop-types";
import shareIcon from "../../assets/images/share.png";
import compareIcon from "../../assets/images/compare.png";
import likeIcon from "../../assets/images/like.png";

function Card({ product }) {
  const { name, price, isNew, discountPercentage, furnitureType, productImage } = product;

  const calculateDiscountedPrice = (price, discount) => {
    return discount ? (price * (1 - discount / 100)).toFixed(2) : price;
  };

  // Determine badge styles based on conditions
  const badgeStyle = isNew
    ? "bg-green-400"
    : discountPercentage
    ? "bg-red-400"
    : "hidden";

  return (
    <div className="cursor-pointer bg-customGray-500 group">
      <div className="relative overflow-hidden">
        <img
          className="h-[301px] w-full object-cover"
          src={productImage}
          alt={`Image of ${name}`}
        />

        <div
          className={`absolute top-2.5 flex items-center justify-center rounded-full size-12 right-2.5 ${badgeStyle}`}
        >
          {/* Conditional display of text */}
          {isNew ? (
            <span className="font-medium text-white">New</span>
          ) : (
            discountPercentage && (
              <span className="font-medium text-white">-{discountPercentage}%</span>
            )
          )}
        </div>

        <div className="px-4 pt-4 pb-8">
          <p className="text-2xl font-semibold text-customGray-600">{name}</p>
          <p className="mt-2 font-medium text-customGray-700">{furnitureType}</p>

          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-semibold text-customGray-600">
              Rp {calculateDiscountedPrice(price, discountPercentage)}
            </p>
            {discountPercentage && (
              <p className="line-through text-customGray-800">Rp {price}</p>
            )}
          </div>
        </div>

        {/* Hover card buttons */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full gap-6 transition-all duration-300 opacity-0 bg-customGray-600/70 -bottom-10 group-hover:bottom-0 group-hover:opacity-100">
          <a
            href=""
            className="inline-block px-10 py-3 font-semibold bg-white text-golden"
          >
            Buy Now
          </a>

          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1">
              <img src={shareIcon} alt="Share Icon" />
              <p className="font-semibold text-white">Share</p>
            </a>
            <a href="#" className="flex items-center gap-1">
              <img src={compareIcon} alt="Compare Icon" />
              <p className="font-semibold text-white">Compare</p>
            </a>
            <a href="#" className="flex items-center gap-1">
              <img src={likeIcon} alt="Like Icon" />
              <p className="font-semibold text-white">Like</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isNew: PropTypes.bool,
    discountPercentage: PropTypes.number,
    furnitureType: PropTypes.string,
    productImage: PropTypes.string.isRequired,
  }),
};

export default Card;
