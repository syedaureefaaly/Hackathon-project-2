"use client"
import { Product } from '@/app/types/product';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const fetchProducts = async () => {
       try {
         const productsData: Product[] = await client.fetch(`*[_type == "products"]{
           _id,
          title,
           "slug": slug.current,
           price,
           priceWithoutDiscount,
           badge,
           image {
             asset->{
               _id,
               url
             }
           },
           description,
           inventory,
           category->{
             title
           },
           tags
         }`);
         console.log(productsData);  // Check if data is fetched properly
         setProducts(productsData);
         setLoading(false);
       } catch (error) {
         console.error("Error fetching products:", error);
         setLoading(false);
       }
     };

     fetchProducts();
   }, []);

   if (loading) {
     return <p>Loading...</p>;
   }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product , index) => (
        <Link key={index} href={`/product/${product.slug}`}>
          <div className='bg-[#F0F2F3] p-4 rounded-lg'>
            {product.image && (
              <Image 
                src={urlFor(product.image).url()}
                alt='image'
                width={312}
                height={312}
                className="w-full h-auto mb-4"
              />
            )}
            <h2 className="text-[#007580] text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-[#272343] text-xl font-bold mb-4"> ${product.price}</p>
            <button className="flex justify-items-end ml-auto">
              <Image src="/cart1.png" alt="Cart" width={44} height={44} 
                className='hover:scale-110 transition-transform hover:bg-[#007580]' />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
