"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const router = useRouter();
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate background and blur using GSAP
  useEffect(() => {
    gsap.to(navRef.current, {
      backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      backgroundColor: isScrolled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [isScrolled]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="flex justify-between items-center px-5 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer font-semibold text-lg">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          LOGO
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-4 text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => router.push("/contact")}
          className="bg-[#FA9021] text-white font-medium px-6 py-2 rounded-md hidden md:block hover:bg-[#ff9f3f] transition"
        >
          Contact Us
        </button>

        {/* Mobile Menu */}
        <button className="block md:hidden text-white">
          <FaBars size={26} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
