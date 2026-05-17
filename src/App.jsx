import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ================= HOME PAGE ================= */

function MerchantNavyCatalogue() {
  const ships = [
    {
      name: "Bulk Carrier Model",
      scale: "2 Foot Model",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
      desc: "Premium handcrafted wooden bulk carrier ship model with detailed finishing.",
    },
    {
      name: "Container Ship Model",
      scale: "2.5 Foot Model",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
      desc: "Custom wooden container vessel model designed for collectors and displays.",
    },
    {
      name: "Tanker Ship Model",
      scale: "3 Foot Model",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      desc: "Luxury handcrafted tanker ship model inspired by real maritime vessels.",
    },
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen overflow-x-hidden font-sans">
      
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            Merchant Navy Models
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#collection" className="hover:text-neutral-500 transition">
              Collection
            </a>

            <a href="#signature" className="hover:text-neutral-500 transition">
              Signature
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

      {/* ================= HERO ================= */}

      <section className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div className="space-y-8">

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Handcrafted Wooden Collection
            </p>

            <h2 className="text-5xl md:text-7xl leading-tight font-semibold tracking-tight">
              Premium Merchant Navy Ship Models
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
              We create handcrafted wooden ship models inspired by real merchant
              navy vessels including bulk carriers, tanker ships, and container
              vessels. Custom sizes available in 2ft, 2.5ft, and 3ft models with
              safe delivery all over India.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/collection"
                className="bg-neutral-900 text-white px-7 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-sm inline-block"
              >
                View Collection
              </Link>

              <a
                href="#signature"
                className="border border-neutral-300 px-7 py-3 rounded-full hover:border-neutral-900 transition-all duration-300 flex items-center gap-2"
              >
                Signature Edition
                <span>→</span>
              </a>

            </div>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1400&auto=format&fit=crop"
                alt="Ship Model"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-all duration-700"
              />

            </div>
          </div>

        </div>
      </section>

      {/* ================= COLLECTION ================= */}

      <section id="collection" className="py-24 px-6 bg-neutral-50">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">
                Collection
              </p>

              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Featured Ship Models
              </h3>
            </div>

            <Link
              to="/collection"
              className="border border-neutral-300 px-5 py-3 rounded-full hover:bg-white transition-all duration-300"
            >
              Browse All
            </Link>

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
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition-all duration-700"
                  />

                </div>

                <div className="p-7 space-y-5">

                  <div className="flex items-center justify-between">

                    <h4 className="text-2xl font-semibold">
                      {ship.name}
                    </h4>

                    <div className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center">
                      →
                    </div>

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

      {/* ================= SIGNATURE COLLECTION ================= */}

      <section
        id="signature"
        className="py-32 px-6 bg-black text-white overflow-hidden"
      >

        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="max-w-3xl mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
              Signature Collection
            </p>

            <h3 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
              Ships Inside Glass Bottles
            </h3>

            <p className="text-neutral-300 text-lg leading-relaxed">
              Our most exclusive handcrafted creations — premium miniature wooden
              ship models carefully designed inside transparent glass bottles.
              Perfect for collectors, gifting, office decor, and luxury nautical
              displays.
            </p>

          </div>

          {/* Main Layout */}

          <div className="grid lg:grid-cols-2 gap-8 mb-10">

            {/* Left Big Image */}

            <div className="relative group overflow-hidden rounded-[2.5rem]">

              <div className="absolute top-6 left-6 z-20 bg-white text-black px-5 py-2 rounded-full text-sm font-medium shadow-lg">
                Limited Edition
              </div>

              <img
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop"
                alt="Glass Bottle Ship"
                className="w-full h-[650px] object-cover rounded-[2.5rem] group-hover:scale-105 transition-all duration-700"
              />

            </div>

            {/* Right Images */}

            <div className="grid gap-8">

              <div className="group overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                  alt="Bottle Ship"
                  className="w-full h-[310px] object-cover rounded-[2rem] group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="group overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop"
                  alt="Bottle Ship"
                  className="w-full h-[310px] object-cover rounded-[2rem] group-hover:scale-110 transition-all duration-700"
                />
              </div>

            </div>

          </div>

          {/* Horizontal Gallery */}

          <div className="flex gap-6 overflow-x-auto pb-4">

            {[
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
            ].map((img, index) => (
              <div
                key={index}
                className="min-w-[320px] overflow-hidden rounded-[2rem] group"
              >

                <img
                  src={img}
                  alt="Bottle Ship"
                  className="w-[320px] h-[220px] object-cover rounded-[2rem] group-hover:scale-110 transition-all duration-700"
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="overflow-hidden rounded-[2rem] shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop"
              alt="Craftsmanship"
              className="w-full h-[400px] object-cover hover:scale-105 transition-all duration-700"
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
              Every ship model is handcrafted from wood with precision and
              attention to detail. We create bulk carrier, tanker, and container
              ship models in custom sizes including 2ft, 2.5ft, and 3ft models.
              Safe courier delivery available all over India.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">

              <div>
                <h4 className="text-4xl font-semibold">50+</h4>
                <p className="text-neutral-500 mt-2">
                  Unique Ship Models
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-semibold">100%</h4>
                <p className="text-neutral-500 mt-2">
                  Handcrafted Finish
                </p>
              </div>

            </div>

            {/* Sizes */}

            <div className="mt-10 p-6 rounded-[2rem] bg-neutral-100">

              <h4 className="text-2xl font-semibold mb-4">
                Custom Sizes Available
              </h4>

              <div className="flex flex-wrap gap-4">

                <span className="px-5 py-2 rounded-full bg-white border border-neutral-300">
                  2 Foot
                </span>

                <span className="px-5 py-2 rounded-full bg-white border border-neutral-300">
                  2.5 Foot
                </span>

                <span className="px-5 py-2 rounded-full bg-white border border-neutral-300">
                  3 Foot
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="py-28 px-6 bg-neutral-50">

        <div className="max-w-4xl mx-auto text-center space-y-8">

          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
            Contact
          </p>

          <h3 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Interested In Custom Ship Models?
          </h3>

          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Contact us for custom wooden ship models, glass bottle ship models,
            and premium handcrafted maritime displays with safe delivery across India.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">

            <a
              href="https://wa.me/918141769602"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 inline-block"
            >
              WhatsApp Us
            </a>

            <button className="border border-neutral-300 px-8 py-4 rounded-full hover:border-neutral-900 transition-all duration-300">
              View Instagram
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-neutral-200 py-8 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">

          <div>
            <p>© 2026 Merchant Navy Models. All rights reserved.</p>
            <p className="mt-1">
              Safe delivery available all over India.
            </p>
          </div>

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

/* ================= COLLECTION PAGE ================= */

function CollectionPage() {
  const ships = [
    {
      name: "Bulk Carrier Model",
      scale: "2 Foot Model",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
      desc: "Premium handcrafted wooden bulk carrier ship model.",
    },
    {
      name: "Container Ship Model",
      scale: "2.5 Foot Model",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
      desc: "Custom container vessel crafted from wood.",
    },
    {
      name: "Tanker Ship Model",
      scale: "3 Foot Model",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      desc: "Luxury tanker ship display model.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-14">

          <h1 className="text-5xl font-bold">
            Full Collection
          </h1>

          <Link
            to="/"
            className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Back Home
          </Link>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {ships.map((ship, index) => (
            <div
              key={index}
              className="bg-neutral-100 rounded-[2rem] overflow-hidden shadow-sm hover:-translate-y-2 transition-all duration-500"
            >

              <img
                src={ship.image}
                alt={ship.name}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-semibold">
                  {ship.name}
                </h2>

                <p className="text-neutral-500 mt-2">
                  {ship.scale}
                </p>

                <p className="text-neutral-600 mt-4">
                  {ship.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

/* ================= APP ROUTER ================= */

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<MerchantNavyCatalogue />}
        />

        <Route
          path="/collection"
          element={<CollectionPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}