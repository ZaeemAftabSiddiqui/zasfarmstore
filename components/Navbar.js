import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropdown, setDropdown] = useState(false);

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
    <div className="flex flex-col  md:flex-row justify-center md:justify-start items-center shadow-md sticky top-0 bg-white z-10 ">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image
              src="/logo.png"
              alt="ZASFarmStore Farm fresh organic"
              width={70}
              height={70}
            />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center text-lg space-x-2 font-bold sm:text-xl sm:space-x-4 md:text-2xl md:space-x-6">
          <Link href={"/eggs"}>
            <a>
              <li className="hover:text-green-400">Eggs</li>
            </a>
          </Link>
          <Link href={"/fruits"}>
            <a>
              <li className="hover:text-green-400">Fruits</li>
            </a>
          </Link>
          <Link href={"/meat"}>
            <a>
              <li className="hover:text-green-400">Meat</li>
            </a>
          </Link>
          <Link href={"/milk"}>
            <a>
              <li className="hover:text-green-400">Milk</li>
            </a>
          </Link>
          <Link href={"/vegetable"}>
            <a>
              <li className="hover:text-green-400">Vegetables</li>
            </a>
          </Link>

          <Link href={"/other"}>
            <a>
              <li className="hover:text-green-400">Others</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className=" cursor-pointer cart absolute top-6 right-2 mx-3 flex">
        <span
          onMouseOver={() => {
            setDropdown(true);
          }}
          onMouseLeave={() => {
            setDropdown(false);
          }}
        >
          {dropdown && (
            <div
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className="absolute top-8 bg-white border right-8 py-3 rounded-md w-32 text-center font-bold shadow-lg"
            >
              <ul>
                <Link href={"/myaccount"}>
                  <li className="py-1 hover:text-green-400 text-sm ">
                    My Accounts
                  </li>
                </Link>
                <Link href={"/orders"}>
                  <li className="py-1 hover:text-green-400 text-sm ">orders</li>
                </Link>
                <li
                  onClick={logout}
                  className="py-1 hover:text-green-400 text-sm "
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          {user.value && (
            <MdAccountCircle className="text-2xl   md:text-4xl mx-2" />
          )}
        </span>
        {!user.value && (
          <Link href={"/login"}>
            <a>
              <button className="bg-green-500 px-2 py-1 rounded text-sm text-white mx-2 my-1">
                Login
              </button>
            </a>
          </Link>
        )}
        <AiOutlineShoppingCart
          onClick={toggelCart}
          className="text-2xl   md:text-4xl"
        />
      </div>

      <div
        ref={ref}
        className={`h-[100vh] w-72 sideCart overflow-y-scroll absolute top-0 right-0 bg-green-100 px-8 py-10 transform transition-transform
         ${
           Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
         }`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggelCart}
          className="absolute top-3 right-2 cursor-pointer text-2xl text-green-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4  font-semibold"> Cart is empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-3">
                  <div className="w-2/3 font-semibold">
                    {cart[k].name}({cart[k].size} / {cart[k].varient})
                  </div>
                  <div className="flex items-center justify-center font-semibold w-1/3 text-lg">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="cursor-pointer text-green-500"
                    />
                    <span className="mx-2 text-sm">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="cursor-pointer text-green-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold my-2">Subtotal: Rs{subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
