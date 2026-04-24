/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Facebook, 
  Phone, 
  MapPin, 
  Heart, 
  Star, 
  Quote, 
  ChevronRight, 
  Newspaper,
  PlayCircle,
  Menu,
  UtensilsCrossed,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/669960304_1563685429093038_4724674836009237997_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4VdrjYFwCLoQ7kNvwG5AmW4&_nc_oc=AdpkaGRSQbxJfOp4JfD0CR_LK8Cc9XwsddydVwu3jeRY3ltWgsiKUo-Pn1ebBDrXtUA&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=iCupncagtbt7Sj7Tg_gfCA&oh=00_Af0JpMB8eK1Zu89EeDogjt1g0aEQUoFiwwwaSGcMDZ22WQ&oe=69F12375",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/668599452_1560522939409287_8783546095471792306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qSGVrYi8Z1wQ7kNvwGNRotg&_nc_oc=Adpvy653-zBbfmYB3GbRLdZ5TxD_K6g5RqaDfFmB86nc0LZWfaGlYMC85OKQXdj7kKA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=0S-0kljOV-6OARz5dPPiTQ&oh=00_Af09d8NcES8_WQIo8cST9YXrDiRFDcSFoVbQcUf9bsbVTg&oe=69F12843",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/655071528_1548755543919360_6999827803946069265_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8WYxqGSffbcQ7kNvwEbvfp2&_nc_oc=AdoJ-XImp9c30t1UGaat-SY_LzdxupJSGkf9aUEECFn2VSTxizuXTKmlz0J1-1dTtO0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=d7jw5pOw4q6SvsOyILyAdQ&oh=00_Af1oRKfAT3duzMncGYM4LWbth_AqNE_7JTgvHB1-gyZgkQ&oe=69F10F76",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/669588222_1565539592240955_3101187036170743110_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kjhNB1Z25ZAQ7kNvwEhOPfL&_nc_oc=AdqFrCdSIJ6LUMyBAI_qYdHb-MPr8FWQoGrR7SlO0A9Z1GnsLD-B8JpSzQeGRCNKl1U&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=tHiYqRtsrrTSSwbOZFf0ig&oh=00_Af1mgxBmpBNbupp6PpSU1OmskeEguTp5vh8zwSiaxzXPAw&oe=69F12AAA",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/649645287_1535436355251279_2033795473214080547_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cR4Y7zRla38Q7kNvwETy-kF&_nc_oc=AdpAfz7iDwGzSXtuht2z3DSWL4Miyq0LCQzNewmMD32OVbudLhroJt0CKaR0y9QImJA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Yl-VVrXQAdXHTteNhbhgXQ&oh=00_Af2d_fpYMxnmAS98BdTqGIRHK0AZqIzG-Qke1Xd5mDAReg&oe=69F0F8B8",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/632776149_1507611428033772_7704157158895287553_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=gHA7Z0MSZU8Q7kNvwFFAJHP&_nc_oc=Adqzo9-_IthOcc80m5tJHjR0-vD9HYpAurPxCOqd69XoLJuGrS9guxv1aRU627KPBEk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=OrEHjPs8YV3_TNToEUfcfw&oh=00_Af3t_eg01vrjW9qLdh2b1TdCN9k0iyC9zGsJ-BTyvW9A6g&oe=69F10F4D"
];

