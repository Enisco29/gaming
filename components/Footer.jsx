import { footerLinks, socialLinks } from "@/data/data";

const Footer = () => {
  return (
    <footer className="bg-[#070707] text-gray-300 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Loop through footer sections */}
        {footerLinks.map((section, index) => (
          <div key={index}>
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
        <div>
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
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zeux. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
