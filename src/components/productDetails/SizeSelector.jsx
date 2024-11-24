import PropTypes from "prop-types";

function SizeSelector({ sizes }) {
  return (
    <div>
      <p className="mt-8 text-sm text-neutral-400">Size</p>
      <div className="flex gap-4 mt-3 text-sm text-black whitespace-nowrap">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`px-3 rounded-md flex items-center justify-center h-[30px] w-[30px] ${
              size.isSelected ? "text-white bg-yellow-600" : "bg-orange-50"
            }`}
            aria-label={`Select size ${size.label}`}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
}

SizeSelector.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default SizeSelector;
