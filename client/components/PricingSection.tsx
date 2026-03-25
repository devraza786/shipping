interface PlanFeature {
  label: string;
  value: string;
}

interface Plan {
  icon: string;
  name: string;
  description: string;
  price: string;
  priceUnit?: string;
  cta: string;
  features: PlanFeature[];
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    icon: "rocket",
    name: "Starter Plan",
    description: "For new or seasonal brands getting fulfillment off the ground.",
    price: "$1,500",
    priceUnit: "/month",
    cta: "Get Started",
    features: [
      { label: "Monthly Orders:", value: "up to 500" },
      { label: "Fulfillment Fee:", value: "from $3.20/order + $0.45/item" },
      { label: "Receiving:", value: "$12/pallet (compliant ASN)" },
      { label: "SLA:", value: "Ship same business day by 2pm cutoff" },
      { label: "Integrations:", value: "Shopify, Woo, Amazon (core)" },
      { label: "Support:", value: "Email within 1 business day" },
    ],
  },
  {
    icon: "growth",
    name: "Growth",
    description: "For scaling brands with higher volume and more complex operations.",
    price: "$2,500",
    priceUnit: "/month",
    cta: "Get Started",
    features: [
      { label: "Monthly Orders:", value: "500–2,000" },
      { label: "Fulfillment Fee:", value: "from $2.80/order + $0.35/item" },
      { label: "Receiving:", value: "$10/pallet (compliant ASN)" },
      { label: "SLA:", value: "Priority exception handling" },
      { label: "Integrations:", value: "50+ apps, returns portal included" },
      { label: "Support:", value: "Success Manager (light)" },
    ],
  },
  {
    icon: "enterprise",
    name: "Enterprise Plan",
    description: "Custom program for complex catalogs, B2B, and global scale.",
    price: "Custom",
    cta: "Contact Sale",
    features: [
      { label: "Monthly Orders:", value: "10,000+ or hybrid B2C/B2B" },
      { label: "Fulfillment Fee:", value: "lane-based freight optimization" },
      { label: "Receiving:", value: "Negotiated" },
      { label: "SLA:", value: "Contracted OTIF, dock-to-stock ≤24h" },
      { label: "Integrations:", value: "Shopify, Woo, Amazon (core)" },
      { label: "Support:", value: "custom reporting & APIs" },
    ],
  },
];

function PlanIcon({ icon }: { icon: string }) {
  if (icon === "rocket") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17.7891 0C17.2676 0 16.541 0.0234375 15.7734 0.09375C14.2383 0.237304 12.4658 0.495117 11.3672 1.59375C10.4443 2.5166 8.53711 4.96582 6.77344 7.26562C6.4248 7.71973 6.43945 7.71094 6.11719 8.13281L4.82812 8.0625C3.87012 8.0127 2.94727 8.41699 2.34375 9.16406L0.773438 11.0859L0 12.0703L1.21875 12.3047L3.67969 12.7969L6.5625 15.6797L7.05469 18.1406L7.3125 19.3594L8.27344 18.5859L10.1953 17.0156C10.9424 16.4121 11.3467 15.4893 11.2969 14.5312L11.2266 13.2656C11.6631 12.9346 11.6484 12.9434 12.1172 12.5859C14.4229 10.8193 16.8809 8.92383 17.7891 8.01562C18.8789 6.92578 19.1221 5.12695 19.2656 3.58594C19.4092 2.04492 19.3359 0.726562 19.3359 0.726562L19.3125 0.046875L18.6328 0.0234375C18.6328 0.0234375 18.3105 0 17.7891 0Z" fill="#FAFAFA"/>
      </svg>
    );
  }
  if (icon === "growth") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20.4141 4.03125L17.7891 7.3125L15.3281 6.07031L14.7422 5.78906L14.3672 6.32812L11.8125 10.1719L9.4453 8.39062L9 8.0625L8.55469 8.39062L5.83593 10.4297L3.18749 9.77344L2.81249 11.2266L5.81249 11.9766L6.16406 12.0703L6.44531 11.8594L9 9.9375L11.5547 11.8594L12.1875 12.3281L12.6328 11.6719L15.2578 7.73438L17.6719 8.92969L18.2109 9.1875L21.5859 4.96875L20.4141 4.03125ZM15.0469 13.7344L14.4141 14.5312L11.8594 17.7188L9.4453 15.8906L9 15.5625L8.55469 15.8906L5.92968 17.8594L3.32811 16.5703L2.67188 17.9297L5.67187 19.4297L6.07031 19.6172L6.44531 19.3594L9 17.4375L11.5547 19.3594L12.1406 19.7812L12.5859 19.2188L14.9297 16.2891L17.3672 19.9219L17.9531 20.7656L18.5859 19.9688L21.5859 16.2188L20.4141 15.2812L18.0703 18.2109L15.6328 14.5781L15.0469 13.7344Z" fill="#FAFAFA"/>
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4.45312L11.7188 4.54688L4.21874 7.54688L2.48438 8.25L4.21874 8.95312L7.14843 10.125L4.21874 11.2969L2.48438 12L4.21874 12.7031L7.14843 13.875L4.21874 15.0469L2.48438 15.75L4.21874 16.4531L11.7188 19.4531L12 19.5469L12.2812 19.4531L19.7812 16.4531L21.5156 15.75L19.7812 15.0469L16.8516 13.875L19.7812 12.7031L21.5156 12L19.7812 11.2969L16.8516 10.125L19.7812 8.95312L21.5156 8.25L19.7812 7.54688L12.2812 4.54688L12 4.45312Z" fill="#FAFAFA"/>
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#EEEEEE] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
          <span className="text-[#0A0A0A] text-base font-normal">Pricing</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text-dark"
            style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
          >
            Choose a Plan That Fits
            <br />
            Your Needs
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-[#FAFAFA] rounded-2xl border border-[#D4D4D4] p-10 flex flex-col gap-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded bg-dark-bg flex items-center justify-center">
                <PlanIcon icon={plan.icon} />
              </div>

              {/* Name */}
              <div>
                <h3 className="text-[#0A0A0A] text-2xl font-medium mb-2">{plan.name}</h3>
                <p className="text-[#525252] text-base leading-relaxed">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className="text-[#0A0A0A] font-medium" style={{ fontSize: "3rem", lineHeight: "1", letterSpacing: "-1.44px" }}>
                  {plan.price}
                </span>
                {plan.priceUnit && (
                  <span className="text-[#737373] text-base mb-2">{plan.priceUnit}</span>
                )}
              </div>

              {/* CTA */}
              <button className="w-full py-3 rounded-lg text-[#0A0A0A] text-base font-medium text-center border border-[#FAFAFA] bg-[#E5E5E5] hover:bg-[#D4D4D4] transition-colors">
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center rounded mt-0.5 flex-shrink-0" style={{ background: "rgba(10,10,10,0.05)" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M12.373 2.74805L4.8125 10.3086L1.62695 7.12305L0.998047 7.75195L4.49805 11.252L4.8125 11.5527L5.12695 11.252L13.002 3.37695L12.373 2.74805Z" fill="black"/>
                      </svg>
                    </span>
                    <span className="text-sm">
                      <span className="text-[#0A0A0A] font-medium">{f.label} </span>
                      <span className="text-[#0A0A0A]/70">{f.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
