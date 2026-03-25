export default function AboutSection() {
  return (
    <section className="bg-[#EEEEEE] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Truck image */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c4ab5db56da1b1f28a49ca8125ada78df0b0d350?width=1272"
              alt="Logistics truck"
              className="w-full max-w-[520px] object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2
              className="font-medium text-2xl md:text-3xl lg:text-4xl text-[#0A0A0A]"
              style={{ letterSpacing: "-0.36px", lineHeight: "1.33" }}
            >
              At Apexus, we believe logistics should be the easiest part of your business
            </h2>
            <p className="text-[#404040] text-base leading-relaxed">
              With years of experience in third-party logistics, we provide end-to-end solutions that keep your supply chain running smoothly – from warehousing and order fulfillment to nationwide shipping and real-time tracking. Our mission is simple: to help businesses scale without limits.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
              style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
            >
              Learn More
            </a>

            {/* Stats */}
            <div className="pt-6 space-y-8">
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <div className="flex items-end">
                  <span
                    className="font-normal leading-none"
                    style={{
                      fontSize: "clamp(5rem,12vw,9rem)",
                      letterSpacing: "-6px",
                      background: "linear-gradient(180deg, #0A0A0A 0%, rgba(10,10,10,0.70) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    10
                  </span>
                  <span className="text-[#0A0A0A] font-normal text-5xl leading-none mb-2" style={{ letterSpacing: "-6px" }}>+</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-24 h-px" style={{ background: "linear-gradient(270deg, rgba(255,255,255,0) 3.98%, rgba(255,255,255,0.40) 49.67%, rgba(255,255,255,0) 95.35%), #A3A3A3" }} />
                  <p className="gradient-text-brand font-medium text-lg">Years serving eCommerce brands</p>
                  <p className="text-[#404040] text-sm leading-relaxed">Providing reliable logistics solutions for online businesses</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <div className="flex items-end">
                  <span
                    className="font-normal leading-none"
                    style={{
                      fontSize: "clamp(5rem,12vw,9rem)",
                      letterSpacing: "-6px",
                      background: "linear-gradient(180deg, #0A0A0A 0%, rgba(10,10,10,0.70) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    99
                  </span>
                  <span className="text-[#0A0A0A] font-normal text-4xl leading-none mb-2" style={{ letterSpacing: "-6px" }}>%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-24 h-px" style={{ background: "linear-gradient(270deg, rgba(255,255,255,0) 3.98%, rgba(255,255,255,0.40) 49.67%, rgba(255,255,255,0) 95.35%), #A3A3A3" }} />
                  <p className="gradient-text-brand font-medium text-lg">On-Time order fulfillment rate</p>
                  <p className="text-[#404040] text-sm leading-relaxed">We ensure that every single order leaves our warehouse on schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
