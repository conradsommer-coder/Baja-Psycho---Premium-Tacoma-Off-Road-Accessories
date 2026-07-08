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
  Dna,
  Globe,
  X
} from 'lucide-react';
import { cn } from './lib/utils';

type Language = 'es' | 'en';

const content = {
  es: {
    nav: { origins: 'Orígenes', engineering: 'Equipamiento', waitlist: 'Pedidos', notify: 'Notificarme' },
    hero: { est: 'Est. 2026 • Los Cabos, BCS', desc: 'Si tu Taco nunca ha visto tierra, esto no es para ti. Curaduría de accesorios para Toyota Tacoma. Built for Baja.', button: 'Acceso Anticipado', scroll: 'Deslizar' },
    stats: {
      s1: { label: 'Built for Baja.', value: 'El Origen', desc: 'Nacidos donde el desierto topa con el mar. Si aguanta aquí, aguanta donde sea.' },
      s2: { label: 'Filtro de Calidad', value: 'Curaduría', desc: 'No vendemos volumen. Ni accesorios genéricos. Si está en el catálogo, es porque La Taco lo exige.' },
      s3: { label: 'Especialistas', value: 'Solo Tacoma', desc: 'Ni una camioneta más. Conocemos esta plataforma hasta el último tornillo.' }
    },
    about: {
      subtitle: 'Built for Baja.',
      title: <>El Carro<br />Sueño.</>,
      p1: 'Baja Psycho nació en Los Cabos, donde los hoyos de la calle te cobran caro si no traes la camioneta correcta, y donde el desierto y las playas te esperan a diez minutos de la ciudad. La Tacoma no fue una compra. Fue el carro sueño. El que se trabaja y se ahorra para tener.',
      p2: 'Y cuando llegó, llegó también la pregunta: ¿dónde consigues en México los accesorios que merece? Baja Psycho existe para responder esa pregunta. Un buen leveling kit, un bed rack sólido. Solo Tacoma. Solo calidad.',
      quote: '"La Baja no perdona las llantas baratas. Ni el equipo a medias."'
    },
    gallery: {
      g1: { label: 'Bed Racks & Overlanding', title: 'Lista para la ruta' },
      g2: { label: 'Lift Kits & Suspensión', title: 'El terreno no importa' }
    },
    popup: {
      title: 'Acceso Anticipado.',
      desc: 'Deja tus datos. Te avisamos cuando haya nuevo equipo disponible o estemos listos para enviar. Sin spam.',
      firstName: 'Nombre',
      lastName: 'Apellido',
      whatsapp: 'WhatsApp',
      email: 'Correo (Obligatorio)',
      button: 'Avisenme',
      processing: 'Procesando...',
      success: 'Anotado. Estamos en contacto.'
    },
    contact: {
      badge: 'Bajo Pedido',
      title: 'Pedido Especial',
      desc: '¿Buscas algo en específico para la Taco? Deja tus datos y los detalles de tu pieza. No vendemos genéricos, revisaremos tu caso.',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico *',
      message: '¿Qué pieza buscas?',
      button: 'Solicitar',
      processing: 'Enviando...',
      successTitle: 'Recibido',
      successDesc: 'Revisamos tu caso y nos ponemos en contacto.'
    },
    footer: {
      desc: 'Curaduría de accesorios exclusivos para Toyota Tacoma. Nacidos en Los Cabos. Construidos para la Baja.',
      locTitle: 'Ubicación',
      loc1: 'Los Cabos, Baja California Sur, MX',
      loc2: 'Envíos a todo México.',
      legalTitle: 'Legal',
      l1: 'Privacidad',
      l2: 'Términos',
      l3: 'Envíos',
      copy: '© 2026 Baja Psycho. No relacionado con Toyota Motor Corp.'
    }
  },
  en: {
    nav: { origins: 'Origins', engineering: 'Hardware', waitlist: 'Requests', notify: 'Notify Me' },
    hero: { est: 'Est. 2026 • Los Cabos, BCS', desc: 'If your Taco has never seen dirt, this isn\'t for you. Curated Toyota Tacoma accessories. Built for Baja.', button: 'Early Access', scroll: 'Scroll' },
    stats: {
      s1: { label: 'Built for Baja.', value: 'The Origin', desc: 'Born where the desert meets the sea. If it survives here, it survives anywhere.' },
      s2: { label: 'Quality Filter', value: 'Curated', desc: 'We don\'t sell volume. No generic accessories. If it\'s in the catalog, it\'s because it works.' },
      s3: { label: 'Specialists', value: 'Only Tacoma', desc: 'Not one other truck. We know this platform down to the last bolt.' }
    },
    about: {
      subtitle: 'Built for Baja.',
      title: <>The Dream<br />Truck.</>,
      p1: 'Baja Psycho was born in Los Cabos, where potholes punish the wrong truck, and where desert and beaches wait ten minutes from the city. The Tacoma wasn\'t a purchase. It was the dream truck. The one you work hard and save for.',
      p2: 'And when it arrived, so did the question: where do you find in Mexico the accessories it deserves? Baja Psycho exists to answer that question. A solid leveling kit, a proper bed rack. Only Tacoma. Only quality.',
      quote: '"Baja has no mercy for cheap tires. Or half-baked gear."'
    },
    gallery: {
      g1: { label: 'Bed Racks & Overlanding', title: 'Ready for the dirt' },
      g2: { label: 'Lift Kits & Suspension', title: 'Terrain doesn\'t matter' }
    },
    popup: {
      title: 'Early Access.',
      desc: 'Drop your info. We\'ll notify you when new gear drops. No spam.',
      firstName: 'First Name',
      lastName: 'Last Name',
      whatsapp: 'WhatsApp',
      email: 'Email (Required)',
      button: 'Notify Me',
      processing: 'Processing...',
      success: 'Noted. Talk soon.'
    },
    contact: {
      badge: 'By Request',
      title: 'Special Request',
      desc: 'Looking for a specific part for your Taco? Leave your details and the part you need. We don\'t do generic, we\'ll review your case.',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email *',
      message: 'What part are you looking for?',
      button: 'Request',
      processing: 'Sending...',
      successTitle: 'Received',
      successDesc: 'We\'ll review and get back to you.'
    },
    footer: {
      desc: 'Curated, exclusive accessories for Toyota Tacoma. Born in Los Cabos. Built for Baja.',
      locTitle: 'Location',
      loc1: 'Los Cabos, Baja California Sur, MX',
      loc2: 'Shipping across Mexico.',
      legalTitle: 'Legal',
      l1: 'Privacy Policy',
      l2: 'Terms of Service',
      l3: 'Shipping',
      copy: '© 2026 Baja Psycho. Not affiliated with Toyota Motor Corp.'
    }
  }
};

