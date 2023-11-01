import ORContainer from "@/components/Reuse/ORContainer";
import ORInput from "@/components/Reuse/ORInput";
import { H5, H6 } from "@/components/Reuse/Tags";
import React from "react";

import { FaBars } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Categorybar = () => {
  return (
    <>
      <section className="bg-[#F5F5F3] py-5">
        <ORContainer>
          <div className="grid grid-cols-4 gap-5">
            {/* left */}
            <div className="w-4/5 flex items-center gap-2 cursor-pointer">
              <FaBars />
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
                <AiOutlineShoppingCart />
              </div>

              {/* user */}
              <div className="">
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
