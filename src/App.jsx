import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ================= DATA ================= */

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

/* ================= HOME PAGE ================= */

function MerchantNavyCatalogue() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen overflow-x-hidden font-sans">

      {/* ================= MOBILE NAVBAR ================= */}

      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 z-50">

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <h1 className="text-lg md:text-2xl font-semibold tracking-wide">
            Merchant Navy Models
          </h1>

          <Link
            to="/collection"
            className="bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            Collection
          </Link>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="pt-28 pb-16 px-4">

        <div className="max-w-7xl mx-auto">

          {/* Image First For Mobile */}

          <div className="relative group mb-10">

            <div className="overflow-hidden rounded-[2rem] shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1400&auto=format&fit=crop"
                alt="Ship Model"
                className="w-full h-[320px] md:h-[520px] object-cover group-hover:scale-105 transition-all duration-700"
              />

            </div>

          </div>

          {/* Text */}

          <div className="space-y-6">

            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500">
              Handcrafted Wooden Collection
            </p>

            <h2 className="text-4xl md:text-7xl leading-tight font-semibold tracking-tight">
              Premium Merchant Navy Ship Models
            </h2>

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Handcrafted wooden ship models inspired by real merchant navy vessels including bulk carriers, tanker ships, and container vessels.
            </p>

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Custom sizes available in 2ft, 2.5ft, and 3ft with safe delivery all over India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              <Link
                to="/collection"
                className="bg-neutral-900 text-white text-center px-6 py-4 rounded-full hover:scale-[1.02] transition-all duration-300"
              >
                View Collection
              </Link>

              <a
                href="https://wa.me/918141769602"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-300 text-center px-6 py-4 rounded-full"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURED COLLECTION ================= */}

      <section
        id="collection"
        className="py-16 px-4 bg-neutral-50"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-10">

            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
              Featured Collection
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Popular Ship Models
            </h3>

          </div>

          {/* MOBILE HORIZONTAL SCROLL */}

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">

            {ships.map((ship, index) => (
              <div
                key={index}
                className="min-w-[85%] md:min-w-[380px] bg-white rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm snap-center"
              >

                <div className="overflow-hidden">

                  <img
                    src={ship.image}
                    alt={ship.name}
                    className="w-full h-[260px] object-cover hover:scale-105 transition-all duration-700"
                  />

                </div>

                <div className="p-6 space-y-4">

                  <div className="flex items-center justify-between">

                    <h4 className="text-2xl font-semibold">
                      {ship.name}
                    </h4>

                    <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center">
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
        className="py-20 px-4 bg-black text-white overflow-hidden"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-3">
              Signature Collection
            </p>

            <h3 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Ships Inside Glass Bottles
            </h3>

            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Premium handcrafted miniature ship models carefully designed inside transparent glass bottles.
            </p>

          </div>

          {/* Featured Image */}

          <div className="relative group overflow-hidden rounded-[2rem] mb-6">

            <div className="absolute top-5 left-5 z-20 bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
              Limited Edition
            </div>

            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop"
              alt="Bottle Ship"
              className="w-full h-[500px] md:h-[700px] object-cover rounded-[2rem] group-hover:scale-105 transition-all duration-700"
            />

          </div>

          {/* Horizontal Gallery */}

          <div className="flex gap-4 overflow-x-auto pb-4">

            {[
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
            ].map((img, index) => (
              <div
                key={index}
                className="min-w-[260px] overflow-hidden rounded-[1.5rem] group"
              >

                <img
                  src={img}
                  alt="Bottle Ship"
                  className="w-[260px] h-[190px] object-cover rounded-[1.5rem] group-hover:scale-110 transition-all duration-700"
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-20 px-4"
      >

        <div className="max-w-7xl mx-auto space-y-10">

          <div className="overflow-hidden rounded-[2rem] shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop"
              alt="Craftsmanship"
              className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-all duration-700"
            />

          </div>

          <div className="space-y-6">

            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500">
              Craftsmanship
            </p>

            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              Built With Precision & Maritime Passion
            </h3>

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Every ship model is handcrafted from wood with precision and attention to detail. We create bulk carrier, tanker, and container ship models with safe delivery all over India.
            </p>

          </div>

          {/* Sizes */}

          <div className="p-6 rounded-[2rem] bg-neutral-100">

            <h4 className="text-2xl font-semibold mb-5">
              Custom Sizes Available
            </h4>

            <div className="flex flex-wrap gap-3">

              <span className="px-5 py-3 rounded-full bg-white border border-neutral-300">
                2 Foot
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-neutral-300">
                2.5 Foot
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-neutral-300">
                3 Foot
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-20 px-4 bg-neutral-50"
      >

        <div className="max-w-4xl mx-auto text-center space-y-8">

          <p className="uppercase tracking-[0.25em] text-xs text-neutral-500">
            Contact
          </p>

          <h3 className="text-4xl md:text-6xl font-semibold leading-tight">
            Interested In Custom Ship Models?
          </h3>

          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            Contact us for custom wooden ship models, glass bottle ship models, and premium handcrafted maritime displays.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">

            <a
              href="https://wa.me/918141769602"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 text-white px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 inline-block"
            >
              WhatsApp Us
            </a>

            <button className="border border-neutral-300 px-8 py-4 rounded-full">
              View Instagram
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-neutral-200 py-8 px-4">

        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-sm text-neutral-500 text-center">

          <div>
            <p>© 2026 Merchant Navy Models</p>
            <p className="mt-1">
              Safe delivery available all over India.
            </p>
          </div>

        </div>

      </footer>

    </div>
  );
}

/* ================= COLLECTION PAGE ================= */

function CollectionPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-4xl md:text-5xl font-bold">
            Full Collection
          </h1>

          <Link
            to="/"
            className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Home
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {ships.map((ship, index) => (
            <div
              key={index}
              className="bg-neutral-100 rounded-[2rem] overflow-hidden shadow-sm"
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

/* ================= APP ================= */

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