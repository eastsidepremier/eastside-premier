import React, { useState, useEffect } from 'react';
import {
  Building2,
  MapPin,
  Hammer,
  Clock,
  CheckCircle2,
  ChevronRight,
  Phone,
  ArrowRight,
  Menu,
  X,
  Search,
  Zap,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Gem,
  ExternalLink,
  Mail,
  ShieldAlert,
  ArrowLeft
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'privacy', 'terms'

  // SEO and Metadata Injection
  useEffect(() => {
    document.title = "Eastside Premier Properties | Premier Real Estate Flipping & Acquisitions";

    const style = document.createElement('style');
    style.innerHTML = `
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
      }
      #root {
        width: 100%;
        margin: 0;
        padding: 0;
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const strategies = [
    {
      title: 'Off-Market Sourcing',
      desc: 'We leverage deep local networks to find distressed and off-market inventory in Bellevue and Kirkland before they reach the general public.',
      icon: <Zap className="text-amber-500" size={28} />,
      tag: 'Hidden Inventory'
    },
    {
      title: 'On-Market Precision',
      desc: 'Utilizing proprietary data analysis to identify undervalued MLS listings in the Redmond tech corridor with high-yield potential.',
      icon: <Search className="text-blue-500" size={28} />,
      tag: 'Data Driven'
    },
    {
      title: 'Luxury Redevelopment',
      desc: 'Our design-build approach focuses on high-end finishes that resonate with the sophisticated Eastside buyer demographic.',
      icon: <Gem className="text-emerald-500" size={28} />,
      tag: 'Premium ROI'
    }
  ];

  const portfolioItems = [
    {
      city: 'Bellevue',
      neighborhood: 'Somerset',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
      stats: { lift: '+42%', time: '85 Days' },
      desc: 'Full structural renovation of a 1970s split-level into a modern glass-front masterpiece.'
    },
    {
      city: 'Kirkland',
      neighborhood: 'Rose Hill',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
      stats: { lift: '+38%', time: '62 Days' },
      desc: 'Cosmetic overhaul and ADU addition to a classic Kirkland cottage.'
    }
  ];

  const Footer = () => (
    <footer className="bg-slate-900 text-white py-24 border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Building2 className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              EASTSIDE<span className="text-emerald-500">PREMIER</span>
            </span>
          </div>
          <p className="text-slate-400 max-w-sm mb-10 leading-relaxed text-lg">
            Setting the gold standard for redevelopment in King County's tech corridor. Precision acquisitions and world-class design.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-sm uppercase tracking-widest text-emerald-500 mb-8">Navigation</h5>
          <ul className="space-y-5 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
            <li><button onClick={() => {setCurrentPage('home'); setTimeout(() => document.getElementById('strategy')?.scrollIntoView(), 100)}} className="hover:text-white transition-colors">Our Strategy</button></li>
            <li><button onClick={() => {setCurrentPage('home'); setTimeout(() => document.getElementById('portfolio')?.scrollIntoView(), 100)}} className="hover:text-white transition-colors">Past Projects</button></li>
            <li><button onClick={() => {setCurrentPage('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100)}} className="hover:text-white transition-colors">Submit A Deal</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-sm uppercase tracking-widest text-emerald-500 mb-8">Contact</h5>
          <ul className="space-y-5 text-slate-400">
            <li className="flex items-center gap-3"><Phone size={16} /> (425) 441-9990</li>
            <li className="font-bold text-white underline decoration-emerald-500 underline-offset-8">deal@eastside-premier.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <div>&copy; 2026 Eastside Premier Properties LLC. All Rights Reserved.</div>
          <div className="flex gap-8">
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-white cursor-pointer transition-colors uppercase">Privacy Policy</button>
            <button onClick={() => setCurrentPage('terms')} className="hover:text-white cursor-pointer transition-colors uppercase">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1 className="text-5xl font-black mb-12 tracking-tighter uppercase italic">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us through our property analysis forms, including your name, role, email address, phone number, and property address. We also collect metadata related to your interaction with our website to improve our services.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">2. SMS & Mobile Policy</h2>
              <p className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 font-medium text-slate-800">
                <strong>Strict Non-Disclosure:</strong> No personal or mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Your contact information is used exclusively for internal property analysis and communication regarding specific deals.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">3. Use of Information</h2>
              <p>We use the collected information to evaluate potential real estate acquisitions, contact you regarding property submissions, and provide updates on our redevelopment projects. We do not sell your data to lead generators or marketing firms.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">4. Security</h2>
              <p>We implement industry-standard security measures to protect your property data and personal identifiers. However, no method of transmission over the internet is 100% secure.</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1 className="text-5xl font-black mb-12 tracking-tighter uppercase italic">Terms of Service</h1>
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">1. Acceptance of Terms</h2>
              <p>By accessing Eastside Premier Properties' website and submitting property information, you agree to be bound by these terms. Our services are intended for property owners, licensed real estate professionals, and authorized wholesalers.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">2. Property Submissions</h2>
              <p>Submission of a property through our portal does not constitute a binding purchase agreement. All offers or letters of intent issued by Eastside Premier Properties are subject to physical inspection, title review, and final underwriting.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">3. Representations</h2>
              <p>You represent that the information provided regarding any property is accurate to the best of your knowledge and that you have the legal right to discuss or market said property.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">4. Intellectual Property</h2>
              <p>All content, branding, and proprietary analysis methods displayed on this site are the property of Eastside Premier Properties LLC and may not be reproduced without written consent.</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden w-full">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-slate-900 p-2 rounded-lg transition-transform group-hover:rotate-12">
              <Building2 className="text-emerald-500" size={24} />
            </div>
            <span className={`text-xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              EASTSIDE<span className="text-emerald-500">PREMIER</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Strategy', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs font-bold uppercase tracking-[0.2em] hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
                {item}
              </a>
            ))}
            <a href="#contact" className="bg-emerald-600 text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-emerald-500 transition-all hover:shadow-xl hover:-translate-y-0.5">
              Work With Us
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900 w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Bellevue Architecture"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
            Bellevue • Kirkland • Redmond
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            REDEFINING THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 italic">EASTSIDE EXIT.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We are strategic redevelopment partners specializing in high-end transformations across King County’s most prestigious corridors.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#contact" className="bg-white text-slate-900 px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 group">
              Submit A Deal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#strategy" className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center">
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Section */}
      <section className="py-12 bg-emerald-600 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Avg ROI', val: '24%' },
            { label: 'Days to Close', val: '7-14' },
            { label: 'Projects Completed', val: '15+' },
            { label: 'Capital Deployed', val: '$10M+' }
          ].map((stat, i) => (
            <div key={i} className="text-white">
              <div className="text-3xl md:text-4xl font-black mb-1">{stat.val}</div>
              <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Cards */}
      <section id="strategy" className="py-32 bg-slate-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic">The Premier Edge.</h2>
              <p className="text-slate-500 text-lg">We don't just flip houses; we engineer value. Our team combines hyper-local market intelligence with world-class architectural design.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {strategies.map((s, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors"></div>
                <div className="relative z-10">
                  <div className="mb-8 inline-block p-4 bg-slate-900 rounded-2xl text-white transform group-hover:-rotate-6 transition-transform">
                    {s.icon}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">{s.tag}</div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <div className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Case Studies</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Recent Transformations.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8 h-[400px]">
                  <img
                    src={item.image}
                    alt={item.neighborhood}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                    <div className="flex gap-4">
                      <div className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest flex items-center gap-2">
                        <TrendingUp size={14} /> Value Lift: {item.stats.lift}
                      </div>
                      <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest flex items-center gap-2">
                        <Clock size={14} /> {item.stats.time}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight mb-2">{item.city} — {item.neighborhood}</h3>
                    <p className="text-slate-500 font-medium max-w-sm">{item.desc}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900 relative w-full">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl transition-all duration-500">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic">Ready to Exit?</h2>
                  <p className="text-slate-500 text-lg font-medium">Get a preliminary analysis for your property within 24 hours.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="grid gap-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-500 px-0 py-3 focus:ring-0 transition text-lg font-bold" placeholder="John Smith" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Role</label>
                      <select className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-500 px-0 py-3 focus:ring-0 transition text-lg font-bold appearance-none">
                        <option>Property Owner</option>
                        <option>Wholesaler</option>
                        <option>Agent / Broker</option>
                        <option>Investor Partner</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address (Optional)</label>
                      <div className="relative">
                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input type="email" className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-500 pl-7 pr-0 py-3 focus:ring-0 transition text-lg font-bold" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Phone Number (Optional)</label>
                      <div className="relative">
                        <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input type="tel" className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-500 pl-7 pr-0 py-3 focus:ring-0 transition text-lg font-bold" placeholder="(425) 555-0199" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Property Address</label>
                    <input required type="text" className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-emerald-500 px-0 py-3 focus:ring-0 transition text-lg font-bold" placeholder="123 Bellevue Way NE..." />
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <ShieldAlert className="text-emerald-600 flex-shrink-0" size={20} />
                      <p className="text-[11px] font-medium leading-relaxed text-slate-500 uppercase tracking-wider">
                        No personal/mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
                      </p>
                    </div>

                    <button type="submit" className="w-full bg-emerald-600 text-white font-black text-xl py-6 rounded-2xl hover:bg-slate-900 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4">
                      SUBMIT FOR ANALYSIS <ArrowRight size={24} />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-4 grayscale opacity-40">
                    <ShieldCheck size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Confidential & Direct</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full text-emerald-600">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic text-slate-900">Submission Received.</h2>
                <p className="text-slate-500 text-xl font-medium max-w-lg mx-auto mb-10 leading-relaxed">
                  We have received your request, our team will contact you soon with a preliminary property analysis.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-emerald-600 font-black uppercase tracking-widest text-sm hover:text-slate-900 transition-colors"
                >
                  Submit Another Property
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;