import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Header />
      <main className="p-6 flex-grow bg-[#1e3932] text-white">
        <section className="text-left py-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <Image src="/beverages.png" alt="Starbucks Beverages" width={600} height={400} className="rounded-md"></Image>
            <h2 className="text-2xl font-bold mt-4">STARBUCKS BEVERAGES</h2>
            <p className="mt-2 text-lg italic">Amazing coffees from around the world. Handcrafted beverages to discover and enjoy.</p>
            <Link href="/menu/beverage">
              <button className="mt-4 px-6 py-2 bg-white text-green-900 font-semibold rounded-md cursor-pointer">Explore More »</button>
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <Image src="/freshfood.png" alt="Fresh Food" width={600} height={400} className="rounded-md"></Image>
            <h2 className="text-2xl font-bold mt-4">FRESH FOOD</h2>
            <p className="mt-2 text-lg italic">Our pastries and sandwiches are made with high-quality, simple ingredients.</p>
            <Link href="/menu/freshfood">
              <button className="mt-4 px-6 py-2 bg-white text-green-900 font-semibold rounded-md cursor cursor-pointer">Explore More »</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
