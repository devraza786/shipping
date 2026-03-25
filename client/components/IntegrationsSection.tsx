const integrationLogos = [
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/76a57a74bccb4bef912322f02c164d7529fd8cff?width=96", alt: "Integration 1", w: 48, h: 29 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/694ae83304c6180a7d4231236c842b43a3504bba?width=80", alt: "Integration 2", w: 40, h: 48 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/d974067d85cd07009e8c36e899bb49a1bf4e405b?width=96", alt: "Integration 3", w: 48, h: 48 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/96017fe69dd931c959e668687e21ec861a398b98?width=112", alt: "Integration 4", w: 56, h: 56 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/c367ac0a5ff9460562577cc2898649139b477864?width=92", alt: "Integration 5", w: 46, h: 48 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/7e775aaa67f90702b86577af750e01c929754131?width=92", alt: "Integration 6", w: 46, h: 48 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/7bee08712e816fb06a871918be45934aea86186d?width=96", alt: "Integration 7", w: 48, h: 48 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/76a57a74bccb4bef912322f02c164d7529fd8cff?width=96", alt: "Integration 8", w: 48, h: 29 },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-[#EEEEEE] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
          <span className="text-[#0A0A0A] text-base font-normal">Integration</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2
            className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text-dark"
            style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
          >
            Connect Your Marketplaces and
            <br />
            Back-Office Tools Easily
          </h2>
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded" style={{ background: "rgba(10,10,10,0.05)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.75C4.76294 1.75 2.89502 3.13257 2.13281 5.08594L2.93945 5.41406C3.5769 3.78027 5.12354 2.625 7 2.625C8.41846 2.625 9.68311 3.32056 10.4727 4.375H8.75V5.25H11.8125V2.1875H10.9375V3.54102C9.97876 2.44214 8.56201 1.75 7 1.75ZM11.0605 8.58594C10.4231 10.2197 8.87646 11.375 7 11.375C5.56616 11.375 4.30664 10.6692 3.51367 9.625H5.25V8.75H2.1875V11.8125H3.0625V10.459C4.01953 11.5442 5.42261 12.25 7 12.25C9.23706 12.25 11.105 10.8674 11.8672 8.91406L11.0605 8.58594Z" fill="#0A0A0A"/>
              </svg>
            </span>
            <span className="text-[#0A0A0A] text-sm font-medium">Real-time</span>
            <span className="text-[#0A0A0A]/70 text-sm">Sync</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded" style={{ background: "rgba(10,10,10,0.05)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.9375 1.13477V12.3184L4.66211 11.7168L6.42578 10.2402L7.31445 12.0039L7.50586 12.4004L7.90234 12.1953L9.25586 11.498L9.63867 11.3066L9.44727 10.9102L8.64062 9.32421L10.8555 9.05078L11.7441 8.94141L11.1152 8.3125L4.68945 1.87305L3.9375 1.13477Z" fill="#0A0A0A"/>
              </svg>
            </span>
            <span className="text-[#0A0A0A] text-sm font-medium">One-click</span>
            <span className="text-[#0A0A0A]/70 text-sm">Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded" style={{ background: "rgba(10,10,10,0.05)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.3125C5.31836 1.3125 3.9375 2.69336 3.9375 4.375V5.6875H2.625V12.6875H11.375V5.6875H10.0625V4.375C10.0625 2.69336 8.68164 1.3125 7 1.3125ZM7 2.1875C8.20483 2.1875 9.1875 3.17017 9.1875 4.375V5.6875H4.8125V4.375C4.8125 3.17017 5.79517 2.1875 7 2.1875ZM3.5 6.5625H10.5V11.8125H3.5V6.5625Z" fill="#0A0A0A"/>
              </svg>
            </span>
            <span className="text-[#0A0A0A] text-sm font-medium">Secure</span>
            <span className="text-[#0A0A0A]/70 text-sm">Rest API</span>
          </div>
        </div>

        {/* Logos marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-left">
            {[...integrationLogos, ...integrationLogos].map((logo, i) => (
              <div
                key={i}
                className="w-36 h-36 flex-shrink-0 rounded-lg bg-[#E5E5E5] flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: logo.w, height: logo.h }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
