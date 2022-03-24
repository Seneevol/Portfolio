import React from "react";
import Navbar from "../assets/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <main>{ children }</main>
    </div>
  );
};

export default Layout;
