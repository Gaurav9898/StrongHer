import React from 'react';
import { EditableText, EditableImage } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Trophy, Rocket, Stethoscope, Sprout } from 'lucide-react';

const consultationUrl = `https://wa.me/919829639773?text=${encodeURIComponent('Hi, I want to book a free consultation')}`;

const Hero = () => {
  const { content } = useEdit();
  const h = content.hero;

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-rose-50/40 to-white">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-16 pb-20 lg:pb-28 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full pl-2 pr-4 py-2 shadow-sm mb-8">
              <span className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center"><Trophy className="w-3.5 h-3.5 text-amber-600" /></span>
              <EditableText path="hero.badge" className="text-[11px] font-bold tracking-wider text-stone-700" />
            </div>
            <h1 className="font-display font-bold text-stone-900 text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              <EditableText path="hero.titleLine1" as="span" />{' '}<br className="hidden md:block" />
              <EditableText path="hero.titleHighlight" as="span" className="text-rose-500" />{' '}<br className="hidden md:block" />
              <EditableText path="hero.titleLine2" as="span" />
            </h1>
            <EditableText path="hero.description" as="p" multiline className="mt-6 text-stone-600 text-base lg:text-lg leading-relaxed max-w-lg" />

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={consultationUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-stone-800 transition-colors">
                <Rocket className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
                <EditableText path="hero.primaryCta" />
              </a>
              <a href="#pricing" className="inline-flex items-center px-6 py-3.5 rounded-full border-2 border-stone-900 font-semibold text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-colors">
                <EditableText path="hero.secondaryCta" />
              </a>
            </div>

          </div>

          <div className="relative fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto bg-stone-100">
              <EditableImage path="hero.image" alt="Seema" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-5 right-2 lg:-right-4 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 border border-stone-100">
              <span className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center"><Stethoscope className="w-5 h-5 text-rose-500" /></span>
              <div className="leading-tight">
                <EditableText path="hero.floatBadge1Title" as="div" className="font-semibold text-stone-900 text-sm" />
                <EditableText path="hero.floatBadge1Sub" as="div" className="text-[10px] tracking-widest text-stone-500" />
              </div>
            </div>
            <div className="absolute bottom-5 right-2 lg:-right-4 bg-stone-900 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center"><Sprout className="w-5 h-5 text-emerald-400" /></span>
              <div className="leading-tight">
                <EditableText path="hero.floatBadge2Title" as="div" className="font-bold text-lg" />
                <EditableText path="hero.floatBadge2Sub" as="div" className="text-[10px] tracking-widest text-stone-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {h.stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm text-center">
              <EditableText path={`hero.stats.${i}.value`} as="div" className="font-display font-bold text-3xl lg:text-4xl text-stone-900" />
              <EditableText path={`hero.stats.${i}.label`} as="div" className="mt-1 text-xs lg:text-sm text-stone-500 uppercase tracking-wider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
