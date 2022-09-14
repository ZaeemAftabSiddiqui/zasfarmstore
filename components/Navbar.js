import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const navbar = () => {
  const toggelCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col  md:flex-row justify-center md:justify-start items-center shadow-md">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image
              src="/logo.png"
              alt="ZASFarmStore Farm fresh organic"
              width={100}
              height={100}
            />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center text-lg space-x-2 font-bold sm:text-xl sm:space-x-4 md:text-2xl md:space-x-6">
          <Link href={"/eggs"}>
            <a>
              <li>Eggs</li>
            </a>
          </Link>
          <Link href={"/fruits"}>
            <a>
              <li>Fruits</li>
            </a>
          </Link>
          <Link href={"/meat"}>
            <a>
              <li>Meat</li>
            </a>
          </Link>
          <Link href={"/milk"}>
            <a>
              <li>Milk</li>
            </a>
          </Link>
          <Link href={"/vegetable"}>
            <a>
              <li>Vegetables</li>
            </a>
          </Link>

          <Link href={"/other"}>
            <a>
              <li>Others</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggelCart}
        className=" cursor-pointer cart absolute top-8 right-6 mx-5"
      >
        <AiOutlineShoppingCart className="text-2xl   md:text-4xl" />
      </div>
      <div
        ref={ref}
        className="h-full w-72 sideCart absolute top-0 right-0 bg-green-100 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggelCart}
          className="absolute top-3 right-2 cursor-pointer text-2xl text-green-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">eggs</div>
              <div className="flex items-center justify-center font-semibold w-1/3 text-lg">
                <AiFillMinusCircle className="cursor-pointer text-green-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-green-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">eggs</div>
              <div className="flex items-center justify-center font-semibold w-1/3 text-lg">
                <AiFillMinusCircle className="cursor-pointer text-green-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-green-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">eggs</div>
              <div className="flex items-center justify-center font-semibold w-1/3 text-lg">
                <AiFillMinusCircle className="cursor-pointer text-green-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-green-500" />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
          <button className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>
          <button className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
