'use client'
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import Image from "next/image";

interface Product {
  id: number;
  Name: string;
  Weight: string;
  Price: string;
  ImageURL: string;
}

const Beverages = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleGetProducts = async () => {
    try {
      const response = await axios.get("https://company-website-clone.vercel.app/api/products");
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Header />
      <main className="p-4 sm:p-6 flex-grow bg-white text-gray-900">
        <section className="text-center py-10 sm:py-20 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold">Bringing you a perfect cup of coffee.</h1>
          <p className="mt-4 text-base sm:text-lg">
            It’s what got us started in 1971, and it’s what keeps us going today. (That, plus the coffee.)
          </p>
          <p className="mt-2 text-sm sm:text-md text-gray-600">
            That’s why our coffee buyers travel the world, carefully selecting the finest beans. That’s why our master roasters stand watch over each batch, bringing each bean to its peak of flavor. And that’s why our friendly baristas handcraft each beverage to your order.
          </p>
        </section>
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((data, index) => (
              <div
                key={index}
                className="bg-white text-black cursor-pointer rounded-lg shadow-md overflow-hidden"
              >
                <figure className="w-full h-48 sm:h-40 relative">
                  <Image 
                    src={data.ImageURL} 
                    alt={data.Name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-lg"
                  />
                </figure>
                <div className="p-4 bg-gray-300">
                  <h2 className="text-lg font-semibold">{data.Name}</h2>
                  <p className="text-sm text-gray-700">{data.Weight}</p>
                  <p className="text-md font-medium">{data.Price}</p>
                  <div className="mt-3 text-right">
                    <button className="w-full sm:w-auto bg-[#1e3932] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#162d28]">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Beverages;