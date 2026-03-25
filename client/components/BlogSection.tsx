const posts = [
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/b1065fec868a51571cfdab95b7be9b7d40579a4d?width=612",
    readTime: "5 mins read",
    tag: "Fulfillment Strategy",
    title: "2-Day Delivery Without the Chaos: A Practical Playbook for Growing Brands",
  },
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/f5edf897aa8772ec05c1283d238aab6b3029438e?width=612",
    readTime: "12 mins read",
    tag: "Reverse Logistics",
    title: "Returns That Retain: Turning RMAs into Repeat Customers",
  },
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/a27f7d542029aca591992f25b30d5a932a8991f3?width=612",
    readTime: "8 mins read",
    tag: "Inventory",
    title: "The Inventory Truth: Forecasting, Safety Stock, and What to Fix First",
  },
  {
    img: "https://api.builder.io/api/v1/image/assets/TEMP/9c90586d4b7017e47f7bc3d1712e498393d29af0?width=612",
    readTime: "15 mins read",
    tag: "Cross-Border",
    title: "Cross-Border 101: Incoterms, Duties, and the Paperwork Brands Forget",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-dark-bg py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand flex-shrink-0" />
          <span className="text-white text-base font-normal">Blog</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-medium text-4xl md:text-5xl lg:text-[64px] gradient-text"
            style={{ letterSpacing: "-1.92px", lineHeight: "1.2" }}
          >
            Built for Your Industry
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-4 h-52">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-3 py-1.5 rounded-lg text-xs text-[#E5E5E5]"
                  style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}
                >
                  {post.readTime}
                </span>
                <span
                  className="px-3 py-1.5 rounded-lg text-xs text-[#E5E5E5]"
                  style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}
                >
                  {post.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-base font-medium leading-relaxed group-hover:text-brand transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>

        {/* See More CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand text-white text-base font-medium hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 4px 4px 0 rgba(255,255,255,0.25) inset" }}
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
