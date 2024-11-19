import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Reduxe/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast("Item Added To Cart Suceesfully!");
  };
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    const getproduct = async () => {
      try {
        const response = await axios.get(
          `https://food-del-backend-mw9j.onrender.com/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (id && id.trim() !== "") {
      getproduct();
    }
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="bg-white py-8 mt-20 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product.img}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
                <div className="w-1/2 px-2">
                  <div className=" flex items-center justify-center w-full">
                    <div className="shadow-md rounded px-2 py-1">
                      <div className="flex justify-center items-center">
                        <button
                          onClick={decreaseCount}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                        >
                          -
                        </button>
                        <span className=" px-4 py-2">{count}</span>
                        <button
                          onClick={increaseCount}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                Product Name: {product.name}
              </h2>
              <p className="text-black text-sm mb-4">{product.brand}</p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-black">Price:</span>
                  <span className="text-black">${product.price}</span>
                </div>
                <div>
                  <span className="font-bold text-black">Availability:</span>
                  <span className="font-bold text-black">In Stock</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-black">Select Color:</span>
                <div className="flex items-center mt-2">
                  {product.colors &&
                    product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`w-6 h-6 rounded-full mr-4`}
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-black">Select Size:</span>
                <div className="flex items-center mt-2">
                  {product.sizes &&
                    product.sizes.map((size, index) => (
                      <button
                        key={index}
                        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                      >
                        {size}
                      </button>
                    ))}
                </div>
              </div>
              <div>
                <span className="font-bold  text-black">
                  Product Description:
                </span>
                <p className=" text-black text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
