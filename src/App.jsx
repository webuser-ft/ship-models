export default function MerchantNavyCatalogue() {
  const ships = [
    {
      name: "MV Horizon Star",
      scale: "1:250 Scale",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
      desc: "Handcrafted merchant navy model with premium wooden detailing and matte finish.",
    },
    {
      name: "Ocean Voyager",
      scale: "1:300 Scale",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
      desc: "Minimal collector edition ship model inspired by modern cargo vessels.",
    },
    {
      name: "Atlantic Carrier",
      scale: "1:200 Scale",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      desc: "Precision-crafted model designed for maritime collectors and enthusiasts.",
    },
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen overflow-x-hidden font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
              Merchant Navy Models
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#collection" className="hover:text-neutral-500 transition">
              Collection
            </a>
            <a href="#about" className="hover:text-neutral-500 transition">
              About
            </a>
            <a href="#contact" className="hover:text-neutral-500 transition">
              Contact
            </a>
          </nav>

          <a 
          href="#collection"
            className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Explore
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Handcrafted Collection
            </p>

            <h2 className="text-5xl md:text-7xl leading-tight font-semibold tracking-tight">
              Handcrafted Merchant Navy Ship Models
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
              Premium miniature ship models inspired by maritime engineering,
              crafted for collectors, offices, and nautical enthusiasts.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-neutral-900 text-white px-7 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-sm">
                View Collection
              </button>

              <button className="border border-neutral-300 px-7 py-3 rounded-full hover:border-neutral-900 transition-all duration-300 flex items-center gap-2">
                Learn More
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1400&auto=format&fit=crop"
                alt="Ship Model"
                className="w-full h-[550px] object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">
                Collection
              </p>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Featured Models
              </h3>
            </div>

            <button className="flex items-center gap-2 border border-neutral-300 px-5 py-3 rounded-full hover:bg-white transition-all duration-300">
              Browse All
              <span>↗</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {ships.map((ship, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] overflow-hidden border border-neutral-200 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={ship.image}
                    alt={ship.name}
                    className="w-full h-[340px] object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="p-7 space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-2xl font-semibold">{ship.name}</h4>
                    <button className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all duration-300">
                      →
                    </button>
                  </div>

                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    {ship.scale}
                  </p>

                  <p className="text-neutral-600 leading-relaxed">
                    {ship.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop"
              alt="Craftsmanship"
              className="w-full h-[500px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          <div className="space-y-8">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Craftsmanship
            </p>

            <h3 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Built With Precision & Maritime Passion
            </h3>

            <p className="text-neutral-600 leading-relaxed text-lg">
              Every miniature ship model is handcrafted with attention to
              detail, inspired by real merchant navy vessels and modern
              engineering aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-4xl font-semibold">50+</h4>
                <p className="text-neutral-500 mt-2">Unique Ship Models</p>
              </div>

              <div>
                <h4 className="text-4xl font-semibold">100%</h4>
                <p className="text-neutral-500 mt-2">Handcrafted Finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">
              Gallery
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Visual Showcase
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Gallery"
              className="rounded-[2rem] h-[450px] w-full object-cover hover:scale-[1.02] transition-all duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop"
              alt="Gallery"
              className="rounded-[2rem] h-[450px] w-full object-cover hover:scale-[1.02] transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
            Contact
          </p>

          <h3 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Interested In Custom Ship Models?
          </h3>

          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get in touch for collector editions, custom merchant navy models,
            and premium handcrafted maritime displays.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-neutral-900 text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300">
              WhatsApp Us
            </button>

            <button className="border border-neutral-300 px-8 py-4 rounded-full hover:border-neutral-900 transition-all duration-300">
              View Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© 2026 Merchant Navy Models. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              WhatsApp
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
