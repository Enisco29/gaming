"use client";

import { useRef, useEffect } from "react";
import { footerLinks, socialLinks } from "@/data/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray(".footer-column");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(columns, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(
        ".footer-bottom",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#070707] text-gray-300 py-12 px-6 md:px-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Loop through footer sections */}
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-column">
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>

            {/* Render description if available */}
            {section.description && (
              <p className="text-sm mb-3 leading-relaxed">
                {section.description}
              </p>
            )}

            {/* Render list if links exist */}
            {Array.isArray(section.links) && (
              <ul className="flex flex-col space-y-2 mt-2">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}

            {/* Render phone if available */}
            {section.phone && (
              <p className="text-sm mt-3 font-medium">{section.phone}</p>
            )}
          </div>
        ))}

        {/* Fourth column: social icons */}
        <div className="footer-column">
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="w-9 h-9 flex items-center justify-center bg-white text-black hover:bg-gray-700 rounded-full transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider and footer note */}
      <div className="footer-bottom mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zeux. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
