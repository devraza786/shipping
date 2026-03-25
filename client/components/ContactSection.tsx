import { useState } from "react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"quote" | "support">("quote");
  const [trackingForm, setTrackingForm] = useState({ orderId: "", email: "" });
  const [quoteForm, setQuoteForm] = useState({
    name: "", email: "", service: "", pickup: "", delivery: "",
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Hero background */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/edb2e6eee807ef3f85fa7a2b3acdc237c832a904?width=3820"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-bg/80" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
              <span className="text-[#FAFAFA] text-base font-normal">Contact Us</span>
            </div>
            <h2
              className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text mb-12"
              style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
            >
              Count On Us
              <br />
              For Answers
            </h2>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span
                  className="w-12 h-12 flex items-center justify-center rounded flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(3px)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1.875 5V16.25H18.125V5H1.875ZM4.57031 6.25H15.4297L10 9.86328L4.57031 6.25ZM3.125 6.79688L9.64844 11.1523L10 11.3672L10.3516 11.1523L16.875 6.79688V15H3.125V6.79688Z" fill="white"/>
                  </svg>
                </span>
                <div>
                  <p className="text-[#A3A3A3] text-base mb-1">E-mail Address</p>
                  <a href="mailto:info@apexus.com" className="text-[#FAFAFA] text-base font-medium hover:text-brand transition-colors">
                    info@apexus.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  className="w-12 h-12 flex items-center justify-center rounded flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(3px)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.57031 0.859375C4.34896 0.950521 4.07227 1.13607 3.74023 1.41602C3.4082 1.69596 3.04036 2.0638 2.63672 2.51953C2.24609 2.97526 1.87174 3.45052 1.51367 3.94531C1.1556 4.4401 0.904948 4.83724 0.761719 5.13672L0.605469 5.42969L0.664062 5.82031C0.755208 6.60156 0.976562 7.42839 1.32812 8.30078C1.67969 9.17318 2.13542 10.0488 2.69531 10.9277C3.25521 11.8066 3.90625 12.6758 4.64844 13.5352C5.39062 14.3815 6.19792 15.1628 7.07031 15.8789C7.68229 16.3997 8.30078 16.8685 8.92578 17.2852C9.5638 17.7018 10.1921 18.0632 10.8105 18.3691C11.429 18.6751 12.0378 18.9258 12.6367 19.1211C13.2227 19.3164 13.7891 19.4466 14.3359 19.5117C14.5182 19.5378 14.6354 19.5475 14.6875 19.541C14.7396 19.5345 14.8242 19.5117 14.9414 19.4727C15.1758 19.3815 15.4688 19.2122 15.8203 18.9648C16.1849 18.7174 16.5592 18.4408 16.9434 18.1348C17.3275 17.8288 17.6888 17.513 18.0273 17.1875C18.3789 16.862 18.6589 16.569 18.8672 16.3086C19.1146 15.9961 19.2676 15.7389 19.3262 15.5371C19.3848 15.3353 19.362 15.1237 19.2578 14.9023C19.1667 14.7201 19.043 14.5573 18.8867 14.4141C18.7305 14.2708 18.418 14.043 17.9492 13.7305C17.4284 13.3789 16.9759 13.0892 16.5918 12.8613C16.2077 12.6335 15.8333 12.4284 15.4688 12.2461C14.8958 11.9596 14.4694 11.8066 14.1895 11.7871C13.9095 11.7676 13.6328 11.8685 13.3594 12.0898L12.168 13.3789C12.1289 13.3789 11.9727 13.3268 11.6992 13.2227C11.4258 13.1185 11.1719 13.0013 10.9375 12.8711C10.1562 12.4544 9.45964 11.9401 8.84766 11.3281C8.23568 10.7161 7.72135 10.0195 7.30469 9.23828C7.1875 9.00391 7.07357 8.75 6.96289 8.47656C6.85221 8.20312 6.79688 8.04688 6.79688 8.00781C6.8099 7.99479 6.87174 7.9362 6.98242 7.83203C7.0931 7.72787 7.22656 7.61068 7.38281 7.48047C7.79948 7.11589 8.07292 6.8457 8.20312 6.66992C8.33333 6.49414 8.39844 6.29557 8.39844 6.07422C8.39844 5.77474 8.23568 5.30599 7.91016 4.66797C7.58464 4.02995 7.10286 3.22917 6.46484 2.26562C6.29557 2.00521 6.13607 1.77409 5.98633 1.57227C5.83659 1.37044 5.73568 1.24349 5.68359 1.19141C5.51432 1.03516 5.32227 0.92448 5.10742 0.859375C4.89258 0.794271 4.71354 0.794271 4.57031 0.859375Z" fill="white"/>
                  </svg>
                </span>
                <div>
                  <p className="text-[#A3A3A3] text-base mb-1">Phone Number</p>
                  <a href="tel:+123456789" className="text-[#FAFAFA] text-base font-medium hover:text-brand transition-colors">
                    +123 – 456 – 789
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(221deg, #222 0%, #393939 80.39%)" }}
          >
            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setActiveTab("quote")}
                className={`flex-1 py-5 text-center text-xl font-medium transition-colors ${activeTab === "quote" ? "text-[#FAFAFA]" : "text-[#A3A3A3] hover:text-white"}`}
              >
                Request a Quote
              </button>
              <button
                onClick={() => setActiveTab("support")}
                className={`flex-1 py-5 text-center text-xl font-medium transition-colors ${activeTab === "support" ? "text-[#FAFAFA]" : "text-[#A3A3A3] hover:text-white"}`}
              >
                Support Message
              </button>
            </div>

            {/* Form content */}
            <div className="p-8 space-y-4">
              {activeTab === "quote" ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#171717] rounded-lg flex overflow-hidden">
                      <span className="px-4 py-4 text-[#D4D4D4] text-base font-medium border-r border-[#404040] flex-shrink-0">Name</span>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="flex-1 bg-transparent px-4 py-4 text-[#737373] text-base outline-none"
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      />
                    </div>
                    <div className="bg-[#171717] rounded-lg flex overflow-hidden">
                      <span className="px-4 py-4 text-[#D4D4D4] text-base font-medium border-r border-[#404040] flex-shrink-0">E-mail</span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-transparent px-4 py-4 text-[#737373] text-base outline-none"
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="bg-[#171717] rounded-lg flex overflow-hidden">
                    <span className="px-4 py-4 text-[#D4D4D4] text-base font-medium border-r border-[#404040] flex-shrink-0 whitespace-nowrap">Service Type</span>
                    <select
                      className="flex-1 bg-transparent px-4 py-4 text-[#666] text-base outline-none appearance-none"
                      value={quoteForm.service}
                      onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                    >
                      <option value="">Choose type of service</option>
                      <option value="warehousing">Warehousing & Storage</option>
                      <option value="fulfillment">Order Fulfillment</option>
                      <option value="freight">Freight & Transportation</option>
                    </select>
                  </div>

                  <div className="bg-[#171717] rounded-lg flex overflow-hidden">
                    <span className="px-4 py-4 text-[#D4D4D4] text-base font-medium border-r border-[#404040] flex-shrink-0 whitespace-nowrap">Pickup City</span>
                    <input
                      type="text"
                      placeholder="Choose pickup city"
                      className="flex-1 bg-transparent px-4 py-4 text-[#666] text-base outline-none"
                      value={quoteForm.pickup}
                      onChange={(e) => setQuoteForm({ ...quoteForm, pickup: e.target.value })}
                    />
                  </div>

                  <div className="bg-[#171717] rounded-lg flex overflow-hidden">
                    <span className="px-4 py-4 text-[#D4D4D4] text-base font-medium border-r border-[#404040] flex-shrink-0 whitespace-nowrap">Delivery City</span>
                    <input
                      type="text"
                      placeholder="Choose delivery city"
                      className="flex-1 bg-transparent px-4 py-4 text-[#666] text-base outline-none"
                      value={quoteForm.delivery}
                      onChange={(e) => setQuoteForm({ ...quoteForm, delivery: e.target.value })}
                    />
                  </div>

                  <button
                    className="w-full py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
                  >
                    Send Request
                  </button>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#171717] rounded-lg flex overflow-hidden">
                      <span className="px-4 py-4 text-[#D4D4D4] text-base font-medium border-r border-[#404040] flex-shrink-0">Name</span>
                      <input type="text" placeholder="Enter your name" className="flex-1 bg-transparent px-4 py-4 text-[#737373] text-base outline-none" />
                    </div>
                    <div className="bg-[#171717] rounded-lg flex overflow-hidden">
                      <span className="px-4 py-4 text-[#D4D4D4] text-base font-medium border-r border-[#404040] flex-shrink-0">E-mail</span>
                      <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-4 py-4 text-[#737373] text-base outline-none" />
                    </div>
                  </div>
                  <div className="bg-[#171717] rounded-lg">
                    <textarea
                      rows={5}
                      placeholder="Describe your issue or question..."
                      className="w-full bg-transparent px-4 py-4 text-[#737373] text-base outline-none resize-none"
                    />
                  </div>
                  <button
                    className="w-full py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
                  >
                    Send Message
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Shipment Tracking */}
        <div className="mt-16 bg-[#FAFAFA] rounded-2xl p-8">
          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-[#E5E5E5] mb-8">
            <div className="flex items-center gap-2 pb-4 border-b-4 border-brand">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.74992 0.833374L3.48951 1.17192L0.833252 4.71359V19.1667H19.1666V4.71359L16.5103 1.17192L16.2499 0.833374H3.74992ZM4.58325 2.50004H9.16659V4.16671H3.33325L4.58325 2.50004ZM10.8333 2.50004H15.4166L16.6666 4.16671H10.8333V2.50004ZM2.49992 5.83337H17.4999V17.5H2.49992V5.83337ZM7.34367 7.50004C6.88468 7.54236 6.54615 7.95252 6.58847 8.41149C6.63077 8.87048 7.04093 9.20903 7.49992 9.16671H12.4999C12.7994 9.16996 13.0793 9.01371 13.2323 8.75329C13.3821 8.49288 13.3821 8.17387 13.2323 7.91345C13.0793 7.65304 12.7994 7.49679 12.4999 7.50004H7.49992Z" fill="#0A0A0A"/>
              </svg>
              <span className="text-[#0A0A0A] font-medium text-lg">Shipment Tracking</span>
            </div>
            <div className="flex items-center gap-2 pb-4 text-[#737373]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99995 2.29602L1.40619 5.87675L0.972168 6.07206V17.6389H19.0277V6.07206L18.5937 5.87675L9.99995 2.29602ZM9.99995 3.81511L17.6388 7.00522V16.25H16.2499V8.61112H3.74995V16.25H2.36106V7.00522L9.99995 3.81511ZM5.13883 10H14.8611V16.25H5.13883V10Z" fill="#737373"/>
              </svg>
              <span className="font-medium text-lg">Finding Warehouse</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-[#EEEEEE] rounded-lg flex overflow-hidden">
              <span className="px-4 py-4 text-[#404040] text-base font-medium border-r border-[#D4D4D4] flex-shrink-0">Order ID</span>
              <input
                type="text"
                placeholder="Enter ID number"
                className="flex-1 bg-transparent px-4 py-4 text-[#A3A3A3] text-base outline-none"
                value={trackingForm.orderId}
                onChange={(e) => setTrackingForm({ ...trackingForm, orderId: e.target.value })}
              />
            </div>
            <div className="flex-1 bg-[#EEEEEE] rounded-lg flex overflow-hidden">
              <span className="px-4 py-4 text-[#404040] text-base font-medium border-r border-[#D4D4D4] flex-shrink-0">Your E-mail</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent px-4 py-4 text-[#A3A3A3] text-base outline-none"
                value={trackingForm.email}
                onChange={(e) => setTrackingForm({ ...trackingForm, email: e.target.value })}
              />
            </div>
            <button
              className="px-8 py-4 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity flex-shrink-0"
              style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
            >
              Track Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
