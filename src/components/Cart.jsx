import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Reduxe/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId)); // Dispatch action to remove item
  };
  const formattedSubtotal = Number(subtotal);
  const makepayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OBw0FSC47WMjY7meNH5iPVNQEg9MH2wfZvLK1GrO9IVXhI5htPf1RpBYzE4BqpCOiTspriKf8HXIOMhiGhx0ZZi00eOrPl9EL"
    );
    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:3000/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <>
      <div className="h-screen bg-gray-100 pt-20 mb-10">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{item.price}</p>
                        <svg
                          // onClick={() => handleRemoveItem(item._id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
          {/* Subtotal */}
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">{formattedSubtotal}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">200</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping Discount</p>
              <p class="text-gray-700">-200</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">{formattedSubtotal}</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button
              class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              onClick={makepayment}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
