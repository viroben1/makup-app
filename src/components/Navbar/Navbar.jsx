import React from "react";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import './Navbar.css';
const Navbar = () => {
  return (
    <div  className="flex">
      
        <a href="/">Welly</a>
      

      <div>
        <a href="/home">Home</a>
        <a href="/search">Search</a>
        <a href="/about">About</a>
      </div>
      <div className="flex m-1 mx-auto">
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
