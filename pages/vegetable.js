import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

const vegetable = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && (
              <p>Out of stock.New stock arrive soon.stay tuned!</p>
            )}
            {Object.keys(products).map((item) => {
              return (
                <Link
                  passHref={true}
                  key={products[item]._id}
                  href={`/product/${products[item].slug}`}
                >
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-4">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={products[item].img}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        vegetable
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">Rs {products[item].price}</p>
                      <div className="mt-1">
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-400 px-1 mx-1 ">
                            S
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border border-gray-400 px-1 mx-1 ">
                            M
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border border-gray-400 px-1 mx-1 ">
                            L
                          </span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border border-gray-400 px-1 mx-1 ">
                            XL
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].color.includes("white") && (
                          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("brown") && (
                          <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-emerald-200 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Dark brown") && (
                          <button className="border-2 border-gray-300 ml-1 bg-orange-800 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}

                        {products[item].color.includes("pink") && (
                          <button className="border-2 border-gray-300 ml-1 bg-orange-200 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-100 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }
  let products = await Product.find({ category: "vegetable" });
  let vegetable = {};
  for (let item of products) {
    if (item.title in vegetable) {
      if (
        !vegetable[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        vegetable[item.title].color.push(item.color);
      }
      if (
        !vegetable[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        vegetable[item.title].size.push(item.size);
      }
    } else {
      vegetable[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        vegetable[item.title].color = [item.color];
        vegetable[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(vegetable)) }, // will be passed to the page component as props
  };
}
export default vegetable;
