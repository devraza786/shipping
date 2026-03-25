const cases = [
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/9b1de655ab4155749ef89d20b308831775e64579?width=1208",
    brand: "NovaWear",
    category: "D2C Apparel",
    tag: "Fulfillment",
  },
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/a27f7d542029aca591992f25b30d5a932a8991f3?width=612",
    brand: "FreshCrate",
    category: "Food & Grocery",
    tag: "Warehousing",
  },
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/f5edf897aa8772ec05c1283d238aab6b3029438e?width=612",
    brand: "OmniParts",
    category: "Auto Parts",
    tag: "Freight",
  },
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/b1065fec868a51571cfdab95b7be9b7d40579a4d?width=612",
    brand: "GreenLeaf",
    category: "Health & Beauty",
    tag: "Returns",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-dark-bg py-20 md:py-28">
      <div
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl overflow-hidden py-16 md:py-20 relative"
        style={{
          background: "linear-gradient(180deg, #151515 0%, #0A0A0A 27.36%)",
        }}
      >
        {/* Background image strip */}
        <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8de880d5b71654322d386b6d16003fa7daea345c?width=2616"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151515]" />
        </div>

        <div className="relative">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
            <span className="text-[#FAFAFA] text-base font-normal">Portfolio</span>
          </div>

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text"
              style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
            >
              Real Results From
              <br />
              <span className="text-white">Retailers</span> and Brands
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="bg-[#262626] rounded-2xl overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden h-64 md:h-80">
                  <img
                    src={c.img}
                    alt={c.brand}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-lg font-medium mb-1">{c.brand}</h3>
                    <p className="text-[#A3A3A3] text-base">{c.category}</p>
                  </div>
                  <span
                    className="px-5 py-2.5 rounded-lg text-[#E5E5E5] text-base"
                    style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}
                  >
                    {c.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
              style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
            >
              View All Cases
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
