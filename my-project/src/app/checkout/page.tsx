'use client'

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Product } from '../types/product';
import { getCartItems } from '../action/actions';

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      email: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        zipCode: false,
        phone: false,
        email: false,
      });

      useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
          setDiscount(Number(appliedDiscount));
        }
      }, []);

      const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory,
        0
      );
      const total = Math.max(subtotal - discount, 0);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
          ...formValues,
          [e.target.id]: e.target.value,
        });
      };

      const validateForm = () => {
        const errors = {
          firstName: !formValues.firstName,
          lastName: !formValues.lastName,
          address: !formValues.address,
          city: !formValues.city,
          zipCode: !formValues.zipCode,
          phone: !formValues.phone,
          email: !formValues.email,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
      };

      const handlePlaceOrder = () => {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
        
        } else {

        }
      };
    
 
return (
    <div>
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
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 w-full max-w-3xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Information</h2>
    
    {/* First and Last Name */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
          First Name
        </label>
        <input
          id="firstName"
          placeholder="Enter your first name"
          value={formValues.firstName}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formErrors.firstName && (
          <p className="mt-1 text-sm text-red-500">
            First name is required.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
          Last Name
        </label>
        <input
          id="lastName"
          placeholder="Enter your last name"
          value={formValues.lastName}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formErrors.lastName && (
          <p className="mt-1 text-sm text-red-500">
            Last name is required.
          </p>
        )}
      </div>
    </div>
    
    {/* Address */}
    <div className="mt-4">
      <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
        Address
      </label>
      <input
        id="address"
        placeholder="Enter your address"
        value={formValues.address}
        onChange={handleInputChange}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {formErrors.address && (
        <p className="mt-1 text-sm text-red-500">
          Address is required.
        </p>
      )}
    </div>
    
    {/* City and Zip Code */}
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
          City
        </label>
        <input
          id="city"
          placeholder="Enter your city"
          value={formValues.city}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formErrors.city && (
          <p className="mt-1 text-sm text-red-500">
            City is required.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-1">
          Zip Code
        </label>
        <input
          id="zipCode"
          placeholder="Enter your zip code"
          value={formValues.zipCode}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formErrors.zipCode && (
          <p className="mt-1 text-sm text-red-500">
            Zip Code is required.
          </p>
        )}
      </div>
    </div>
    
    {/* Phone and Email */}
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
          Phone
        </label>
        <input
          id="phone"
          placeholder="Enter your phone number"
          value={formValues.phone}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formErrors.phone && (
          <p className="mt-1 text-sm text-red-500">
            Phone is required.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email address"
          value={formValues.email}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formErrors.email && (
          <p className="mt-1 text-sm text-red-500">
            Email is required.
          </p>
        )}
      </div>
    </div>
    
    {/* Place Order Button */}
    <button
      className="mt-8 w-full bg-[#029FAE] text-white py-3 rounded-md font-semibold hover:bg-[#028ea3] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={handlePlaceOrder}
    >
      Place Order
    </button>
  </div>
</div>

   
    <Footer />
    </div>
  )
}

export default Checkout;
