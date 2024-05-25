"use client";

import React, { useState } from "react";
import "./nav.css";

const Navbar: React.FC = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className="background">
        <div className="nav-one">
          <div className="nav-parent">
            <div className="nav-flex">
              <div className="parent-logo">
                <div className="nav-logo">
                  <a href="/" className="logo">
                    Logo
                  </a>
                </div>
              </div>
              <div className="Home">
                <div className="Home1">
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Service</a>
                  <a href="/">contact</a>
                </div>
              </div>

              <div className="button" onClick={toggleNavbar}>
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
                <button></button>
              </div>
            </div>
          </div>
        </div>

        {isClick && (
          <div className="pages">
            <div className="links">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Service</a>
              <a href="/">contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
