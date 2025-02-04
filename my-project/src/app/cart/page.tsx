"use client";

import { Product } from "../types/product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../action/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  //  Load cart items & listen for updates
  useEffect(() => {
    setCartItems(getCartItems());

    // Listen for cart updates
    const handleCartUpdate = () => setCartItems(getCartItems());
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  //  Remove item from cart
  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  //  Increment quantity
  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      updateCartQuantity(id, product.inventory + 1);
    }
  };

  //  Decrement quantity (prevent below 1)
  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      updateCartQuantity(id, product.inventory - 1);
    }
  };

  //  Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };
 
const subtotal = calculateTotal();
const tax = subtotal * 0.08; // 8% tax
const shipping = subtotal > 100 ? 0 : 5; // Free shipping for orders above $100, otherwise $5
const total = subtotal + tax + shipping;
  return (
    <div>
      {/* Top Bar */}
      <div className="w-full bg-[#272343] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/check 1.png" alt="Free Shipping Icon" width={16} height={16} />
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
              Free shipping on all orders over $50
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/Faqs" className="text-white font-normal text-xs sm:text-sm">
              Faqs
            </Link>
            <div className="flex items-center gap-2">
              <Image src="/sign.png" alt="Sign Icon" width={16} height={16} />
              <h1 className="font-normal text-xs sm:text-sm text-white">Need Help</h1>
            </div>
          </div>
        </div>
      </div>

    {/* Navbar & Cart Icon */}

    <main className="flex justify-between w-full h-[84px] bg-[#F0F2F3] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
        <Image src="/logo.png" alt="Logo" width={166} height={40} />
        <Link href="/cart">
          <Image src="/Cart.png" alt="Cart" width={120} height={44} />
        </Link>
      </main> 

      <Navbar />

      {/* Shopping Cart */}
      <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Shopping Cart</h1>
      <div className="lg:flex lg:space-x-8">
        
        {/* Left - Cart Items List */}
        <div className="flex-1 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="py-4 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mt-1">${item.price}</p>

                    {/* Category */}
                    {item.category && (
                      <div className="mt-2 flex items-center space-x-2">
                        {item.category.image && (
                          <Image
                            src={urlFor(item.category.image).url()}
                            alt={item.category.title}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        )}
                        <div>
                          <p className="text-gray-500 text-sm">
                            Category: {item.category.title}
                          </p>
                          <p className="text-gray-500 text-xs">
                            Products: {item.category.products}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Quantity & Actions */}
                    <div className="flex items-center mt-3 space-x-4">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="text-gray-600 hover:text-gray-800 transition"
                      >
                        ➖
                      </button>
                      <span className="font-bold text-lg text-gray-800">
                        {item.inventory}
                      </span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="text-gray-600 hover:text-gray-800 transition"
                      >
                        ➕
                      </button>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="text-red-500 hover:text-red-600 transition"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Right - Order Summary */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md lg:mt-0 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            
            {/* Summary Details */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal:</span>
                <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Tax (8%):</span>
                <span className="font-medium text-gray-800">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shipping:</span>
                <span className="font-medium text-gray-800">${shipping.toFixed(2)}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-lg">
                <span className="font-bold text-gray-700">Total:</span>
                <span className="font-bold text-gray-800">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Link href={`/checkout`}>
              <button className="mt-6 w-full bg-[#029FAE] text-white py-3 rounded-md hover:bg-[#028ea3] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>

      <Footer />
    </div>
  );
};

export default CartPage;

