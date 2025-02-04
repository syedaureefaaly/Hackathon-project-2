import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductList from "@/app/product/page";

const Products = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="w-full bg-[#272343] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left side with image and text */}
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Image src="/check 1.png" alt="Free Shipping Icon" width={16} height={16} />
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
              <span className="block sm:hidden">
                Free shipping over $50
              </span>
              <span className="hidden sm:block">
                Free shipping on all orders over $50
              </span>
            </h1>
          </div>
          {/* Right side with language and help links */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <h1 className="text-white text-xs sm:text-sm font-normal">Eng</h1>
              <div>
                <Image src="/Vector.png" alt="Arrow Icon" width={7} height={3.5} />
              </div>
            </div>
            <div>
              <Link href="/Faqs" className="text-white font-normal text-xs sm:text-sm">
                Faqs
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/sign.png" alt="Sign Icon" width={16} height={16} />
              <h1 className="font-normal text-xs sm:text-sm text-white">Need Help</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section with Cart Icon */}
      <main className="flex justify-between items-center w-full h-[84px] bg-[#F0F2F3] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
        <Image src="/logo.png" alt="Logo" width={166} height={40} />
        <Link href="/cart">
          <Image src="/Cart.png" alt="Cart" width={120} height={44} />
        </Link>
      </main>

      {/* Main Navbar */}
      <Navbar />

      {/* All Products Heading and List */}
      <main className="w-full py-12 px-6 sm:px-12 md:px-16 lg:px-32">
        <h1 className="font-bold text-[32px] leading-[35.2px] text-[#272343] mb-8">
          All Products
        </h1>
        <ProductList />
      </main>

      {/* Newsletter & Instagram Section */}
      <main className="w-full bg-[#1E28320D] py-16 px-4 md:px-12 lg:px-24 xl:px-48">
        {/* Newsletter Heading */}
        <div>
          <h2 className="font-medium text-3xl md:text-4xl lg:text-[50px] leading-tight text-center pb-10">
            Or subscribe to the newsletter
          </h2>
        </div>
        {/* Email Input & Submit Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-12">
          <p className="w-full sm:w-auto px-4 py-2 border-b-2 border-black text-[#1E2832] text-lg outline-none">
            Email Address...
          </p>
          <button className="w-full sm:w-auto px-6 py-2 border-b-2 border-black text-[#1E2832] text-lg font-medium">
            SUBMIT
          </button>
        </div>
        {/* Instagram Follow Section */}
        <div>
          <h2 className="font-medium text-3xl md:text-4xl lg:text-[50px] leading-tight text-center">
            Follow products and discounts on Instagram
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-12">
          <Image
            src="/stool.png"
            alt="stool chair"
            width={186}
            height={186}
            className="w-40 h-40 object-cover"
          />
          <Image
            src="/image1.png"
            alt="chair"
            width={186}
            height={186}
            className="w-40 h-40 object-cover"
          />
          <Image
            src="/card2.png"
            alt="chair"
            width={186}
            height={186}
            className="w-40 h-40 object-cover"
          />
          <Image
            src="/card.png"
            alt="stool chair"
            width={186}
            height={186}
            className="w-40 h-40 object-cover"
          />
          <Image
            src="/card3.png"
            alt="stool chair"
            width={186}
            height={186}
            className="w-40 h-40 object-cover"
          />
          <Image
            src="/black.png"
            alt="stool chair"
            width={186}
            height={186}
            className="w-40 h-40 object-cover"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