export default function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('es');

  // Contact form state
  const [contactData, setContactData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({ firstName: '', lastName: '', whatsapp: '', email: '' });
  const [isPopupSubmitting, setIsPopupSubmitting] = useState(false);
  const [isPopupSubmitted, setIsPopupSubmitted] = useState(false);
  const [popupError, setPopupError] = useState<string | null>(null);

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Popup logic
    const hasVisited = localStorage.getItem('bajaPsychoVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('bajaPsychoVisited', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.email) return;

    setIsContactSubmitting(true);
    setContactError(null);

    try {
      const formData = new FormData();
      formData.append('firstName', contactData.firstName);
      formData.append('lastName', contactData.lastName);
      formData.append('email', contactData.email);
      formData.append('message', contactData.message);

      const response = await fetch('https://formspree.io/f/mdavjvaw', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsContactSubmitted(true);
      setContactData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      setContactError(error instanceof Error ? error.message : 'Error sending message');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handlePopupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!popupData.email) return;

    setIsPopupSubmitting(true);
    setPopupError(null);

    try {
      const formData = new FormData();
      formData.append('firstName', popupData.firstName);
      formData.append('lastName', popupData.lastName);
      formData.append('whatsapp', popupData.whatsapp);
      formData.append('email', popupData.email);

      const response = await fetch('https://formspree.io/f/mdavjvaw', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsPopupSubmitted(true);
      setTimeout(() => {
        setShowPopup(false);
        setIsPopupSubmitted(false);
        setPopupData({ firstName: '', lastName: '', whatsapp: '', email: '' });
      }, 2500);
    } catch (error) {
      setPopupError(error instanceof Error ? error.message : 'Error sending message');
    } finally {
      setIsPopupSubmitting(false);
    }
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-baja-cream selection:text-black distressed-texture overflow-x-hidden">
      
      {/* 5 Second Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#050505] border border-white/10 w-full max-w-lg relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button"
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="p-8 md:p-12 relative z-10">
                <ShieldCheck className="w-10 h-10 text-baja-sand mb-6" />
                <h3 className="font-display text-4xl uppercase mb-3 text-baja-cream">{t.popup.title}</h3>
                <p className="text-sm opacity-60 mb-8 font-sans leading-relaxed">
                  {t.popup.desc}
                </p>

                {!isPopupSubmitted && !popupError ? (
                  <form onSubmit={handlePopupSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder={t.popup.firstName}
                        disabled={isPopupSubmitting}
                        className="w-full bg-white/5 border-b border-white/10 focus:border-baja-sand px-4 py-3 font-mono text-xs uppercase tracking-widest focus:outline-none transition-all placeholder:text-white/30 text-white disabled:opacity-50"
                        value={popupData.firstName}
                        onChange={(e) => setPopupData({...popupData, firstName: e.target.value})}
                      />
                      <input
                        type="text"
                        placeholder={t.popup.lastName}
                        disabled={isPopupSubmitting}
                        className="w-full bg-white/5 border-b border-white/10 focus:border-baja-sand px-4 py-3 font-mono text-xs uppercase tracking-widest focus:outline-none transition-all placeholder:text-white/30 text-white disabled:opacity-50"
                        value={popupData.lastName}
                        onChange={(e) => setPopupData({...popupData, lastName: e.target.value})}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder={t.popup.whatsapp}
                      disabled={isPopupSubmitting}
                      className="w-full bg-white/5 border-b border-white/10 focus:border-baja-sand px-4 py-3 font-mono text-xs uppercase tracking-widest focus:outline-none transition-all placeholder:text-white/30 text-white disabled:opacity-50"
                      value={popupData.whatsapp}
                      onChange={(e) => setPopupData({...popupData, whatsapp: e.target.value})}
                    />
                    <input
                      type="email"
                      required
                      placeholder={t.popup.email}
                      disabled={isPopupSubmitting}
                      className="w-full bg-white/5 border-b border-white/10 focus:border-baja-sand px-4 py-3 font-mono text-xs uppercase tracking-widest focus:outline-none transition-all placeholder:text-white/30 text-white disabled:opacity-50"
                      value={popupData.email}
                      onChange={(e) => setPopupData({...popupData, email: e.target.value})}
                    />

                    <button
                      type="submit"
                      disabled={isPopupSubmitting}
                      className="w-full bg-baja-cream text-black px-8 py-4 font-display text-xl uppercase tracking-wider hover:bg-white disabled:opacity-50 transition-all mt-4 flex justify-center"
                    >
                      {isPopupSubmitting ? t.popup.processing : t.popup.button}
                    </button>
                  </form>
                ) : isPopupSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-8 text-center border border-dashed border-baja-sand/30"
                  >
                    <Trophy className="w-8 h-8 text-baja-sand mx-auto mb-4" />
                    <h4 className="font-display text-2xl uppercase text-baja-cream">{t.popup.success}</h4>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-8 text-center border border-solid border-red-400/50 bg-red-950/20"
                  >
                    <div className="text-2xl mb-4">⚠️</div>
                    <h4 className="font-display text-lg uppercase text-red-300 mb-3">Error</h4>
                    <p className="text-sm text-red-200/80 mb-6">{popupError}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setPopupError(null);
                        setPopupData({ firstName: '', lastName: '', whatsapp: '', email: '' });
                      }}
                      className="w-full bg-baja-cream text-black px-8 py-3 font-display uppercase tracking-wider hover:bg-white transition-all"
                    >
                      Intentar de nuevo
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <a href="#about" className="hover:text-baja-cream transition-colors">{t.nav.origins}</a>
            <a href="#performance" className="hover:text-baja-cream transition-colors">{t.nav.engineering}</a>
            <a href="#waitlist" className="hover:text-baja-cream transition-colors">{t.nav.waitlist}</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest"
              title="Toggle Language"
            >
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <a 
              href="#waitlist"
              className="px-4 py-2 bg-baja-cream text-black font-mono text-[10px] tracking-widest uppercase hover:bg-white transition-all duration-300 hidden md:block"
            >
              {t.nav.notify}
            </a>
          </div>
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
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1779953788/ChatGPT_Image_May_28_2026_12_35_53_AM_fcrf36.png" 
            alt="Toyota Tacoma Racing"
            className="w-full h-full object-cover brightness-75"
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
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-baja-cream opacity-80">{t.hero.est}</span>
              <div className="h-px w-6 md:w-8 bg-baja-sand" />
            </div>
            
            <h1 className="font-display text-[clamp(4.5rem,18vw,14rem)] leading-[0.75] uppercase tracking-tighter mb-8 text-baja-cream">
              Baja<br />
              <span className="outline-text text-baja-sand opacity-90">Psycho</span>
            </h1>
            
            <p className="max-w-sm md:max-w-md mx-auto text-sm md:text-lg opacity-60 font-sans tracking-tight mb-10 leading-relaxed">
              {t.hero.desc}
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
                <span className="relative z-10 font-display text-xl md:text-2xl uppercase tracking-wider">{t.hero.button}</span>
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
          <span className="font-mono text-[8px] uppercase tracking-widest">{t.hero.scroll}</span>
          <div className="w-px h-12 bg-white" />
        </motion.div>
      </section>

      {/* Engineering Stats Section */}
      <section id="performance" className="py-24 md:py-32 border-y border-white/5 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-white/5 md:border-x">
            {[
              { icon: ShieldCheck, label: t.stats.s1.label, value: t.stats.s1.value, desc: t.stats.s1.desc },
              { icon: Wrench, label: t.stats.s2.label, value: t.stats.s2.value, desc: t.stats.s2.desc },
              { icon: Dna, label: t.stats.s3.label, value: t.stats.s3.value, desc: t.stats.s3.desc },
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
              <div className="font-brush text-baja-sand text-2xl md:text-3xl mb-4 -rotate-2">{t.about.subtitle}</div>
              <h2 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] tracking-tighter mb-8 text-baja-cream">
                {t.about.title}
              </h2>
              <div className="space-y-6 text-base md:text-lg opacity-60 leading-relaxed max-w-lg">
                <p>
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
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
                src="https://res.cloudinary.com/dr78wne7t/image/upload/v1779953308/ChatGPT_Image_May_28_2026_12_27_35_AM_2_rfdypr.png"
                alt="Off Road Detail"
                className="w-full h-full object-cover brightness-90 shadow-2xl"
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
                  {t.about.quote}
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
                <span className="font-mono text-[10px] tracking-widest uppercase text-baja-sand mb-2">{t.gallery.g1.label}</span>
                <h4 className="font-display text-4xl uppercase">{t.gallery.g1.title}</h4>
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
                <span className="font-mono text-[10px] tracking-widest uppercase text-baja-sand mb-2">{t.gallery.g2.label}</span>
                <h4 className="font-display text-4xl uppercase">{t.gallery.g2.title}</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact / Special Request Section */}
      <section id="waitlist" className="py-24 md:py-32 bg-baja-cream text-black distressed-texture relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Wrench className="w-96 h-96 -rotate-45 translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-mono text-[8px] uppercase tracking-[0.3em] mb-8">
              <Zap className="w-2 h-2 fill-baja-sand text-baja-sand" /> {t.contact.badge}
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] uppercase leading-none mb-8 tracking-tighter">{t.contact.title}</h2>
            <p className="text-base md:text-xl opacity-80 mb-14 max-w-2xl mx-auto font-sans leading-relaxed">
              {t.contact.desc}
            </p>

            <AnimatePresence mode="wait">
              {!isContactSubmitted && !contactError ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleContactSubmit}
                  className="bg-black/5 p-8 md:p-12 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">{t.contact.firstName}</label>
                      <input
                        type="text"
                        required
                        disabled={isContactSubmitting}
                        className="w-full bg-transparent border-b-2 border-black/20 focus:border-black px-0 py-3 font-mono text-sm uppercase tracking-widest focus:outline-none transition-all text-black disabled:opacity-50"
                        value={contactData.firstName}
                        onChange={(e) => setContactData({...contactData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">{t.contact.lastName}</label>
                      <input
                        type="text"
                        disabled={isContactSubmitting}
                        className="w-full bg-transparent border-b-2 border-black/20 focus:border-black px-0 py-3 font-mono text-sm uppercase tracking-widest focus:outline-none transition-all text-black disabled:opacity-50"
                        value={contactData.lastName}
                        onChange={(e) => setContactData({...contactData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">{t.contact.email}</label>
                    <input
                      type="email"
                      required
                      disabled={isContactSubmitting}
                      className="w-full bg-transparent border-b-2 border-black/20 focus:border-black px-0 py-3 font-mono text-sm uppercase tracking-widest focus:outline-none transition-all text-black disabled:opacity-50"
                      value={contactData.email}
                      onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    />
                  </div>

                  <div className="mb-12">
                    <label className="block font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">{t.contact.message}</label>
                    <textarea
                      required
                      disabled={isContactSubmitting}
                      rows={3}
                      className="w-full bg-transparent border-b-2 border-black/20 focus:border-black px-0 py-3 font-sans text-base focus:outline-none transition-all text-black resize-none disabled:opacity-50"
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isContactSubmitting}
                    className="w-full md:w-auto bg-black text-white px-12 py-5 font-display text-2xl uppercase tracking-wider hover:bg-zinc-800 disabled:opacity-50 transition-all flex items-center justify-center gap-3 shrink-0 mx-auto"
                  >
                    {isContactSubmitting ? t.contact.processing : t.contact.button}
                  </button>
                </motion.form>
              ) : isContactSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-12 bg-black/5 inline-block w-full max-w-xl"
                >
                  <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-black" />
                  <h3 className="font-display text-4xl uppercase mb-2">{t.contact.successTitle}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">{t.contact.successDesc}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="error"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-12 bg-red-100 inline-block w-full max-w-xl"
                >
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl">⚠️</span>
                  </div>
                  <h3 className="font-display text-3xl uppercase mb-2">Error</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-6">{contactError}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setContactError(null);
                      setContactData({ firstName: '', lastName: '', email: '', message: '' });
                    }}
                    className="w-full bg-black text-white px-8 py-3 font-display text-lg uppercase tracking-wider hover:bg-zinc-800 transition-all"
                  >
                    Intentar de nuevo
                  </button>
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
              {t.footer.desc}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-baja-cream hover:text-black transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-baja-cream hover:text-black transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-baja-cream hover:text-black transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6 opacity-30 text-white">{t.footer.locTitle}</h4>
            <div className="flex items-center gap-3 justify-center md:justify-start text-sm opacity-60">
              <MapPin className="w-4 h-4 text-baja-sand" />
              <span>{t.footer.loc1}</span>
            </div>
            <div className="text-sm opacity-60">
              {t.footer.loc2}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6 opacity-30 text-white">{t.footer.legalTitle}</h4>
            <div className="flex flex-col gap-3 text-sm opacity-60">
              <a href="#" className="hover:text-baja-cream transition-colors">{t.footer.l1}</a>
              <a href="#" className="hover:text-baja-cream transition-colors">{t.footer.l2}</a>
              <a href="#" className="hover:text-baja-cream transition-colors">{t.footer.l3}</a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.5em] opacity-20">
            {t.footer.copy}
          </p>
        </div>
      </footer>
    </div>
  );
}
