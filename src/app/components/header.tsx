"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative border-b-2 border-gray-200">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/starbuckslogo.png"
            alt="Company Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-6 text-black text-lg font-medium uppercase">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/coffeehouse">Coffeehouse</Link>
        <Link href="/services">Dewata</Link>
        <Link href="/rewards">Starbucks Rewards</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/about-us">About Us</Link>
      </nav>
      <GiHamburgerMenu
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-black text-3xl mr-2 md:hidden"
      />
      {menuOpen && (
        <div className="absolute top-full left-0 text-black w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link href="/coffeehouse" onClick={() => setMenuOpen(false)}>
            Coffeehouse
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/rewards" onClick={() => setMenuOpen(false)}>
            Starbucks Rewards
          </Link>
          <Link href="/teams" onClick={() => setMenuOpen(false)}>
            Teams
          </Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
