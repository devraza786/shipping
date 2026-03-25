import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-bg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo + description */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5122edd474a0e535606834a87a4257d982d63b0e?width=612"
                alt="Apexus"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-[#A3A3A3] text-base leading-relaxed">
              Smart logistics solutions for growing brands. From warehousing to last-mile delivery.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#FAFAFA] text-base font-medium mb-6">Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#A3A3A3] text-base font-medium hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[#FAFAFA] text-base font-medium mb-6">Socials</h4>
            <ul className="space-y-4">
              {["LinkedIn", "Twitter / X", "Instagram", "Facebook"].map((social) => (
                <li key={social}>
                  <a href="#" className="text-[#A3A3A3] text-base font-medium hover:text-white transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#FAFAFA] text-base font-medium mb-3">Newsletter</h4>
            <p className="text-[#A3A3A3] text-base mb-6">
              Subscribe to get the latest updates.
            </p>
            <div className="flex items-center gap-2 bg-[#171717] rounded-lg overflow-hidden pr-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-4 text-[#737373] text-base outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand flex-shrink-0 hover:opacity-90 transition-opacity"
                style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.8906 6.96094L14.8359 8.03906L18.0469 11.25H3V12.75H18.0469L14.8359 15.9609L15.8906 17.0391L20.9297 12L15.8906 6.96094Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider + bottom row */}
        <div className="border-t border-[#262626] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#A3A3A3] text-base hover:text-white transition-colors">Privacy Policies</a>
            <a href="#" className="text-[#A3A3A3] text-base hover:text-white transition-colors">Terms of use</a>
          </div>
          <p className="text-[#A3A3A3] text-base">©2025 <a href="#" className="hover:text-white transition-colors">Apexus</a>. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white text-base font-medium hover:opacity-70 transition-opacity"
          >
            Back to Top
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 3.07031L6.96094 8.10938L8.03906 9.16406L11.25 5.95312V21H12.75V5.95312L15.9609 9.16406L17.0391 8.10938L12 3.07031Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
