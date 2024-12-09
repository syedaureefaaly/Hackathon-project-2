import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

function Faqs (){
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
          
          <Link href="/Faqs" className="text-white font-normal text-xs sm:text-sm">Faqs</Link>
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
     
     <main className="w-full py-10 px-4">
      <div>
      <h2 className="font-bold text-3xl md:text-4xl lg:text-[48px] leading-[56px] text-[#333333] text-center pb-10">
      Questions Looks Here
     </h2>
      </div>
      <div>
        <p className="text-[#4f4f4f] text-center pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
      </div>
    
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xl">What types of chairs do you offer?</p>
        <span className="text-xl cursor-pointer">+</span>
      </div>
      <div className="text-[#4F4F4F] mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
    </div>

    
    <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xl">How can we get in touch with you?</p>
        <span className="text-xl cursor-pointer">+</span>
      </div>
      <div className="text-[#4f4f4f] mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
    </div>

    
    <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xl">Do your chairs come with a warranty?</p>
        <span className="text-xl cursor-pointer">+</span>
      </div>
      <div className="text-[#4f4f4f] mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
    </div>

    
    <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xl">What will be delivered? And When??</p>
        <span className="text-xl cursor-pointer">+</span>
      </div>
      <div className="text-[#4f4f4f] mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
    </div>

    
    <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xl">Can I try a chair before purchasing?</p>
        <span className="text-xl cursor-pointer">+</span>
      </div>
      <div className="text-[#4f4f4f] mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
    </div>

    
    <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xl">How do I clean and maintain my Comforty chair?</p>
        <span className="text-xl cursor-pointer">+</span>
      </div>
      <div className="text-[#4f4f4f] mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
    </div>
  </div>
</main>
    <Footer />
    </div>
    )
}

export default Faqs;