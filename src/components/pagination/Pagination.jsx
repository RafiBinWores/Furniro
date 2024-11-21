import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-[70px] mb-[85px] font-poppins overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-6 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl rounded-md ${
          currentPage === 1 ? "hidden" : "bg-peach hover:bg-golden"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl rounded-md ${
            currentPage === index + 1
              ? "bg-golden text-white"
              : "bg-peach hover:bg-golden"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-6 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl rounded-md ${
          currentPage === totalPages
            ? "hidden"
            : "bg-peach hover:bg-golden"
        }`}
      >
        Next
      </button>
    </div>
  );
};

// Prop validation
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
