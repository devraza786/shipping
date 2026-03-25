import { useState } from "react";

const testimonials = [
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/18a9fa448df9279a71148cbd669830c296c5af25?width=456",
    logoW: 228,
    logoH: 32,
    quote: "Apexus didn't just ship orders—they rebuilt our playbook. Within weeks, our pick/pack errors vanished and two-day delivery became the norm, even during drops. Their team flagged bottlenecks we didn't see and automated the fixes. It feels like we hired an entire ops department overnight.",
    name: "Luis Ortega",
    title: "VP Operations, OmniParts",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/a1c0ab59ff38cccaa91463e17d9cdf08189b339a?width=112",
  },
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/1cef377a6362a93e0735c1f952b08defcd527067?width=360",
    logoW: 180,
    logoH: 32,
    quote: "We were juggling EDI compliance, store-ready cartons, and D2C orders across separate systems. Apexus unified everything under one SLA. Our chargebacks plummeted, store deliveries hit the window, and customer orders still left same-day. It's calm, predictable logistics—finally.",
    name: "Hana Park",
    title: "Supply Chain Lead, FreshCrate",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/6a32a7f0ca4da7210110b168e79a259ba4c0a3b9?width=112",
  },
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/43f05ab6616210a7ed338709256c8d8027e80c15?width=342",
    logoW: 171,
    logoH: 32,
    quote: "Switching to Apexus was the best supply chain decision we've made. From onboarding to scaling, the team was proactive and solutions-focused. Our fulfillment costs dropped and customer satisfaction hit record highs.",
    name: "Evelyn Ross",
    title: "COO, NovaWear",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b90a91a8c029e7cdfcd99a70415e471bb811d517?width=112",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M24.4408 9.65748L15.7735 8.74881L12.2088 0.780502L8.66729 8.74881L0 9.65748L6.47717 15.4823L4.65983 24.0098L12.2088 19.6528L19.7577 24.0098L17.9637 15.4823L24.4408 9.65748Z" fill="#FE5631"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-dark-bg py-20 md:py-28 rounded-t-2xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
              <span className="text-[#FAFAFA] text-base font-normal">Testimonials</span>
            </div>
          </div>
          <div>
            <h2
              className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text"
              style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
            >
              Don't Just Take Our
              <br />
              Word For It
            </h2>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="bg-[#262626] rounded-2xl p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: main testimonial */}
            <div className="space-y-8">
              <img src={t.logo} alt="Brand logo" style={{ height: 32, width: "auto" }} className="object-contain" />
              <StarRating />
              <p className="text-white text-lg leading-relaxed font-normal">
                "{t.quote}"
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
                style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
              >
                Read Case Study
              </a>
            </div>

            {/* Right: person */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mt-12">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#FAFAFA] text-xl font-medium">{t.name}</p>
                  <p className="text-[#D4D4D4] text-base">{t.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Previous"
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M12.0565 0L4.26481 7.79167L3.77783 8.30078L4.26481 8.80989L12.0565 16.6015L13.0747 15.5833L5.79215 8.30078L13.0747 1.01822L12.0565 0Z" fill="#737373" stroke="#737373" strokeWidth="0.944444"/>
            </svg>
          </button>
          <button
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Next"
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M4.79606 0L3.77783 1.01822L11.0604 8.30078L3.77783 15.5833L4.79606 16.6015L12.5877 8.80989L13.0747 8.30078L12.5877 7.79167L4.79606 0Z" fill="#737373" stroke="#737373" strokeWidth="0.944444"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2 ml-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-brand w-4" : "bg-[#737373]"}`}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
