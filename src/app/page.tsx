"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  return (
    <div className="min-h-screen max-w-full bg-gray-100 flex flex-col justify-between">
      <Header />
      <main className="p-6 flex-grow bg-[#1e3932] text-white max-w-screen">
        <section className="flex flex-col md:flex-row items-center text-left p-10 mx-auto gap-8">
          {/* Bagian Teks */}
          <div className="flex-1 h-auto">
            <h2 className="text-3xl font-bold">
              Pernyataan Starbucks Corporation
            </h2>
            <h3 className="text-2xl font-bold mt-2">
              Fakta Tentang Starbucks di Timur Tengah
            </h3>
            <p className="mt-6 text-lg">
              Melihat situasi global yang sedang terjadi saat ini, Starbucks
              Indonesia turut berduka cita dan menyatakan simpati yang terdalam
              bagi mereka yang menjadi korban, terluka, terlantar, dan terkena
              dampak akibat aksi yang keji.
            </p>
            {expanded ? (
              <p className="mt-4 text-lg">
                Kami dengan tegas menyatakan tidak mendukung tindakan yang
                mengandung kebencian dan kekerasan, sepenuhnya mendukung usaha
                perdamaian di dunia, serta berkomitmen untuk terus memberikan
                Starbucks Experience terbaik kepada semua konsumen.
              </p>
            ) : (
              <p className="mt-4 text-lg truncate">
                Kami dengan tegas menyatakan tidak mendukung tindakan yang
                mengandung kebencian...
              </p>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 px-6 py-2 bg-white text-green-900 font-semibold rounded-md"
            >
              {expanded ? "Tampilkan Lebih Sedikit" : "Baca Lebih Lanjut"}
            </button>
          </div>

          {/* Bagian Gambar */}
          <div className="relative w-[300px] h-[450px] md:w-[280px] md:h-[350px]">
            <Image
              src="/whimpsb.jpeg"
              alt="Starbucks Cup"
              width={300}
              height={450}
              className="rounded-md shadow-lg object-cover"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center text-white p-6 mx-auto max-w-6xl gap-8">
          <div className="relative flex-1 flex justify-center">
            <Image
              src="/sbfoundation.jpg"
              alt="Starbucks Foundation"
              width={500}
              height={300}
              className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-left max-w-xl mt-6">
            <h3 className="text-2xl font-bold mb-2">
              Starbucks Indonesia dan The Starbucks Foundation mengumumkan
              donasi bersama untuk memberikan bantuan kemanusiaan di Gaza
            </h3>
            {expanded2 ? (
              <p className="text-lg">
                Meskipun akar kami berada di Amerika Serikat, kami adalah
                perusahaan global dengan gerai yang tersebar di 86 pasar,
                termasuk lebih dari 1.900 gerai di 11 wilayah Timur Tengah dan
                Afrika Utara yang mempekerjakan lebih dari 19 ribu partner
                (sebutan untuk karyawan) yang mengenakan green apron...
              </p>
            ) : (
              <p className="text-lg truncate max-w-xl">
                Meskipun akar kami berada di Amerika Serikat, kami adalah
                perusahaan global dengan gerai yang tersebar di 86 pasar...
              </p>
            )}
            <button
              onClick={() => setExpanded2(!expanded2)}
              className="mt-6 px-6 py-2 bg-white text-green-900 font-semibold rounded-md"
            >
              {expanded2 ? "Tampilkan Lebih Sedikit" : "Baca Lebih Lanjut"}
            </button>
          </div>
        </section>
      </main>
      <main className="p-6 flex-grow text-black">
        <section className="flex flex-col md:flex-row items-center text-left py-20 max-w-4xl mx-auto gap-8">
          {/* Bagian Teks */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mt-2">Our Coffee</h1>
            <p className="mt-6 text-lg">
              Since 1971, it always has been and will always be about quality.
              We’re passionate about ethically sourcing only the finest Arabica
              coffee beans and roasting them with great care. Our passion for
              coffee is rivaled only by our love of sharing it.
            </p>
            <button className="mt-6 px-6 py-2 text-white bg-green-900 font-semibold rounded-md">
              {" "}
              Learn more
            </button>
          </div>

          {/* Bagian Gambar */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/firststore.webp"
              alt="Starbucks Cup"
              width={500}
              height={500}
              className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
