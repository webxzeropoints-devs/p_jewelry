import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, RefreshCcw, Truck, Lock, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const bestSellers = [
  { name: "Ocean Pearl Necklace", price: "₹2,499", rating: 4.8, reviews: 128, img: "/assets/products/necklace.jpg" },
  { name: "Shell Drop Earrings", price: "₹1,899", rating: 4.6, reviews: 96, img: "/assets/products/earrings.jpg" },
  { name: "Pearl Tide Ring", price: "₹1,699", rating: 4.7, reviews: 112, img: "/assets/products/ring.jpg" },
  { name: "Coastal Charm Bracelet", price: "₹2,299", rating: 4.5, reviews: 88, img: "/assets/products/bracelet.jpg" },
];

const collections = [
  { name: "Everyday", tag: "Effortless elegance", img: "/assets/collections/everyday.jpg" },
  { name: "Festive", tag: "Shine & celebrate", img: "/assets/collections/festive.jpg" },
  { name: "Minimal", tag: "Less is beautiful", img: "/assets/collections/minimal.jpg" },
  { name: "For Her", tag: "Timeless pieces", img: "/assets/collections/for-her.jpg" },
  { name: "For Him", tag: "Bold & refined", img: "/assets/collections/for-him.jpg" },
  { name: "New Arrivals", tag: "Fresh from the ocean", img: "/assets/collections/new-arrivals.jpg" },
];

const testimonials = [
  { quote: "Absolutely in love with the quality and design!", name: "Neha S.", img: "/assets/testimonials/neha.jpg" },
  { quote: "My go-to brand for everyday elegance.", name: "Riya M.", img: "/assets/testimonials/riya.jpg" },
  { quote: "Packaging, quality, everything is just perfect!", name: "Ananya K.", img: "/assets/testimonials/ananya.jpg" },
];

function useCountdown(hours = 6, minutes = 24, seconds = 18) {
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);
  useEffect(() => {
    const t = setInterval(() => setTime((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = String(Math.floor(time / 3600)).padStart(2, "0");
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  return { h, m, s };
}

export default function Home() {
  const { h, m, s } = useCountdown();

  return (
    <div className="bg-sand text-cocoa font-body">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div
          className="h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/assets/hero-beach.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative z-10 max-w-xl px-6 md:px-16 text-white"
          >
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4 drop-shadow-sm">
              Jewellery
              <br />
              Made to be Loved
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-md">
              Everyday pieces inspired by the beauty of simplicity.
            </p>
            <a
              href="/shop"
              className="inline-block bg-gold text-white px-8 py-3 tracking-widest text-sm uppercase hover:bg-cocoa transition-colors"
            >
              Shop Collection
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-gold" : "w-1.5 bg-white/60"}`} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-3xl md:text-4xl text-center mb-2"
        >
          Best Sellers
        </motion.h2>
        <div className="w-16 h-px bg-gold mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {bestSellers.map((p, i) => (
            <motion.div
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="relative bg-shell aspect-square rounded-sm overflow-hidden mb-4">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button
                  aria-label="Add to wishlist"
                  className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                >
                  <Heart size={16} strokeWidth={1.4} />
                </button>
              </div>
              <h3 className="text-base mb-1">{p.name}</h3>
              <div className="text-xs text-gold mb-1">
                {"★".repeat(Math.round(p.rating))}
                <span className="text-cocoa/50 ml-1">({p.reviews})</span>
              </div>
              <p className="text-lg mb-3">{p.price}</p>
              <button className="w-full border border-cocoa/30 py-2 text-xs tracking-widest uppercase hover:bg-cocoa hover:text-white hover:border-cocoa transition-colors">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center text-xs md:text-sm text-cocoa/70">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck size={22} strokeWidth={1.3} />
            100% BIS Hallmarked
          </div>
          <div className="flex flex-col items-center gap-2">
            <RefreshCcw size={22} strokeWidth={1.3} />
            Easy 7-Day Returns
          </div>
          <div className="flex flex-col items-center gap-2">
            <Truck size={22} strokeWidth={1.3} />
            Free Shipping Above ₹999
          </div>
          <div className="flex flex-col items-center gap-2">
            <Lock size={22} strokeWidth={1.3} />
            Secure Payments
          </div>
        </div>
      </section>

      {/* TODAY'S PICKS + EXPLORE COLLECTIONS */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-16">
        {/* Today's Picks */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display text-2xl md:text-3xl">Today's Picks</h2>
            <div className="border border-cocoa/30 rounded px-3 py-1 text-xs tabular-nums">
              {h} : {m} : {s}
              <div className="flex gap-3 text-[10px] text-cocoa/50 justify-between mt-0.5">
                <span>HRS</span><span>MINS</span><span>SECS</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-cocoa/60 mb-6">09 pieces selected for today</p>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-shell rounded-sm overflow-hidden">
                <img src={`/assets/picks/pick-${i + 1}.jpg`} alt={`Today's pick ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Explore Collections */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl mb-6">Explore Collections</h2>
          <div className="grid grid-cols-3 gap-4">
            {collections.map((c) => (
              <a href="/collections" key={c.name} className="text-center group">
                <div className="aspect-square bg-shell rounded-sm overflow-hidden mb-2">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-sm">{c.name}</h4>
                <p className="text-xs text-cocoa/50">{c.tag}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="our-story" className="max-w-[1600px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-shell mb-6 mx-auto md:mx-0">
            <img src="/assets/founder.jpg" alt="Paarul A., Founder" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-display text-3xl mb-2 text-center md:text-left">Story</h2>
          <blockquote className="text-cocoa/80 italic text-lg leading-relaxed mb-4 text-center md:text-left">
            "Paara is a reflection of my love for the ocean and the belief that
            simplicity is the truest form of elegance."
          </blockquote>
          <p className="text-sm text-cocoa/60 mb-4 text-center md:text-left">— Paarul A., Founder</p>
          <a href="/our-story" className="text-gold text-sm uppercase tracking-widest border-b border-gold pb-1 hover:text-cocoa hover:border-cocoa transition-colors block text-center md:text-left w-fit mx-auto md:mx-0">
            Read Our Story →
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative aspect-video rounded-sm overflow-hidden bg-shell"
        >
          <img src="/assets/story-video-poster.jpg" alt="Paara ocean story" className="w-full h-full object-cover" />
          <button
            aria-label="Play story video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="bg-white/90 rounded-full p-4 hover:scale-110 transition-transform">
              <Play size={22} fill="#6B4A33" className="text-cocoa ml-0.5" />
            </span>
          </button>
        </motion.div>
      </section>

      {/* CUSTOMER LOVE + AS SEEN AND LOVED */}
      <section id="journal" className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-16">
        {/* Customer Love */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl mb-6">Customer Love</h2>
          <div className="grid grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center">
                <div className="aspect-[3/4] bg-shell rounded-sm overflow-hidden mb-3">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-gold mb-1">★★★★★</p>
                <p className="text-xs text-cocoa/70 italic mb-1 leading-snug">"{t.quote}"</p>
                <p className="text-xs text-cocoa/50">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* As Seen and Loved */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl mb-6">As Seen and Loved</h2>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-shell rounded-sm overflow-hidden">
                <img src={`/assets/social/social-${i + 1}.jpg`} alt={`Customer photo ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-cocoa/60 mt-4">
            Follow us <span className="text-gold">@paarajewellery</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
