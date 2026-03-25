export default function MissionSection() {
  return (
    <section className="bg-dark-bg py-20 md:py-28 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        <h2
          className="font-medium text-3xl md:text-5xl lg:text-[64px] leading-tight gradient-text"
          style={{ letterSpacing: "-1.92px", lineHeight: "1" }}
        >
          "From day one, our mission was simple: turn complex supply chains into repeatable wins."
        </h2>
        <div className="mt-8 flex flex-col items-center gap-1">
          <div className="w-48 h-px" style={{ background: "linear-gradient(270deg, rgba(255,255,255,0) 3.98%, rgba(255,255,255,0.40) 49.67%, rgba(255,255,255,0) 95.35%)" }} />
          <p className="text-[#FAFAFA] text-lg font-medium mt-4">Liam Parker</p>
          <p className="text-[#A3A3A3] text-sm">Founder & CEO, Apexus</p>
        </div>
      </div>
    </section>
  );
}
