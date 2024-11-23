import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ShopFilter from "../../components/shopFilter/ShopFilter";
import Card from "../../components/card/Card";
import { useEffect, useState, useRef } from "react";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import Pagination from "../../components/pagination/Pagination";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const savedItemsPerPage = localStorage.getItem("itemsPerPage");
    return savedItemsPerPage ? Number(savedItemsPerPage) : 16;
  });
  const [sortBy, setSortBy] = useState(() => {
    const savedSortBy = localStorage.getItem("sortBy");
    return savedSortBy ? savedSortBy : "default";
  });
  const productRef = useRef(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // set the page name for breadcrumb
  const pageName = "Shop";

  // Sort function based on selected option
  const sortProducts = (products) => {
    switch (sortBy) {
      case "price":
        return [...products].sort((a, b) => a.price - b.price);
      case "a-z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "z-a":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "default":
      default:
        return products; 
    }
  };

  // Sort the products based on the selected "sortBy" value
  const sortedProducts = sortProducts(products);

  // Calculate the range of displayed products
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, products.length);
  const displayedProducts = sortedProducts.slice(startIndex - 1, endIndex);

  // Scroll to product section
  const handlePageChange = (page) => {
    setCurrentPage(page);
    productRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle change in items per page
  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);

    localStorage.setItem("itemsPerPage", newItemsPerPage);
  };

  // Handle change in sorting option
  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
    localStorage.setItem("sortBy", newSortBy);
  };

  return (
    <div>
      <Breadcrumb page={pageName}/>
      <ShopFilter
        startIndex={startIndex}
        endIndex={endIndex}
        totalCount={products.length}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />

      <div ref={productRef} className="container px-3 mx-auto mt-16 lg:px-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      {/* Why choose us section */}
      <WhyChooseUs />
    </div>
  );
}

export default ShopPage;
