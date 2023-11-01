"use client";
import ORContainer from "@/components/Reuse/ORContainer";
import { H2, H4, H5 } from "@/components/Reuse/Tags";
import { useCartContext } from "@/context/AppContext";
import {
  AiFillCloseCircle,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";

import React, { useState } from "react";
import ORInput from "@/components/Reuse/ORInput";
import Link from "next/link";

const Cart = () => {
  const {
    cartItems,
    totalCartPrice,
    decreaseItemQuantity,
    increaseItemQuantity,
    removeFromCart,
  } = useCartContext();
  const [cart, setCart] = useState(cartItems);

  const incrementQuantity = (index) => {
    increaseItemQuantity(index);
  };

  const decrementQuantity = (index) => {
    decreaseItemQuantity(index);
  };

  const roundedPrice = totalCartPrice.toFixed(2);

  return (
    <>
      <section className="mt-7">
        <ORContainer>
          <H2 h2="Cart" className="mb-8 dark:text-white-color" />

          <div className="">
            <table class="table-fixed w-full border-collapse border">
              <thead>
                <tr className="text-left bg-slate-400">
                  <th className="border border-slate-300 py-2 px-4 w-24">
                    Action
                  </th>
                  <th className="border border-slate-300 py-2 px-4">Product</th>
                  <th className="border border-slate-300 py-2 px-4">Price</th>
                  <th className="border border-slate-300 py-2 px-4">
                    Quantity
                  </th>
                  <th className="border border-slate-300 py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-slate-300 py-2 px-4 w-24 text-center">
                      <button
                        onClick={() => removeFromCart(data.id)}
                        className="cursor-pointer text-3xl text-red-500"
                      >
                        <AiFillCloseCircle />
                      </button>
                    </td>
                    <td className="border border-slate-300 py-2 px-4">
                      {data.title}
                    </td>
                    <td className="border border-slate-300 py-2 px-4">
                      {data.price}
                    </td>
                    <td className="border border-slate-300 py-2 px-4">
                      <div className="relative w-36">
                        <button
                          className="text-4xl text-orange-400 absolute top-0 left-0 dark:text-white-color"
                          onClick={() => decrementQuantity(data.id)}
                        >
                          <AiFillMinusSquare />
                        </button>
                        <input
                          type="text"
                          value={cart[i].quantity}
                          className="border-2 px-5 py-1 w-36 text-center focus:outline-none"
                        />
                        <button
                          className="text-4xl text-orange-400 absolute top-0 right-0 dark:text-white-color"
                          onClick={() => incrementQuantity(data.id)}
                        >
                          <AiFillPlusSquare />
                        </button>
                      </div>
                    </td>
                    <td className="border border-slate-300 py-2 px-4">
                      {`${(data.price * data.quantity).toFixed(2)}`}
                    </td>
                  </tr>
                ))}

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="border border-slate-300 py-2 px-4">
                    <H4 h4="Total" className="dark:text-white-color"></H4>
                  </td>
                  <td className="border border-slate-300 py-2 px-4">
                    <H4
                      h4={roundedPrice}
                      className="dark:text-white-color"
                    ></H4>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-right mt-10">
              <Link
                href="/thankyou"
                className="bg-main-color py-3 px-5 text-white-color"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </ORContainer>
      </section>
    </>
  );
};

export default Cart;
