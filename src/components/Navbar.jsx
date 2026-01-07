/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain mr-3" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Razwan <span> Niam</span>{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300"
            onClick={() => setToggle(!toggle)}
          />

          {/* Modern mobile menu with glassmorphism */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } fixed inset-0 top-16 left-0 right-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60 backdrop-blur-md z-10 animate-in fade-in duration-300 flex-col items-center justify-start pt-8`}
          >
            {/* Menu content card */}
            <div className="w-11/12 max-w-xs bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
              <ul className="list-none flex flex-col gap-1">
                {navLinks.map((nav, idx) => (
                  <li
                    key={nav.id}
                    className={`transition-all duration-300`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    <a
                      href={`#${nav.id}`}
                      className={`block px-4 py-3 rounded-xl font-medium text-[16px] transition-all duration-300 ${
                        active === nav.title
                          ? "bg-gradient-to-r from-[#915eff] to-[#6d32bb] text-white shadow-lg shadow-purple-500/20"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
