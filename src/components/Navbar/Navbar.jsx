import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="heading">
        KODEN
      </div>
      <div className="pages">
        <span><Link to="/Leetcode">LEETCODE</Link></span>
        <span><Link to="/codeforces">CODEFORCES</Link></span>
        <span><Link to="/codechef">CODECHEF</Link></span>
        <span><Link to="/Sheets">SOLVE A SHEET</Link></span>
        <span><Link to="/login">Login/Signup</Link></span>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default navbar;