const REELS = [
  { url: "https://www.facebook.com/reel/1721899819185338/", title: "Nasza codzienność" },
  { url: "https://www.facebook.com/reel/828865200182686/", title: "Świeże składniki" },
  { url: "https://www.facebook.com/reel/791609857093265/", title: "Sztuka lepienia" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-terracotta/20 bg-brand-paper overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4 flex justify-between items-center ${
          isScrolled ? 'bg-brand-paper/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="group flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-serif text-3xl font-bold tracking-tighter text-brand-terracotta leading-none">Pierogarnia</span>
          <span className="font-hand text-xl text-brand-sage self-end -mt-1 group-hover:rotate-6 transition-transform">By Staroń</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center font-serif text-sm uppercase tracking-widest font-bold">
          <a href="#o-nas" className="hover:text-brand-terracotta transition-colors relative group">
            O nas
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-terracotta group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#aktualnosci" className="hover:text-brand-terracotta transition-colors relative group">
            Aktualności
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-terracotta group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#galeria" className="hover:text-brand-terracotta transition-colors relative group">
            Galeria
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-terracotta group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#kontakt" className="bg-brand-terracotta text-white px-6 py-2.5 rounded-full hover:bg-brand-ink transition-all shadow-md active:scale-95">
            Zadzwoń do nas
          </a>
        </div>
        
        <button className="md:hidden text-brand-terracotta p-2 bg-brand-warm rounded-full">
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero: Warm Kitchen Invitation */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-px bg-brand-terracotta/30" />
              <span className="font-hand text-2xl text-brand-sage">Domowe & Świeże</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-[0.9] text-brand-ink">
              Pasja do <br />
              <span className="italic text-brand-terracotta">prawdziwego</span> <br />
              jedzenia.
            </h1>
            <p className="font-serif text-xl md:text-2xl italic text-brand-ink/70 mb-10 max-w-lg leading-relaxed">
              "Pierogi to moja miłość i sposób na wyrażenie siebie. Każdy jest lepiony ręcznie, unikalny – nigdy identyczny."
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#aktualnosci"
                whileHover={{ scale: 1.05 }}
                className="bg-brand-sage text-white px-8 py-4 rounded-full font-serif text-lg tracking-wide shadow-lg hover:shadow-brand-sage/20 transition-all"
              >
                Co dzisiaj polecam?
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/profile.php?id=100063547870204"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-brand-warm bg-white text-brand-ink px-8 py-4 rounded-full font-serif text-lg flex items-center gap-2 hover:bg-brand-warm/30 transition-all"
              >
                <Facebook size={20} className="text-[#1877F2]" /> Facebook
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Scrapbook Frame */}
            <div className="relative z-10 bg-white p-4 paper-shadow rounded-sm rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src={IMAGES[0]} 
                alt="Pierogi" 
                className="w-full aspect-[4/5] object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 font-hand text-4xl text-brand-terracotta -rotate-12 bg-brand-warm/90 px-4 py-2 border border-brand-terracotta/10 rounded-lg">
                Z sercem!
              </div>
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-warm rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-terracotta/10 rounded-full -z-10 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* The Story / Passion */}
      <section id="o-nas" className="py-32 bg-brand-warm/30 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 paper-shadow -rotate-3 rounded-sm relative z-10"
              >
                <img 
                  src={IMAGES[5]} 
                  alt="Nasza pasja" 
                  className="w-full transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute top-10 right-0 w-full h-full border-4 border-brand-terracotta/10 -rotate-6 -z-10" />
            </div>
            
            <div className="order-1 md:order-2">
              <span className="font-hand text-3xl text-brand-terracotta mb-4 block">Moja Historia</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-ink mb-8 leading-tight">
                To nie tylko jedzenie, <br />
                <span className="italic">to sposób na życie.</span>
              </h2>
              <div className="space-y-6 font-serif text-xl leading-relaxed text-brand-ink/80">
                <p>
                  "Pierogi to moja miłość i sposób na wyrażenie siebie. Każdy jest lepiony ręcznie, unikalny – nigdy identyczny, ale zawsze pełen smaku, pasji i domowego ciepła."
                </p>
                <p className="border-l-4 border-brand-terracotta/20 pl-6 italic">
                  "To tradycja, która za każdym razem smakuje jeszcze lepiej."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News / Weekly Menu (Chalkboard Style) */}
      <section id="aktualnosci" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-ink text-brand-paper p-12 md:p-20 organic-card relative overflow-hidden shadow-2xl">
            {/* Flour dusting effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 blur-2xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6 text-brand-terracotta">
                    <Newspaper size={24} />
                    <span className="font-serif text-sm uppercase tracking-[0.3em] font-bold">Tablica Nowości — 20.04.2026</span>
                  </div>
                  <h3 className="font-serif text-5xl mb-8 border-b border-white/10 pb-4">
                    Nowy tydzień, <br />
                    nowe <span className="text-brand-terracotta">pierożki!</span>
                  </h3>
                  <img 
                    src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/674207660_1571196778341903_691798696807677870_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=LAskdNv8qbkQ7kNvwFSeSCl&_nc_oc=AdrEk58NfVfzQPFTT3OMMySmri3o8dzbnLlVFWJ773OI49h3yUl5IPziBLPFvumtUe0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=w3yIaOA6y-2vymF0L8i47Q&oh=00_Af2PWL4gIODHSdGDrSabcRdel4SzVaS-CsA7JqagzPpuwg&oe=69F111BC" 
                    alt="Ręczna praca" 
                    className="w-full h-64 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity paper-shadow border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
                <p className="font-hand text-3xl text-brand-terracotta mb-8">Na ten tydzień planuję:</p>
                <ul className="space-y-6 font-serif text-2xl list-none">
                  {[
                    { dish: "pierogi ruskie", note: "(wjeżdżają na produkcję)" },
                    { dish: "pierożki z jagodami", note: "" },
                    { dish: "pierogi z mięsem", note: "" },
                    { dish: "pierogi ze szpinakiem", note: "" }
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group flex flex-col"
                    >
                      <div className="flex items-center justify-between">
                         <span className="group-hover:text-brand-terracotta transition-colors">{item.dish}</span>
                         <div className="h-px grow mx-4 border-t border-dashed border-white/20 group-hover:border-brand-terracotta/30" />
                         <UtensilsCrossed size={16} className="text-brand-terracotta/40" />
                      </div>
                      {item.note && <span className="text-sm font-hand italic text-brand-terracotta/70 mt-1">{item.note}</span>}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-white/10">
                   <p className="font-hand text-2xl text-[#f39c12] flex items-center gap-3">
                     <Sparkles size={20} />
                     Jeśli tylko starczy czasu – będą też pierożki z buraczkami!
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery: Scrapbook Style */}
      <section id="galeria" className="py-32 bg-brand-paper relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="font-hand text-4xl text-brand-terracotta">Z bliska</span>
            <h2 className="font-serif text-5xl md:text-7xl text-brand-ink">Moja Galeria</h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {IMAGES.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative group bg-white p-3 paper-shadow rounded-sm overflow-hidden ${
                  idx % 2 === 0 ? 'rotate-2' : '-rotate-2'
                } hover:rotate-0 transition-transform duration-500`}
              >
                <img 
                  src={src} 
                  alt={`Pieróg ${idx}`} 
                  className="w-full h-auto transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-brand-warm/30 mt-2 border-t border-brand-warm">
                  <span className="font-hand text-2xl text-brand-terracotta">Lepione dzisiaj</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Proof Videos */}
          <div className="mt-40">
             <div className="flex flex-col items-center mb-16 underline decoration-brand-terracotta/20 underline-offset-8">
                <span className="font-hand text-3xl text-brand-sage mb-4">Zobacz jak powstają</span>
                <h3 className="font-serif text-4xl uppercase tracking-widest text-brand-ink">Nasze Rolki</h3>
             </div>
             
             <div className="grid md:grid-cols-3 gap-10">
               {REELS.map((reel, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="group relative flex flex-col bg-white p-4 paper-shadow rounded-[2rem] border border-brand-warm"
                 >
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-brand-ink mb-4 shadow-inner">
                      <iframe 
                        src={`https://www.facebook.com/plugins/video.php?height=476&width=267&href=${encodeURIComponent(reel.url)}&show_text=false&t=0`} 
                        className="absolute inset-0 w-full h-full border-0"
                        scrolling="no" 
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                    <div className="flex items-center justify-between px-2">
                      <span className="font-hand text-2xl text-brand-terracotta">{reel.title}</span>
                      <a 
                        href={reel.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-brand-sage hover:text-brand-terracotta transition-colors"
                        title="Otwórz na Facebooku"
                      >
                        <Facebook size={20} />
                      </a>
                    </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Reviews: Heart-warming words */}
      <section className="py-32 bg-brand-warm relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 rotate-12 opacity-10">
               <Heart size={200} fill="currentColor" className="text-brand-terracotta" />
             </div>
             <span className="font-hand text-4xl text-brand-terracotta block mb-4">Słowa od Was</span>
             <h2 className="font-serif text-5xl md:text-7xl text-brand-ink z-10 relative">Dobre Opinie</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
               { name: "Magdalena", text: "Najlepsze pierogi jakie jadłam! Czuć domowe ciepło i świeże składniki. Ruskie to majstersztyk.", tag: "Uwielbiam!" },
               { name: "Piotr", text: "Rewelacja. Widać, że robione z pasją. Ośno Lubuskie ma prawdziwy skarb kulinarny.", tag: "Polecam!" }
            ].map((rev, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-12 paper-shadow rounded-tl-[4rem] rounded-br-[4rem] border border-brand-warm relative"
              >
                <div className="absolute -top-4 -right-4 bg-brand-terracotta text-white px-4 py-1 rounded-lg font-hand text-xl rotate-6">
                  {rev.tag}
                </div>
                <Quote className="text-brand-terracotta mb-8 opacity-20" size={56} />
                <p className="font-serif text-2xl italic leading-relaxed text-brand-ink/90 mb-10">"{rev.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-sage text-white flex items-center justify-center font-bold text-lg">
                    {rev.name[0]}
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-lg">{rev.name}</h5>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#f1c40f] text-[#f1c40f]" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a 
              href="https://www.facebook.com/profile.php?id=100063547870204&sk=reviews" 
              target="_blank"
              rel="noreferrer"
              className="font-serif text-lg italic border-b-2 border-brand-terracotta/30 hover:border-brand-terracotta text-brand-ink transition-all inline-block"
            >
              Zobacz więcej recenzji na naszym profilu
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Contact: The Warm Goodbye */}
      <footer id="kontakt" className="bg-brand-ink text-brand-paper py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block mb-12">
                 <span className="font-serif text-6xl font-bold tracking-tighter text-brand-terracotta leading-none">Pierogarnia</span>
                 <div className="flex items-center gap-4 mt-2">
                    <div className="h-px w-12 bg-white/20" />
                    <span className="font-hand text-3xl text-brand-warm">By Staroń</span>
                 </div>
              </div>
              
              <div className="space-y-12">
                <div className="group flex items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-terracotta group-hover:bg-brand-terracotta/10 transition-all duration-300">
                    <MapPin size={28} className="text-brand-terracotta" />
                  </div>
                  <div>
                    <p className="font-serif text-sm uppercase tracking-[0.3em] text-white/40 mb-2">Gdzie nas znajdziesz</p>
                    <p className="font-serif text-3xl">Ośno Lubuskie 69-220</p>
                    <p className="font-hand text-xl text-brand-sage mt-1">Przyjedź na cieplutkie!</p>
                  </div>
                </div>

                <div className="group flex items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-terracotta group-hover:bg-brand-terracotta/10 transition-all duration-300">
                    <Phone size={28} className="text-brand-terracotta" />
                  </div>
                  <div>
                    <p className="font-serif text-sm uppercase tracking-[0.3em] text-white/40 mb-2">Zadzwoń po zamówienie</p>
                    <a href="tel:661801523" className="font-serif text-4xl hover:text-brand-terracotta transition-colors">661 801 523</a>
                    <p className="font-hand text-xl text-brand-sage mt-1">Głos pełen serca!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-paper rounded-[3rem] p-12 text-brand-ink shadow-2xl relative z-10">
                <h4 className="font-serif text-3xl mb-8 border-b border-brand-warm pb-6">Zapraszam Cię <span className="italic">do mojego świata.</span></h4>
                <p className="font-serif text-xl leading-relaxed opacity-80 mb-10 italic">
                  "Moja pierogarnia to nie biznes, to mój drugi dom. Chcę, żeby każdy czuł się tutaj jak u mamy. Każde zagniatanie ciasta, każdy kilogram świeżych jagód – to wszystko dla Was."
                </p>
                <div className="flex items-center gap-6">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100063547870204" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 bg-brand-terracotta text-white py-4 rounded-xl flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-transform shadow-lg"
                  >
                    <Facebook size={24} /> Obserwuj mnie
                  </a>
                </div>
              </div>
              {/* Decorative paper bits */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-terracotta/20 rounded-full blur-2xl -z-0" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-sage/20 rounded-full blur-3xl -z-0" />
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-serif text-sm text-white/30 tracking-widest uppercase">
            <span>© {new Date().getFullYear()} Pierogarnia By Staroń</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-terracotta transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-brand-terracotta transition-colors">Design z pasją</a>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-brand-terracotta/60 hover:text-brand-terracotta transition-colors"
            >
              Góra strony
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
