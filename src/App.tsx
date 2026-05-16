import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  MapPin, 
  Zap, 
  ChevronRight, 
  Mail, 
  Instagram, 
  Twitter, 
  Facebook,
  ShieldCheck,
  Wrench,
  Dna
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call for now (until Firebase is ready)
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-baja-cream selection:text-black distressed-texture overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        hasScrolled 
          ? "bg-black/95 backdrop-blur-md py-4 border-white/10" 
          : "bg-transparent py-8 border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778955564/4_lszo2n.png" 
              alt="Logo" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain brightness-110"
            />
            <span className="font-display text-xl md:text-2xl tracking-tighter uppercase text-white">Baja Psycho</span>
          </div>
          
          <div className="hidden md:flex gap-8 uppercase font-mono text-[10px] tracking-[0.2em] opacity-60">
            <a href="#about" className="hover:text-baja-cream transition-colors">Origins</a>
            <a href="#performance" className="hover:text-baja-cream transition-colors">Engineering</a>
            <a href="#waitlist" className="hover:text-baja-cream transition-colors">Join Waitlist</a>
          </div>

          <a 
            href="#waitlist"
            className="px-4 py-2 bg-baja-cream text-black font-mono text-[10px] tracking-widest uppercase hover:bg-white transition-all duration-300"
          >
            Notify Me
          </a>
        </div>
      </nav>

      {/* Hero Section with Zoom Effect */}
      <section className="relative min-h-[105vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Zoom-in Animation */}
        <motion.div 
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778956452/ChatGPT_Image_May_16_2026_11_33_30_AM_1_ipzxqi.png" 
            alt="Toyota Tacoma Racing"
            className="w-full h-full object-cover grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="flex flex-col items-center"
          >
            {/* MAIN SHIELD LOGO */}
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778955568/2_ab027l.png"
              alt="Baja Psycho Shield"
              className="w-64 md:w-80 mb-12 drop-shadow-[0_0_30px_rgba(235,230,217,0.2)]"
            />

            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-6 md:w-8 bg-baja-sand" />
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-baja-cream opacity-80">Est. 2026 • Baja Mexico</span>
              <div className="h-px w-6 md:w-8 bg-baja-sand" />
            </div>
            
            <h1 className="font-display text-[clamp(4.5rem,18vw,14rem)] leading-[0.75] uppercase tracking-tighter mb-8 text-baja-cream">
              Baja<br />
              <span className="outline-text text-baja-sand opacity-90">Psycho</span>
            </h1>
            
            <p className="max-w-sm md:max-w-md mx-auto text-sm md:text-lg opacity-60 font-sans tracking-tight mb-10 leading-relaxed">
              High-performance off-road accessories engineered for the ultimate Toyota Tacoma builds. Desert tested. Psycho approved.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#waitlist" 
                className="group relative flex items-center gap-4 bg-baja-cream px-10 py-6 text-black overflow-hidden shadow-[0_0_40px_rgba(235,230,217,0.15)]"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 font-display text-xl md:text-2xl uppercase tracking-wider">Access the Fleet</span>
                <ChevronRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="font-mono text-[8px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-white" />
        </motion.div>
      </section>

      {/* Engineering Stats Section */}
      <section id="performance" className="py-24 md:py-32 border-y border-white/5 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-white/5 md:border-x">
            {[
              { icon: ShieldCheck, label: "Bulletproof", value: "Built to Outlast", desc: "Military grade alloys and finishes for extreme durability." },
              { icon: Wrench, label: "Precision", value: "Zero Tolerance", desc: "CNC machined components for flawless Tacoma integration." },
              { icon: Dna, label: "Evolution", value: "Desert Bred", desc: "Iterated through thousands of miles of Baja brutal testing." },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={cn(
                  "flex flex-col items-center text-center p-12 border-b md:border-b-0 border-white/5",
                  idx !== 2 && "md:border-r border-white/5"
                )}
              >
                <stat.icon className="w-10 h-10 text-baja-sand mb-6" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2 opacity-50">{stat.label}</span>
                <h3 className="font-display text-3xl uppercase mb-3 text-baja-cream">{stat.value}</h3>
                <p className="text-sm opacity-40 leading-relaxed font-sans">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Image Grid / Coming Soon Showcase */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778955561/3_l7g8af.png" 
                alt="Badge" 
                className="w-24 mb-6 opacity-80"
              />
              <div className="font-brush text-baja-sand text-2xl md:text-3xl mb-4 -rotate-2">The New Standard</div>
              <h2 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] tracking-tighter mb-8 text-baja-cream">
                Without<br />
                Limits.
              </h2>
              <div className="space-y-6 text-base md:text-lg opacity-60 leading-relaxed max-w-lg">
                <p>
                  Most brands build for looks. We build for the Psycho. The ones who see a trail and think "faster". The ones who push their Tacoma until it breaks, then ask for more.
                </p>
                <p>
                  Our upcoming catalog includes long-travel suspension kits, race-spec bumpers, and interior recovery systems that don't just look the part—they survive the Baja.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 border border-baja-sand/20 -m-4 md:-m-12 pointer-events-none" />
              <img 
                src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778956443/ChatGPT_Image_May_16_2026_11_33_31_AM_4_yjtx1n.png"
                alt="Off Road Detail"
                className="w-full h-full object-cover grayscale brightness-90 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 right-0 p-6 md:p-10 pointer-events-none">
                <img 
                  src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778955558/1_rgxh9u.png" 
                  alt="Badge Detail" 
                  className="w-32 md:w-48 drop-shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-baja-cream text-black p-6 md:p-10 max-w-[240px] md:max-w-[280px] shadow-2xl">
                <Trophy className="w-8 h-8 mb-4 text-baja-sand" />
                <p className="font-mono text-[10px] md:text-[11px] uppercase leading-relaxed tracking-wider">
                  "Designed by racers, built for the adventure of a lifetime."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery / Loadout Showcase */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden border border-white/5"
            >
              <img 
                src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778956451/ChatGPT_Image_May_16_2026_11_33_31_AM_2_bc3l21.png" 
                alt="Tacoma Loading" 
                className="w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-12 flex flex-col justify-end">
                <span className="font-mono text-[10px] tracking-widest uppercase text-baja-sand mb-2">Stage 3 Kit</span>
                <h4 className="font-display text-4xl uppercase">The Loadout</h4>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden border border-white/5"
            >
              <img 
                src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778956450/ChatGPT_Image_May_16_2026_11_33_31_AM_3_c8tvfy.png" 
                alt="Tacoma Detail" 
                className="w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-12 flex flex-col justify-end">
                <span className="font-mono text-[10px] tracking-widest uppercase text-baja-sand mb-2">Race Series</span>
                <h4 className="font-display text-4xl uppercase">Brutal Precision</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 md:py-32 bg-baja-cream text-black distressed-texture">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1778955564/4_lszo2n.png" 
              alt="Monogram"
              className="w-28 md:w-32 mx-auto mb-10 brightness-0"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-mono text-[8px] uppercase tracking-[0.3em] mb-8">
              <Zap className="w-2 h-2 fill-baja-sand text-baja-sand" /> Limited Release
            </div>
            <h2 className="font-display text-7xl md:text-[11rem] uppercase leading-none mb-8 tracking-tighter">Join The Clan</h2>
            <p className="text-lg md:text-xl opacity-70 mb-14 max-w-xl mx-auto font-sans leading-relaxed">
              Be the first to access the 2026 Summer Drop. Limited production runs. Precision engineered. No restocks.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
                >
                  <div className="relative flex-1 group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30 group-focus-within:opacity-100 group-focus-within:text-baja-sand transition-all" />
                    <input 
                      type="email" 
                      required
                      placeholder="ENTER YOUR EMAIL"
                      className="w-full bg-black/5 border-b-2 border-black/20 focus:border-black px-16 py-6 font-mono text-xs uppercase tracking-widest focus:outline-none transition-all placeholder:text-black/30"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-black text-white px-12 py-6 font-display text-2xl uppercase tracking-wider hover:bg-zinc-800 disabled:opacity-50 transition-all flex items-center justify-center gap-3 shrink-0"
                  >
                    {isSubmitting ? "Processing..." : "Secure Access"}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-12 border-4 border-black inline-block"
                >
                  <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-baja-sand" />
                  <h3 className="font-display text-4xl uppercase mb-2">You're in the list</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">Expect communication soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <Zap className="w-6 h-6 text-baja-cream fill-baja-cream" />
              <span className="font-display text-3xl tracking-tighter uppercase text-white">Baja Psycho</span>
            </div>
            <p className="max-w-xs mx-auto md:mx-0 opacity-40 text-sm mb-8 leading-relaxed">
              Engineering performance accessories for the modern explorer. Rooted in Baja racing heritage, built for the future of Tacoma.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-baja-cream hover:text-black transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-baja-cream hover:text-black transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-baja-cream hover:text-black transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6 opacity-30 text-white">Location</h4>
            <div className="flex items-center gap-3 justify-center md:justify-start text-sm opacity-60">
              <MapPin className="w-4 h-4 text-baja-sand" />
              <span>Ensenada, Baja California, MX</span>
            </div>
            <div className="text-sm opacity-60">
              Distribution: Phoenix, AZ | San Diego, CA
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6 opacity-30 text-white">Legal</h4>
            <div className="flex flex-col gap-3 text-sm opacity-60">
              <a href="#" className="hover:text-baja-cream transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-baja-cream transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-baja-cream transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.5em] opacity-20">
            © 2026 Baja Psycho Off-Road Accessories. Not affiliated with Toyota Motor Corp.
          </p>
        </div>
      </footer>
    </div>
  );
}
