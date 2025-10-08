"use client";
import { navLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center p-[20px] bg-black pt-6 md:mx-[50px]">
      <div className="flex justify-between items-center gap-2 cursor-pointer">
        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
        LOGO
      </div>
      <div className="hidden md:block">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path} className="p-3">
            {link.name}
          </Link>
        ))}
      </div>
      <button
        onClick={() => router.push("contact")}
        className="bg-[#FA9021] p-3 px-8 text-white font-[400] rounded-md hidden md:block  cursor-pointer"
      >
        contact us
      </button>
      <button className="block md:hidden">
        <FaBars size={30} />
      </button>
    </nav>
  );
};

export default Navbar;
