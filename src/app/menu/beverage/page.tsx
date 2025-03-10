'use client'
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
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
        const response = await axios.get("http://localhost:3001/api/products");
        setProducts(response.data.data);
        // console.log(response.data.data)
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
      <main className="p-6 flex-grow bg-white text-gray-900">
        <section className="text-center py-20 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Bringing you a perfect cup of coffee.</h1>
          <p className="mt-4 text-lg">
            It’s what got us started in 1971, and it’s what keeps us going today. (That, plus the coffee.)
          </p>
          <p className="mt-2 text-md text-gray-600">
            That’s why our coffee buyers travel the world, carefully selecting the finest beans. That’s why our master roasters stand watch over each batch, bringing each bean to its peak of flavor. And that’s why our friendly baristas handcraft each beverage to your order.
          </p>
        </section>
        <div className="max-w-5xl mx-auto px-4">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {products.map((data, index) => (
            <div
              key={index}
              className="card bg-white text-black cursor-pointer"
            >
              <figure className="max-h-40">
                <Image width={500} height={500} src={data.ImageURL} alt="" />
              </figure>
              <div className="card-body bg-gray-300">
                <h2 className="card-title">{data.Name}</h2>
                <p className="text-sm">{data.Weight}</p>
                <p>{data.Price}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#1e3932] text-white btn-primary border-none shadow-none">Buy Now</button>
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
