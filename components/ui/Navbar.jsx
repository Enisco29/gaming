"use client";
import { navLinks } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center p-[20px] pt-6 mx-[50px]">
      <div>LOGO</div>
      <div>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path} className="p-3">
            {link.name}
          </Link>
        ))}
      </div>
      <button
        onClick={() => router.push("contact")}
        className="bg-[#FA9021] p-3 px-8 text-white font-[400] rounded-md cursor-pointer"
      >
        contact us
      </button>
    </nav>
  );
};

export default Navbar;
