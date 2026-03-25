import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur strip */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0) 100%)",
          backdropFilter: "blur(4px)",
        }}
      />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[70px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/12e76f523a83ffb34cc4953d94a9f3219ed4cb24?width=234"
            alt="Apexus"
            className="h-5 md:h-6 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Pages", "Services", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#FAFAFA] text-sm font-normal hover:text-brand transition-colors flex items-center gap-1"
            >
              {item}
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path
                  d="M2.08789 4.14844L1.54883 4.6875L6.23633 9.375L6.50586 9.63281L6.77539 9.375L11.4629 4.6875L10.9238 4.14844L6.50586 8.56641L2.08789 4.14844Z"
                  fill="#FAFAFA"
                />
              </svg>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg bg-brand text-white text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
        >
          Get a Quote
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-bg border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {["Home", "Pages", "Services", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-base font-medium py-2 border-b border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="brand-btn text-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
