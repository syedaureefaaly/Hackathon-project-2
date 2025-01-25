import Link from "next/link";
function Navbar(){
    return (
        <div>
            <main className="flex justify-between items-center w-full h-[84px] bg-[#ffffff] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
  {/* Navigation Section */}
  <div className="flex items-center gap-8">
    <ul className="hidden md:flex justify-between items-center gap-8">
      <Link href="/" className="text-xs sm:text-sm hover:text-[#007580]">
        Home
      </Link>
      <li className="text-xs sm:text-sm hover:text-[#007580]">Shop</li>
      <Link href="/Products" className="text-xs sm:text-sm hover:text-[#007580]">
        Product
      </Link>
      <li className="text-xs sm:text-sm hover:text-[#007580]">Pages</li>
      <li className="text-xs sm:text-sm hover:text-[#007580]">About</li>
    </ul>

    {/* Hamburger Menu for Small Screens */}
    <div className="md:hidden">
      <label htmlFor="menu-toggle" className="cursor-pointer">
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </label>
    </div>
  </div>

  {/* Hidden Checkbox for Menu Toggle */}
  <input type="checkbox" id="menu-toggle" className="hidden peer" />

  {/* Mobile Navigation */}
  <ul
    className="flex-col gap-4 py-4 px-6 bg-white shadow-md absolute top-[84px] left-0 w-full hidden peer-checked:flex md:hidden"
  >
    <Link href="/" className="text-xs sm:text-sm hover:text-[#007580]">
      Home
    </Link>
    <li className="text-xs sm:text-sm hover:text-[#007580]">Shop</li>
    <Link href="/Products" className="text-xs sm:text-sm hover:text-[#007580]">
      Product
    </Link>
    <li className="text-xs sm:text-sm hover:text-[#007580]">Pages</li>
    <li className="text-xs sm:text-sm hover:text-[#007580]">About</li>
  </ul>

  {/* Contact Section */}
  <div className="flex items-center gap-4">
    <p className="text-xs sm:text-sm text-gray-700">Contact:</p>
    <h1 className="text-xs sm:text-sm text-gray-700">(808) 555-0111</h1>
  </div>
</main>
 </div>
    )
}

export default Navbar;