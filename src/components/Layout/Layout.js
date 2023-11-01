import React from "react";
import Menubar from "../Commons/Menubar/Menubar";
import Categorybar from "../Commons/Categorybar/Categorybar";
import Footer from "../Commons/Footer/Footer";
import { CartProvider } from "@/context/AppContext";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      <Categorybar />
      {/* <CartProvider>
        <main>{children}</main>
      </CartProvider> */}
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
