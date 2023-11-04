import React from "react";
import logo from "../assets/logo.png";
import { BsHeart, BsCart, BsMenuDown } from "react-icons/bs";
import {FiMenu} from 'react-icons/fi';
import Navlink from "../public/components/Navlink";

const Navbar = () => {
  return (
    <div className="shadow-lg px-10">
      {/* nav section up */}
      <div className="flex justify-between border-b-2 gap-6 pb-3">
        <img src={logo} alt="" />
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            type="text"
            placeholder="Search by product name"
          />
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex flex-col items-center">
            <BsHeart className="h-6 w-6" />
            <h3 className="">Wishlist</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative inline-flex w-fit">
              <h2 className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-black text-xs text-white p-1">
                0
              </h2>
              <BsCart className="h-6 w-6" />
            </div>
            <h3 className="">Cart</h3>
          </div>
        </div>
      </div>
      {/* nav bottom section */}
      <div className="flex justify-between">
        <div>
          <h1 className="flex items-center justify-around gap-1 bg-black px-3 py-2 pr-8 text-white w-full text-2xl">
          <FiMenu className="h-6 w-6" /> Categories
          </h1>
        </div>
        <ul className="flex justify-center items-center gap-4 font-medium text-zinc-400 mr-10">
          <Navlink to="/">Home</Navlink>
          <li className="hover:text-black">Shop</li>
          <li className="hover:text-black">Woman Clothing</li>
          <li className="hover:text-black">Men Shirt</li>
          <li className="hover:text-black">Summar Collection</li>
          <li className="hover:text-black">Panjabi</li>
          <li className="hover:text-black">Shoes</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
