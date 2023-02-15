import React from "react";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        KODEN
      </div>
      <div className="pages">
        <span>LEETCODE</span>
        <span>CODEFORCES</span>
        <span>CODECHEF</span>
        <span>SOLVE A SHEET</span>
        <span>Login/Signup</span>
      </div>
    </div>
  );
};

export default navbar;
