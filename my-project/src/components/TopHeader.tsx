import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

function TopHeader() {
  return (
    <div>
      {/* Top Bar */}
      <div className="w-full bg-[#272343] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left side: Icon and Text */}
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
          {/* Right side: Language, Faqs & Help */}
          <div className="flex items-center gap-4">
            {/* Language with arrow */}
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
        <div>
          <Image src="/logo.png" alt="Logo" width={166} height={40} />
        </div>
        <div>
          <Link href="/cart">
            <Image src="/Cart.png" alt="Cart" width={120} height={44} />
          </Link>
        </div>
      </main>

      {/* Navigation and Contact */}
      <Navbar />

      {/* Hero Section */}
      <main className="w-full flex items-center justify-center bg-[#F0F2F3] py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] w-full gap-8">
          {/* Left Side Content */}
          <div className="flex flex-col items-start md:w-1/2">
            <p className="text-[14px] mb-4 text-[#555]">WELCOME TO CHAIRY</p>
            <h1 className="font-bold text-[32px] sm:text-[48px] md:text-[60px] leading-[1.2] text-[#272343] mb-6">
              Best Furniture Collection for your interior.
            </h1>
            <div className="w-[171px] h-[52px] rounded-lg py-[14px] px-6 bg-[#029FAE]">
              <button className="text-white text-sm sm:text-base">
                Shop Now {"->"}
              </button>
            </div>
          </div>
          {/* Right Side: Hero Image */}
          <div className="flex justify-end md:w-1/2">
            <Image
              src="/chair.png"
              alt="Chair Image"
              width={434}
              height={584}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </main>

      {/* Company Logo Section */}
      <main className="w-full px-6 sm:px-12 md:px-16 lg:px-32">
        <div className="flex justify-center">
          <Image src="/Company Logo.png" alt="Company Logo" width={1321} height={139} className="max-w-full h-auto" />
        </div>
      </main>

      {/* Featured Products */}
      <main className="w-full py-12 px-6 sm:px-12 md:px-16 lg:px-32">
        <h1 className="font-bold text-[32px] leading-[35.2px] text-[#272343] mb-8 text-center">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Card 1 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <span className="absolute top-4 left-4 bg-[#01AD5A] text-white text-xs px-2 py-1 rounded">
              New
            </span>
            <Image src="/card.png" alt="Product 1" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/Add Cart.png" alt="Add Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 2 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <span className="absolute top-4 left-4 bg-[#fc924c] text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
            <Image src="/card2.png" alt="Product 2" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 3 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <Image src="/card3.png" alt="Product 3" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 4 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <Image src="/card5.png" alt="Product 4" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
        </div>
      </main>

      {/* Top Categories */}
      <main className="w-full py-12 px-6 sm:px-12 md:px-16 lg:px-32">
        <h1 className="font-bold text-[32px] leading-[35.2px] text-[#272343] mb-8 text-center">
          Top categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image Card 1 */}
          <div className="relative group">
            <Image src="/image1.png" alt="Wing Chair" width={424} height={424} className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
              <h1 className="text-white text-lg font-semibold">Wing Chair</h1>
              <p className="text-white text-sm">3,584 Products</p>
            </div>
          </div>
          {/* Image Card 2 */}
          <div className="relative group">
            <Image src="/image2.png" alt="Wooden Chair" width={424} height={424} className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
              <h1 className="text-white text-lg font-semibold">Wooden Chair</h1>
              <p className="text-white text-sm">157 Products</p>
            </div>
          </div>
          {/* Image Card 3 */}
          <div className="relative group">
            <Image src="/image3.png" alt="Desk Chair" width={424} height={424} className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
              <h1 className="text-white text-lg font-semibold">Desk Chair</h1>
              <p className="text-white text-sm">154 Products</p>
            </div>
          </div>
        </div>
      </main>

      {/* Explore New and Popular Styles */}
      <main className="w-full py-12 px-6 sm:px-12 md:px-16 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto gap-8">
          {/* Left: Big Image & Heading */}
          <div className="flex flex-col items-start gap-6 lg:w-1/2">
            <Image
              src="/item-category 1.png"
              alt="New and Popular Styles"
              width={648}
              height={648}
              className="w-full max-w-[400px] lg:max-w-[648px] h-auto object-cover"
            />
            <div className="self-center lg:self-start">
              <h1 className="text-[28px] sm:text-[34px] leading-[39.84px] font-bold">
                Explore new and popular styles
              </h1>
            </div>
          </div>
          {/* Right: Grid of 4 Images */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2">
            <div className="relative">
              <Image src="/card5.png" alt="Category Item 1" width={312} height={312} className="w-full object-cover" />
            </div>
            <div className="relative">
              <Image src="/fancychair.png" alt="Category Item 2" width={312} height={312} className="w-full object-cover" />
            </div>
            <div className="relative">
              <Image src="/card.png" alt="Category Item 3" width={312} height={312} className="w-full object-cover" />
            </div>
            <div className="relative">
              <Image src="/card.png" alt="Category Item 4" width={312} height={312} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* Our Products Section */}
      <main className="w-full py-12 px-6 sm:px-12 md:px-16 lg:px-32">
        <h1 className="font-bold text-[32px] leading-[35.2px] text-[#272343] mb-8 text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Card 1 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <span className="absolute top-4 left-4 bg-[#01AD5A] text-white text-xs px-2 py-1 rounded">
              New
            </span>
            <Image src="/card.png" alt="Product 1" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/Add Cart.png" alt="Add Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 2 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <span className="absolute top-4 left-4 bg-[#fc924c] text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
            <Image src="/card2.png" alt="Product 2" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 3 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <Image src="/card3.png" alt="Product 3" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 4 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <Image src="/card5.png" alt="Product 4" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Card 5 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <span className="absolute top-4 left-4 bg-[#01AD5A] text-white text-xs px-2 py-1 rounded">
              New
            </span>
            <Image src="/image1.png" alt="Product 5" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/Add Cart.png" alt="Add Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 6 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <span className="absolute top-4 left-4 bg-[#fc924c] text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
            <Image src="/fancychair.png" alt="Product 6" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 7 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <Image src="/image (8).png" alt="Product 7" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
          {/* Product Card 8 */}
          <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
            <Image src="/card.png" alt="Product 8" width={312} height={377} className="w-full h-auto mb-4" />
            <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
            <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
            <button className="ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TopHeader;

