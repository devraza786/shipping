export default function ServicesSection() {
  return (
    <section id="services" className="bg-dark-bg py-20 md:py-28">
      {/* Section Label */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
        <span className="text-[#A3A3A3] text-base font-normal">Our Services</span>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2
          className="font-medium text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-tight gradient-text"
          style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
        >
          Complete Shipping
          <br />
          Solutions for Global Trade
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Row 1: Wide left + Small right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.42fr_1fr] gap-6">
          {/* Wide Card: Warehousing & Storage */}
          <div className="relative rounded-2xl bg-[#171717] overflow-hidden min-h-[400px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f4bcc05d5abe8d8801ec3f3901f507ac4e4f45ad?width=1492"
              alt="Warehousing"
              className="absolute inset-0 w-full h-full object-cover mix-blend-difference opacity-60"
            />
            <div className="relative p-10 h-full flex flex-col justify-between min-h-[400px]">
              <div
                className="inline-flex items-center px-6 py-2.5 rounded-lg text-[#E5E5E5] text-base self-start"
                style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}
              >
                Global Port Access
              </div>
              <div className="mt-auto">
                <h3 className="text-white text-3xl md:text-4xl font-medium mb-3" style={{ letterSpacing: "-0.36px" }}>
                  Import & Export Services
                </h3>
                <p className="text-[#A3A3A3] text-base leading-relaxed max-w-lg">
                  Full-service import and export solutions with access to major international ports and seamless global shipping networks.
                </p>
              </div>
            </div>
          </div>

          {/* Small Card: number 01 */}
          <div className="relative rounded-2xl bg-[#171717] overflow-hidden min-h-[400px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/72638565f3ff37fed828322c8e6eddffdb4ca4af?width=1210"
              alt="Service"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div
              className="absolute left-0 top-0 flex items-center justify-center font-light text-[#ffffff] select-none pointer-events-none"
              style={{
                fontSize: "clamp(8rem,30vw,22rem)",
                lineHeight: "1",
                letterSpacing: "-12px",
                background: "linear-gradient(180deg, #FFF 0%, rgba(255,255,255,0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                left: "-40px",
                top: "20px",
              }}
            >
              01
            </div>
          </div>
        </div>

        {/* Row 2: Small left + Wide right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.42fr] gap-6">
          {/* Small Card: number 02 */}
          <div className="relative rounded-2xl bg-[#171717] overflow-hidden min-h-[400px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/72638565f3ff37fed828322c8e6eddffdb4ca4af?width=1210"
              alt="Service"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div
              className="absolute left-0 top-0 flex items-center justify-center font-light select-none pointer-events-none"
              style={{
                fontSize: "clamp(8rem,30vw,22rem)",
                lineHeight: "1",
                letterSpacing: "-12px",
                background: "linear-gradient(180deg, #FFF 0%, rgba(255,255,255,0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                left: "-40px",
                top: "20px",
              }}
            >
              02
            </div>
          </div>

          {/* Wide Card: Order Fulfillment */}
          <div className="relative rounded-2xl bg-[#171717] overflow-hidden min-h-[400px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f4bcc05d5abe8d8801ec3f3901f507ac4e4f45ad?width=1492"
              alt="Order Fulfillment"
              className="absolute inset-0 w-full h-full object-cover mix-blend-difference opacity-60"
            />
            <div className="relative p-10 h-full flex flex-col justify-between min-h-[400px]">
              <div
                className="inline-flex items-center px-6 py-2.5 rounded-lg text-[#E5E5E5] text-base self-start"
                style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}
              >
                Customs Made Simple
              </div>
              <div className="mt-auto">
                <h3 className="text-white text-3xl md:text-4xl font-medium mb-3" style={{ letterSpacing: "-0.36px" }}>
                  Customs Clearance
                </h3>
                <p className="text-[#A3A3A3] text-base leading-relaxed max-w-lg">
                  Expert customs documentation and clearance services to ensure your shipments move smoothly through international borders without delays.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Wide right + Small left */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.42fr] gap-6">
          {/* Small Card: number 03 */}
          <div className="relative rounded-2xl bg-[#171717] overflow-hidden min-h-[400px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/72638565f3ff37fed828322c8e6eddffdb4ca4af?width=1210"
              alt="Service"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div
              className="absolute left-0 top-0 flex items-center justify-center font-light select-none pointer-events-none"
              style={{
                fontSize: "clamp(8rem,30vw,22rem)",
                lineHeight: "1",
                letterSpacing: "-12px",
                background: "linear-gradient(180deg, #FFF 0%, rgba(255,255,255,0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                left: "-40px",
                top: "20px",
              }}
            >
              03
            </div>
          </div>

          {/* Wide Card: Freight & Transportation */}
          <div className="relative rounded-2xl bg-[#171717] overflow-hidden min-h-[400px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f4bcc05d5abe8d8801ec3f3901f507ac4e4f45ad?width=1492"
              alt="Freight Transportation"
              className="absolute inset-0 w-full h-full object-cover mix-blend-difference opacity-60"
            />
            <div className="relative p-10 h-full flex flex-col justify-between min-h-[400px]">
              <div
                className="inline-flex items-center px-6 py-2.5 rounded-lg text-[#E5E5E5] text-base self-start"
                style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}
              >
                Competitive Vessel Rates
              </div>
              <div className="mt-auto">
                <h3 className="text-white text-3xl md:text-4xl font-medium mb-3" style={{ letterSpacing: "-0.36px" }}>
                  Vessel Booking & Freight
                </h3>
                <p className="text-[#A3A3A3] text-base leading-relaxed max-w-lg">
                  Access competitive freight rates and reliable vessel bookings with our established relationships with major shipping lines worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
