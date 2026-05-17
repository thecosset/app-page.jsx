export default function TheCossetHomepage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 sticky top-0 bg-black/80 backdrop-blur z-50">
        <div>
          <h1 className="text-2xl font-black text-[#b7ffb2]">
            THE COSSET
          </h1>
          <p className="text-xs text-zinc-400">
            Unisex Salon & Nail Studio
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#services" className="hover:text-[#b7ffb2] transition">
            Services
          </a>

          <a href="#gallery" className="hover:text-[#b7ffb2] transition">
            Gallery
          </a>

          <a href="#about" className="hover:text-[#b7ffb2] transition">
            About
          </a>

          <a href="#contact" className="hover:text-[#b7ffb2] transition">
            Contact
          </a>
        </div>

        <a
          href="https://wa.me/918595303680"
          className="bg-[#b7ffb2] text-black px-5 py-2 rounded-full font-semibold"
        >
          Book Now
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20 items-center">

        <div>
          <p className="text-[#b7ffb2] uppercase tracking-[5px] text-sm mb-4">
            Premium Luxury Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            THE COSSET
            <br />
            <span className="text-[#b7ffb2]">
              UNISEX SALON
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Hair • Nails • Makeup • Extensions • Eyelashes
          </p>

          <a
            href="https://wa.me/918595303680"
            className="bg-[#b7ffb2] text-black px-7 py-4 rounded-full font-bold inline-block"
          >
            WhatsApp Booking
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
            alt="Salon"
            className="rounded-3xl border border-zinc-800"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 THE COSSET UNISEX SALON & NAIL STUDIO
      </footer>

    </div>
  );
}
