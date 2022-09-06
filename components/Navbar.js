import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
const navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center ">
      <div className="logo mx-5">
        <Image
          src="/logo.png"
          alt="ZASFarmStore Farm fresh organic"
          width={100}
          height={100}
        />
      </div>
      <div className="nav">
        <ul className="flex items-center text-lg space-x-2 font-bold sm:text-xl sm:space-x-4 md:text-2xl md:space-x-6">
          <Link href={"/"}>
            <a>
              <li>Eggs</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Friuts</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Meat</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Milk</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Vegetables</li>
            </a>
          </Link>

          <Link href={"/"}>
            <a>
              <li>Others</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute top-8 right-6 mx-5">
        <AiOutlineShoppingCart className="text-2xl   md:text-4xl" />
      </div>
    </div>
  );
};

export default navbar;
