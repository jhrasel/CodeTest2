"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "./fetchProducts";
import ORContainer from "@/components/Reuse/ORContainer";
import { H2, H3, H4, H5, H6, P } from "@/components/Reuse/Tags";
import ORImage from "@/components/Reuse/ORImage";
import { TbCurrencyTaka } from "react-icons/tb";

import { useCartContext } from "@/context/AppContext";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsPerPage = 8;

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("lowToHigh"); // Default sorting order

  const { addToCart, cartItems } = useCartContext();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setTotalPages(Math.ceil(data.length / ProductsPerPage));
        setLoading(false);
      })
      .catch((error) => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = currentPage * ProductsPerPage;

  // Filter products based on the selected category
  const filteredProducts =
    categoryFilter === "all"
      ? products
      : products.filter((product) => product.category === categoryFilter);

  // Sort products based on the selected sorting order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  // Get the products for the current page, category, and sorting order
  const currentPageProducts = sortedProducts.slice(startIndex, endIndex);

  // Get unique categories from the products for filtering
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <>
      <section className="mt-7">
        <ORContainer>
          <H2 h2="Products" className="mb-8 dark:text-white-color" />

          {/* Filter products by category and sort by price */}
          <div className="mb-5 flex justify-between items-center">
            <div>
              <label
                htmlFor="categoryFilter"
                className="mr-3 text-lg font-semibold"
              >
                Category:
              </label>
              <select
                id="categoryFilter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="border-2 rounded-lg px-4 py-1 capitalize"
              >
                <option value="all">All</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sortOrder" className="mr-3 text-lg font-semibold">
                Sort by Price:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border-2 rounded-lg px-4 py-1 capitalize"
              >
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-7 ">
            {loading ? (
              <>
                <Skeleton height={500} />
                <Skeleton height={500} />
                <Skeleton height={500} />
                <Skeleton height={500} />
                <Skeleton height={500} />
                <Skeleton height={500} />
                <Skeleton height={500} />
                <Skeleton height={500} />
              </>
            ) : (
              <>
                {currentPageProducts.map((product, index) => (
                  <div className="p-5 border-2 border-slate-200" key={index}>
                    {/* images */}
                    <div className="text-center">
                      <ORImage
                        image={product.image}
                        width="200"
                        height="200"
                        alt="product-images"
                        className="w-auto h-52 m-auto"
                      />
                    </div>
                    {/* content */}
                    <div className="mt-5">
                      <H6
                        h6={product.category}
                        className="capitalize mb-2 dark:text-white-color"
                      />
                      <H4
                        h4={product.title}
                        className="mb-2 line-clamp-2 h-16 dark:text-white-color"
                      />
                      <div className="flex gap-1">
                        <div className="text-xl text-text-color mt-1 dark:text-white-color">
                          <TbCurrencyTaka />
                        </div>
                        <H5
                          h5={product.price}
                          className="mb-2 dark: dark:text-white-color"
                        />
                      </div>
                      <P
                        p={product.description}
                        className="line-clamp-3 h-[70px] dark: dark:text-white-color"
                      />

                      <button
                        onClick={() => addToCart(product)}
                        className="bg-orange-400 mt-6 w-full p-2 text-white-color dark:text-white-color ease-in duration-300 hover:bg-orange-600 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Pagination controls */}
          <div className="mt-5 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`mx-2 px-4 py-2 rounded-full ${
                  currentPage === i + 1
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </ORContainer>
      </section>
    </>
  );
};

export default Product;
