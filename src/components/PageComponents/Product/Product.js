"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "./fetchProducts";
import ORContainer from "@/components/Reuse/ORContainer";
import { H2, H3, H4, H5, H6, P } from "@/components/Reuse/Tags";
import ORImage from "@/components/Reuse/ORImage";
import { TbCurrencyTaka } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CustomPlaceholder from "./CustomPlaceholder";

const ProductsPerPage = 8;

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setTotalPages(Math.ceil(data.length / ProductsPerPage));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = currentPage * ProductsPerPage;

  // Get the products for the current page
  const currentPageProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <section className="mt-7">
        <ORContainer>
          <H2 h2="Products" className="mb-8" />

          <div className="grid grid-cols-4 gap-7">
            {currentPageProducts.map((product, index) => (
              <div className="p-5 border-2 border-slate-200" key={index}>
                {/* images */}
                <div className="text-center">
                  {loading ? (
                    <CustomPlaceholder />
                  ) : (
                    <ORImage
                      image={product.image}
                      width="200"
                      height="200"
                      alt="product-images"
                      className="w-auto h-52 m-auto"
                    />
                  )}
                </div>
                {/* content */}
                <div className="mt-5">
                  <H6 h6={product.category} className="capitalize mb-2" />
                  <H4 h4={product.title} className="mb-2 line-clamp-2 h-16" />
                  <div className="flex gap-1">
                    <div className="text-xl text-text-color mt-1">
                      <TbCurrencyTaka />
                    </div>
                    <H5 h5={product.price} className="mb-2 " />
                  </div>
                  <P
                    p={product.description}
                    className="line-clamp-3 h-[70px]"
                  />

                  <button className="bg-orange-400 mt-6 w-full p-2 text-white-color ease-in duration-300 hover:bg-orange-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
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
