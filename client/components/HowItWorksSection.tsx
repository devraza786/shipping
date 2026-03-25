const steps = [
  {
    number: "01",
    title: "Discovery & Quote",
    description: "Share SKUs, order volumes, and destinations. We tailor a fulfillment plan with transparent pricing and SLAs.",
  },
  {
    number: "02",
    title: "Send Inventory In",
    description: "Ship stock to the nearest warehouse. We receive, QA, barcode, and slot everything for fast pick/pack.",
  },
  {
    number: "03",
    title: "Go Live & Grow",
    description: "Connect your store, set your shipping rules, and start fulfilling. Our team monitors every order from day one.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `url('https://api.builder.io/api/v1/image/assets/TEMP/fb9c27d2b2031d85129a5701e2293d28d81311ac?width=3820') lightgray center / cover no-repeat, #0A0A0A`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-bg/80" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
          <span className="text-[#FAFAFA] text-base font-normal">How It Work</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2
            className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text"
            style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
          >
            From Setup To Shipping
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-[#D4D4D4] text-base text-center max-w-md mx-auto mb-8">
          A dedicated success manager and clear milestones keep every step simple, transparent, and on schedule.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
          >
            Get Started
          </a>
        </div>

        {/* Steps + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-1 flex-1 rounded-t-lg" style={{ background: i === 0 ? "#FE5631" : "rgba(255,255,255,0.20)", minHeight: "40px" }} />
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 my-1">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path d="M14.6006 7.59397C14.999 7.82834 15.1982 8.17697 15.1982 8.63986C15.1982 9.10276 14.999 9.44553 14.6006 9.66819L1.99707 16.9455C1.59863 17.1799 1.2002 17.1828 0.801758 16.9543C0.40332 16.7258 0.204102 16.3772 0.204102 15.9084V1.37131C0.204102 0.902559 0.40332 0.553926 0.801758 0.325411C1.2002 0.0968952 1.59863 0.0939655 1.99707 0.316622L14.6006 7.59397Z" fill="#404040"/>
                    </svg>
                  </div>
                  <div className="w-1 flex-1 rounded-b-lg" style={{ background: "#FE5631", minHeight: i === steps.length - 1 ? "20px" : "120px" }} />
                </div>

                {/* Content */}
                <div className="pb-12">
                  <span className="text-[#FAFAFA] text-base font-normal mb-3 block">{step.number}</span>
                  <h3
                    className="font-medium text-2xl md:text-3xl text-white mb-4"
                    style={{ letterSpacing: "-0.32px", lineHeight: "1.125" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#A3A3A3] text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c4ab5db56da1b1f28a49ca8125ada78df0b0d350?width=1272"
              alt="Warehouse worker"
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
