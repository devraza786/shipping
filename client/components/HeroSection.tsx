export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark-bg">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/fb9c27d2b2031d85129a5701e2293d28d81311ac?width=3820')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg/90" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 max-w-[1200px] mx-auto w-full">
        {/* Headline */}
        <h1
          className="font-medium leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[80px] mb-8"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,250,250,0.70) 0%, #FAFAFA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-2.4px",
            lineHeight: "1",
          }}
        >
          Smart Logistics
          <br />
          Seamless Growth
        </h1>

        {/* Tagline chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2">
            <span
              className="w-5 h-5 flex items-center justify-center rounded"
              style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(3px)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 2.625V6.5625L8.75 7L7.04443 11.375H7V7.86133L5.25 7.42383L6.95557 2.625H7ZM7.875 1.75H6.33862L6.13184 2.33105L4.42456 7.13159L4.10327 8.03906L5.03809 8.27319L6.125 8.54492V12.25H7.64258L7.85962 11.6929L9.56519 7.31787L9.92578 6.3916L7.875 5.87891V1.75Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="text-white text-sm font-medium">Your Growth,</span>
            <span className="text-white/70 text-sm font-medium">Our Logistics</span>
          </div>
          <span className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span
              className="w-5 h-5 flex items-center justify-center rounded"
              style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(3px)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9.625 1.3125C8.18091 1.3125 7 2.49341 7 3.9375C7 4.37158 7.16748 4.81421 7.38281 5.30469C7.59814 5.79517 7.86987 6.3147 8.14844 6.79492C8.70557 7.75537 9.26953 8.55859 9.26953 8.55859L9.625 9.07812L9.98047 8.55859C9.98047 8.55859 10.5444 7.75537 11.1016 6.79492C11.3801 6.3147 11.6519 5.79517 11.8672 5.30469C12.0825 4.81421 12.25 4.37158 12.25 3.9375C12.25 2.49341 11.0691 1.3125 9.625 1.3125ZM9.625 2.1875C10.5957 2.1875 11.375 2.9668 11.375 3.9375C11.375 4.10669 11.269 4.50659 11.0742 4.94922C10.8794 5.39185 10.6042 5.89429 10.3359 6.35742C9.97876 6.97266 9.82495 7.19141 9.625 7.49219C9.42505 7.19141 9.27124 6.97266 8.91406 6.35742C8.64575 5.89429 8.37061 5.39185 8.17578 4.94922C7.98096 4.50659 7.875 4.10669 7.875 3.9375C7.875 2.9668 8.6543 2.1875 9.625 2.1875ZM9.625 3.28125C9.2627 3.28125 8.96875 3.5752 8.96875 3.9375C8.96875 4.2998 9.2627 4.59375 9.625 4.59375C9.9873 4.59375 10.2812 4.2998 10.2812 3.9375C10.2812 3.5752 9.9873 3.28125 9.625 3.28125Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="text-white text-sm font-medium">Nationwide Reach,</span>
            <span className="text-white/70 text-sm font-medium">Local Care</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#contact"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
          >
            Get a Free Quote
            <span className="w-9 h-9 flex items-center justify-center bg-white rounded-md flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8.10547 2.67578L7.20703 3.57422L13.6328 10L7.20703 16.4258L8.10547 17.3242L14.9805 10.4492L15.4102 10L14.9805 9.55078L8.10547 2.67578Z"
                  fill="#FE5631"
                />
              </svg>
            </span>
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-lg bg-white text-brand text-base font-medium hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 4px 4px 0 rgba(254,86,49,0.12) inset" }}
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Logos marquee strip */}
      <LogosMarqueeStrip />
    </section>
  );
}

function LogosMarqueeStrip() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 25%, #000 75%, rgba(0,0,0,0) 100%)",
      }}
    >
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b01954d53edd8b7c31666a6510cbd4d83b8d889b?width=2816"
        alt="Trusted brands"
        className="w-full h-[180px] sm:h-[209px] object-cover"
      />
    </div>
  );
}
