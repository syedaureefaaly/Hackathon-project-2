"use client"
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { Product } from '@/app/types/product';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { addToCart } from '@/app/action/actions';


const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  const { slug } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug) {
        try {
          const data: Product = await client.fetch(
            `*[_type == "products" && slug.current == $slug][0] {
              _id,
              title,
              slug,
              price,
              image {
                asset->{
                  _id,
                  url
                }
              },
              description,
              inventory,  // or this field can be ignored if addToCart sets default quantity
              category->{
                title,
                image,
                products
              },
              tags
            }`,
            { slug }
          );
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [slug]); 

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product); 
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }


  return (
    <div>
      <div className="w-full bg-[#272343] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
      <div className="flex justify-between items-center">
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

        <div className="flex items-center gap-4">
          {/* Language with arrow side by side */}
          <div className="flex items-center gap-1">
            <h1 className="text-white text-xs sm:text-sm font-normal">Eng</h1>
            <div>
              <Image src="/Vector.png" alt="Arrow Icon" width={7} height={3.5} />
            </div>
          </div>

          <div>
            <Link href="/Faqs"className="text-white font-normal text-xs sm:text-sm">Faqs</Link>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/sign.png" alt="Sign Icon" width={16} height={16} />
            <h1 className="font-normal text-xs sm:text-sm text-white">Need Help</h1>
          </div>
        </div>
      </div>
     </div>
    
     <main className="flex justify-between w-full h-[84px] bg-[#F0F2F3] py-4 px-6 sm:px-8 md:px-16 lg:px-32">
        <Image src="/logo.png" alt="Logo" width={166} height={40} />
        <Link href="/cart">
          <Image src="/Cart.png" alt="Cart" width={120} height={44} />
        </Link>
      </main> 
      
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.title}
                width={500}
                height={500}
                className="rounded-lg object-cover w-full max-w-md mx-auto"
              />
            )}
          </div>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-[42px] font-bold leading-[48px] md:leading-[63px]">
              {product.title}
            </h1>
            <div className="flex justify-center md:justify-start">
              <p className="bg-[#029FAE] text-white font-semibold text-lg border border-gray-300 rounded-md w-[144px] h-[44px] flex items-center justify-center">
                ${product.price.toFixed()}.00 USD
              </p>
            </div>
            <div className="border-t-2 w-full"></div>
            <p className="text-sm leading-6">{product.description}</p>
            <div className="flex justify-center md:justify-start">
              <button
                className="flex items-center justify-center border bg-[#029FAE] px-10 rounded-2xl w-auto h-[64px] shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <p className="text-[20px] leading-[30px] text-white font-semibold">
                  🛒 Add to Cart
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;

