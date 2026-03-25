const awards = [
  {
    year: "2025",
    title: "Best 3PL Provider",
    description: "For outstanding service, innovation, and customer satisfaction",
    org: "Logistics Excellence Awards",
    svgPath: "M43 31L31 40H5L7 35L12 31H29L32 35L40 11L45 7H50L43 31ZM43 5L38 9H21L18 5L10 29L5 33H0L7 9L19 0H45L43 5ZM24 13H35L29 31L26 27H15L21 9L24 13Z",
  },
  {
    year: "2024",
    title: "Top Supply Chain Innovator",
    description: "For implementing cutting-edge technology that streamlines fulfillment operations.",
    org: "Global Logistics Magazine",
    svgPath: "M6.80347 17.1323C7.21017 15.3021 8.83342 14 10.7082 14H15.4995L11.4995 32H8.486C5.92701 32 4.02613 29.6303 4.58125 27.1323L6.80347 17.1323Z M42.7852 8H24.7861L24.1777 10.8384C23.7824 12.6825 22.1526 14 20.2666 14H15.5L17.8216 3.16214C18.2167 1.31774 19.8467 0 21.7329 0H39.5513C42.0978 0 43.996 2.34793 43.4626 4.83792L42.7852 8Z M34.4617 36.8379C34.0666 38.6823 32.4367 40 30.5504 40H14.732C12.1855 40 10.2873 37.6521 10.8207 35.1621L11.4982 32H35.4981L34.4617 36.8379Z M42.1269 17C44.7292 17 46.6386 19.4456 46.0075 21.9701L44.2575 28.9701C43.8123 30.7508 42.2124 32 40.3769 32H35.5L37.25 25H17.5L18.5364 20.1621C18.9316 18.3177 20.5615 17 22.4477 17H42.1269Z",
  },
  {
    year: "2025",
    title: "Sustainability in Logistics Award",
    description: "Reducing our carbon footprint through eco-friendly shipping practices.",
    org: "Green Transport Network",
    svgPath: "M37.8947 40C44.3275 39.8689 49.5 34.6073 49.5 28.1389C49.5 24.9931 48.2512 21.9762 46.0282 19.7518L26.2895 0V12.2771C26.2895 14.3303 27.1046 16.2995 28.5556 17.7514L33.1795 22.3784L33.1921 22.3907L40.9452 30.149C41.197 30.4009 41.197 30.8094 40.9452 31.0613C40.6935 31.3133 40.2852 31.3133 40.0335 31.0613L37.361 28.3871H12.639L9.96655 31.0613C9.71476 31.3133 9.30654 31.3133 9.05476 31.0613C8.80297 30.8094 8.80297 30.4009 9.05475 30.149L16.8079 22.3907L16.8205 22.3784L21.4444 17.7514C22.8954 16.2995 23.7105 14.3303 23.7105 12.2771V0L3.97175 19.7518C1.74882 21.9762 0.5 24.9931 0.5 28.1389C0.5 34.6073 5.67252 39.8689 12.1053 40H37.8947Z",
  },
  {
    year: "2024",
    title: "Customer Choice Award",
    description: "For exceptional reliability, communication, and on-time delivery performance.",
    org: "Apexus's Clients",
    svgPath: "M30.5557 11.6853C28.9112 10.5865 26.9778 10 25 10V0C28.9556 0 32.8224 1.17298 36.1114 3.37061C39.4004 5.56823 41.9638 8.69181 43.4776 12.3463C44.9913 16.0008 45.3874 20.0222 44.6157 23.9018C43.844 27.7814 41.9392 31.3451 39.1421 34.1421C36.3451 36.9392 32.7814 38.844 28.9018 39.6157C25.0222 40.3874 21.0008 39.9913 17.3463 38.4776C13.6918 36.9638 10.5682 34.4004 8.37061 31.1114C6.17298 27.8224 5 23.9556 5 20H15C15 21.9778 15.5865 23.9112 16.6853 25.5557C17.7841 27.2002 19.3459 28.4819 21.1732 29.2388C23.0004 29.9957 25.0111 30.1937 26.9509 29.8078C28.8907 29.422 30.6725 28.4696 32.0711 27.0711C33.4696 25.6725 34.422 23.8907 34.8078 21.9509C35.1937 20.0111 34.9957 18.0004 34.2388 16.1732C33.4819 14.3459 32.2002 12.7841 30.5557 11.6853Z",
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#EEEEEE] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
          <span className="text-[#0A0A0A] text-base font-normal">Awards & Recognition</span>
        </div>

        {/* Heading */}
        <div className="flex items-start justify-between mb-12">
          <h2
            className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text-dark"
            style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
          >
            Solutions to Keep
            <br />
            Your Business Moving
          </h2>
        </div>

        {/* Award Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {awards.map((award, i) => (
            <div key={i} className="bg-[#FAFAFA] rounded-2xl p-10 flex flex-col gap-6">
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="w-20 h-20 rounded-full border border-[#D4D4D4] flex items-center justify-center">
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                    <path d={award.svgPath} fill="#FE5631" />
                  </svg>
                </div>
                <span className="px-4 py-2 rounded-lg bg-[#EEEEEE] text-[#404040] text-lg font-normal">
                  {award.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#0A0A0A] text-3xl font-medium leading-tight" style={{ letterSpacing: "-0.36px" }}>
                {award.title}
              </h3>

              {/* Description */}
              <p className="text-[#525252] text-base leading-relaxed flex-1">
                {award.description}
              </p>

              {/* Footer */}
              <div className="border-t border-[#D4D4D4] pt-6">
                <p className="text-[#0A0A0A] text-xl font-medium">{award.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
