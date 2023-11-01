"use client";
import ORContainer from "@/components/Reuse/ORContainer";
import ORInput from "@/components/Reuse/ORInput";
import { H5, H6 } from "@/components/Reuse/Tags";
import React from "react";

import { FaBars } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from "@/context/AppContext";
import Link from "next/link";

const Categorybar = () => {
  const { totalCartItems } = useCartContext();

  return (
    <>
      <section className="bg-[#F5F5F3] py-5">
        <ORContainer>
          <div className="grid grid-cols-4 gap-5">
            {/* left */}
            <div className="w-4/5 flex items-center gap-2 cursor-pointer">
              <div className="dark: !text-main-color">
              <FaBars />
              </div>
              <H5 className="!text-main-color" h5="Shop by Category" />
            </div>

            {/* search */}
            <div className="col-span-2 w-4/5 mx-auto relative">
              <ORInput name="" placeholder="Search Products" />
              <div className="text-2xl absolute top-3 right-3 transform">
                <AiOutlineSearch />
              </div>
            </div>

            {/* right */}
            <div className="flex items-center justify-end gap-6 text-3xl">
              {/* cart */}
              <div className="">
                <Link href="/cart" className="relative dark: !text-main-color">
                  <span className="absolute bottom-4 left-4 bg-gray-400 w-5 h-5 rounded-full text-sm flex items-center justify-center text-black font-bold">
                    {totalCartItems}
                  </span>
                  <AiOutlineShoppingCart />
                </Link>
              </div>

              {/* user */}
              <div className="dark: !text-main-color">
                <BiSolidUserCircle />
              </div>
            </div>
          </div>
        </ORContainer>
      </section>
    </>
  );
};

export default Categorybar;
