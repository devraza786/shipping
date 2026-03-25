// Warehouse map dot positions (approximate percentages on a world map)
const warehouseDots = [
  { top: "32%", left: "22%" },  // North America West
  { top: "38%", left: "30%" },  // North America East
  { top: "28%", left: "47%" },  // Europe
  { top: "42%", left: "52%" },  // Middle East
  { top: "35%", left: "62%" },  // South Asia
  { top: "40%", left: "73%" },  // Southeast Asia
  { top: "45%", left: "80%" },  // East Asia
  { top: "62%", left: "80%" },  // Australia
];

export default function WarehouseSection() {
  return (
    <section className="bg-[#EEEEEE] py-20 md:py-28 border-t border-[#D4D4D4]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
          <span className="text-[#0A0A0A] text-base font-normal">Warehouse Map</span>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2
            className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text-dark"
            style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
          >
            Our Worldwide
            <br />
            Warehouse Network
          </h2>
        </div>

        {/* World Map */}
        <div className="relative rounded-2xl overflow-hidden bg-[#E0E0E0]">
          {/* Use a simple world map SVG approximation */}
          <div className="relative w-full" style={{ paddingBottom: "50%" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* World map background */}
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='none'%3E%3Crect width='1000' height='500' fill='%23D9D9D9'/%3E%3C/svg%3E")`,
                  backgroundSize: "cover",
                  position: "relative",
                }}
              >
                <svg
                  viewBox="0 0 1200 600"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: 0.3 }}
                >
                  {/* Simplified continent shapes */}
                  {/* North America */}
                  <path d="M50 120 L200 100 L250 140 L270 200 L230 280 L180 320 L100 300 L60 240 Z" fill="#A3A3A3"/>
                  {/* South America */}
                  <path d="M180 330 L250 310 L280 380 L270 480 L200 510 L160 450 L150 380 Z" fill="#A3A3A3"/>
                  {/* Europe */}
                  <path d="M460 80 L560 70 L590 110 L580 160 L520 190 L470 170 L440 130 Z" fill="#A3A3A3"/>
                  {/* Africa */}
                  <path d="M480 200 L590 180 L640 250 L630 380 L560 430 L480 400 L440 320 L450 240 Z" fill="#A3A3A3"/>
                  {/* Asia */}
                  <path d="M590 70 L900 60 L950 150 L920 280 L800 320 L680 300 L620 240 L580 160 Z" fill="#A3A3A3"/>
                  {/* Australia */}
                  <path d="M820 360 L950 340 L980 420 L940 480 L860 490 L800 440 L800 390 Z" fill="#A3A3A3"/>
                </svg>

                {/* Warehouse dots */}
                {warehouseDots.map((dot, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ top: dot.top, left: dot.left }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-brand" />
                      <div className="absolute inset-0 rounded-full bg-brand animate-ping opacity-40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
