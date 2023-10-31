import React from "react";
import Menubar from "../Commons/Menubar/Menubar";
import Categorybar from "../Commons/Categorybar/Categorybar";
import Footer from "../Commons/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      <Categorybar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
