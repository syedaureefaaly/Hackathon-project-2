import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white w-full py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto border-b border-gray-300 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <Image src="/Logo.png" alt="logo" width={166} height={40} />
            <p className="mt-3 text-[16px] leading-6 text-[#9f9f9f]">
              Vivamus tristique odio sit amet velit semper eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="mt-4">
              <Image src="/sociallinks.png" alt="links" width={206} height={38} />
            </div>
          </div>

          {/* Category Links */}
          <div>
            <h1 className="mb-4 font-medium text-[16px] leading-6 text-[#9f9f9f]">
              CATEGORY
            </h1>
            <ul className="space-y-2 text-[#272343]">
              <li className="cursor-pointer hover:text-[#029FAE]">Sofa</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Armchair</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Wing Chair</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Desk Chair</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Wooden Chair</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Park Bench</li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h1 className="mb-4 font-medium text-[16px] leading-6 text-[#9f9f9f]">
              SUPPORT
            </h1>
            <ul className="space-y-2 text-[#272343]">
              <li className="cursor-pointer hover:text-[#029FAE]">Help & Support</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Terms & Conditions</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Privacy Policy</li>
              <li className="cursor-pointer hover:text-[#029FAE]">Help</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h1 className="mb-4 font-medium text-[16px] leading-6 text-[#9f9f9f]">
              NEWSLETTERS
            </h1>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-[46px] border border-gray-300 rounded-lg px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
            />
            <button className="w-full h-[46px] bg-[#029FAE] text-white rounded-lg hover:bg-[#028ea3] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8">
        <p className="text-center text-[16px] text-[#9F9F9F]">
          © 2021 - Blogy - Designed & Developed by SyedaUreefaAly
        </p>
      </div>
    </footer>
  );
}

export default Footer;
