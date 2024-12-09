import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
function Products(){
    return (
       <div>
            <div className="w-full bg-[#272343] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
      <div className="flex justify-between items-center">
        {/* Left side with image and text */}
        <div className="flex items-center gap-2">
          <Image src="/check 1.png" alt="Free Shipping Icon" width={16} height={16} />
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
            <span className="sm:inline lg:hidden text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Free shipping over $50
            </span>
            <span className="hidden sm:hidden md:inline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-white">
              Free shipping on all orders over $50
            </span>
          </h1>
        </div>

        {/* Right side with language and help links */}
        <div className="flex items-center gap-4">
          {/* Language with arrow side by side */}
          <div className="flex items-center gap-1">
            <h1 className="text-white text-xs sm:text-sm font-normal">Eng</h1>
            <div>
              <Image src="/Vector.png" alt="Arrow Icon" width={7} height={3.5} />
            </div>
          </div>

          <div>
            <Link href="src/components/TopHeader"className="text-white font-normal text-xs sm:text-sm">Faqs</Link>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/sign.png" alt="Sign Icon" width={16} height={16} />
            <h1 className="font-normal text-xs sm:text-sm text-white">Need Help</h1>
          </div>
        </div>
      </div>
     </div>
     <main className="flex justify-between w-full h-[84px] bg-[#F0F2F3] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
          <div>
             <Image src="/logo.png" alt="" width={166} height={40}/>
          </div>
          <div>
            <Image src="/Cart.png" alt="" width={120} height={44}/>
          </div>
     </main>
      {/* Third Section: Navigation and Contact */}
      <main className="flex justify-between items-center w-full h-[84px] bg-[#ffffff] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
        <div className="flex items-center gap-8">
          <ul className="flex justify-between items-center gap-8">
            <li className="text-xs sm:text-sm hover:text-[#007580]">Home</li>
            <li className="text-xs sm:text-sm hover:text-[#007580]">Shop</li>
           <Link href="/Products"className="text-xs sm:text-sm hover:text-[#007580]">Product </Link>
            <li className="text-xs sm:text-sm hover:text-[#007580]">Pages</li>
            <li className="text-xs sm:text-sm hover:text-[#007580]">About</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-700">Contact:</p>
          <h1 className="text-xs sm:text-sm text-gray-700">(808) 555-0111</h1>
        </div>
       </main>

    
       <main className="w-full py-12 px-6 sm:px-12 md:px-16 lg:px-32">
      <h1 className="font-bold text-[32px] leading-[35.2px] text-[#272343] mb-8">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <span className="absolute top-4 left-4 bg-[#01AD5A] text-white text-xs px-2 py-1 rounded">
            New
          </span>
          <Image src="/card.png" alt="Product 1" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/Add Cart.png" alt="Cart" width={44} height={44} />
          </button>
        </div>

        {/* Card 2 */}
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

        {/* Card 3 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <Image src="/card3.png" alt="Product 3" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/cart1.png" alt="Cart" width={44} height={44} />
          </button>
        </div>

        {/* Card 4 */}
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
        {/* Card 5 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <span className="absolute top-4 left-4 bg-[#01AD5A] text-white text-xs px-2 py-1 rounded">
            New
          </span>
          <Image src="/stool.png" alt="Product 5" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/Add Cart.png" alt="Cart" width={44} height={44} />
          </button>
        </div>

        {/* Card 6 */}
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

        {/* Card 7 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <Image src="/image (8).png" alt="Product 7" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/cart1.png" alt="Cart" width={44} height={44} />
          </button>
        </div>

        {/* Card 8 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <Image src="/card.png" alt="Product 8" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/cart1.png" alt="Cart" width={44} height={44} />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 9 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <span className="absolute top-4 left-4 bg-[#01AD5A] text-white text-xs px-2 py-1 rounded">
            New
          </span>
          <Image src="/image1.png" alt="Product 9" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/Add Cart.png" alt="Cart" width={44} height={44} />
          </button>
        </div>

        {/* Card 10 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <span className="absolute top-4 left-4 bg-[#fc924c] text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
          <Image src="/card2.png" alt="Product 10" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/cart1.png" alt="Cart" width={44} height={44} />
          </button>
        </div>

        {/* Card 11 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <Image src="/card3.png" alt="Product 11" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/cart1.png" alt="Cart" width={44} height={44} />
          </button>
        </div>

        {/* Card 12 */}
        <div className="relative bg-[#F0F2F3] p-4 rounded-lg flex flex-col items-start">
          <Image src="/black.png" alt="Product 12" width={312} height={377} className="w-full h-auto mb-4" />
          <p className="text-[#007580] text-lg font-semibold mb-2">Library Stool Chair</p>
          <h1 className="text-[#272343] text-xl font-bold mb-4">$20</h1>
          <button className="ml-auto">
            <Image src="/cart1.png" alt="Cart" width={44} height={44} />
          </button>
        </div>
      </div>
    </main>

    <main className="w-full bg-[#1E28320D] py-16 px-4 md:px-12 lg:px-24 xl:px-48">
  {/* Newsletter Heading */}
  <div>
    <h2 className="font-medium text-3xl md:text-4xl lg:text-[50px] leading-tight text-center pb-10">
      Or subscribe to the newsletter
    </h2>
  </div>

  {/* Email and Submit Button */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-12">
    <p className="w-full sm:w-auto px-4 py-2 border-b-2 border-black text-[#1E2832] text-lg outline-none"> Email Address...
       </p>
    <button className="w-full sm:w-auto px-6 py-2 border-b-2 border-black text-[#1E2832] text-lg font-medium">
      SUBMIT
    </button>
  </div>

  <div>
    <h2 className="font-medium text-3xl md:text-4xl lg:text-[50px] leading-tight text-center">
      Follow products and discounts on Instagram
    </h2>
  </div>

  
  <div className="flex flex-wrap justify-center gap-6 pt-12">
    <Image src="/stool.png" alt="stool chair" width={186} height={186} className="w-40 h-40 object-cover" />
    <Image src="/image1.png" alt="chair" width={186} height={186} className="w-40 h-40 object-cover" />
    <Image src="/card2.png" alt="chair" width={186} height={186} className="w-40 h-40 object-cover" />
    <Image src="/card.png" alt="stool chair" width={186} height={186} className="w-40 h-40 object-cover" />
    <Image src="/card3.png" alt="stool chair" width={186} height={186} className="w-40 h-40 object-cover" />
    <Image src="/black.png" alt="stool chair" width={186} height={186} className="w-40 h-40 object-cover" />
  </div>
</main>



<Footer />

       </div>
    )
}

export default Products;