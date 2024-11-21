import PropTypes from "prop-types";
import { SettingsHorizontal } from "akar-icons";

function ShopFilter({
  startIndex,
  endIndex,
  totalCount,
  itemsPerPage,
  onItemsPerPageChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="bg-peach h-[100px] w-full flex items-center">
      <div className="container px-3 mx-auto lg:px-0">
        <div className="flex justify-between ">
          <div className="flex items-center gap-5 lg:gap-8">
            <div className="flex items-center gap-3">
              <SettingsHorizontal /> <span className="text-xl">Filter</span>
            </div>
            <span>
              <i className="text-xl lg:text-2xl bi bi-grid-fill"></i>
            </span>
            <span className="md:border-r-2 md:border-customGray-400 pe-8">
              <i className="text-xl lg:text-2xl bi bi-view-list"></i>
            </span>

            <p className="hidden lg:font-medium md:block">
              Showing {startIndex}–{endIndex} out of {totalCount} results
            </p>
          </div>

          <div className="items-center hidden gap-8 lg:flex">
            <div className="flex items-center gap-5">
              <label className="text-xl">Show</label>
              <select
                value={itemsPerPage}
                onChange={onItemsPerPageChange} 
                className="size-[55px] ps-3 focus:border-none appearance-none text-xl text-customGray-100"
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
              </select>
            </div>
            <div className="flex items-center gap-5">
              <label className="text-xl">Sort by</label>
              <select
               value={sortBy}
               onChange={onSortChange}
                className="h-[55px] w-[188px] ps-3 focus:border-none appearance-none text-xl text-customGray-100"
              >
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="a-z">A to Z</option>
                <option value="z-a">Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ShopFilter.propTypes = {
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onItemsPerPageChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default ShopFilter;
