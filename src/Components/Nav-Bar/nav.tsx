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
                  <a href="/">Contact</a>
                </div>

                <div className="button">
                  <button className="button1" onClick={toggleNavbar}>
                    {isClick ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        className="w-6 h-6 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                        />
                      </svg>
                    )}
                  </button>
                </div>
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
