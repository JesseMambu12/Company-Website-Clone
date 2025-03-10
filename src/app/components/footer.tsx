import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => (
    <footer className="bg-gray-900 text-white p-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/starbuckslogo.png"
            alt="Company Logo"
            width={48}
            height={48}
          />
          <p className="mt-8 text-sm">
            &copy; 2025 Starbucks Indonesia. All rights reserved.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2 items-center">
            <FaFacebookSquare className="text-gray-400 hover:text-white w-8 h-8"/>
            <RiTwitterXLine href="#" className="text-gray-400 hover:text-white w-8 h-8"/>
            <FaSquareInstagram href="#" className="text-gray-400 hover:text-white w-8 h-8"/>
          </div>
        </div>
      </div>
    </footer>
  );

  export default Footer;