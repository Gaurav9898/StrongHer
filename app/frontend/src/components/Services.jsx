import React, { useState } from 'react';
import { EditableText } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Dumbbell, Apple, Stethoscope, Dna, Zap, ArrowRight, Check } from 'lucide-react';

const iconMap = { Dumbbell, Apple, Stethoscope, Dna, Zap };

const Services = () => {
  const { content } = useEdit();
  const s = content.services;
  const [active, setActive] = useState(0);
  const cur = s.list[active];
  const ActiveIcon = iconMap[cur?.icon] || Dumbbell;
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs tracking-[0.3em] font-semibold text-stone-500 border-b-2 border-rose-400 pb-1 mb-4"><EditableText path="services.eyebrow" /></div>
          <EditableText path="services.title" as="h2" className="font-display font-bold text-4xl lg:text-5xl text-stone-900" />
          <EditableText path="services.subtitle" as="p" className="mt-4 text-stone-500 text-base lg:text-lg" />
        </div>
        <div className="grid lg:grid-cols-2 gap-6 bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="p-7 lg:p-9 border-r border-stone-100">
            <h3 className="font-display font-bold text-2xl text-stone-900">Select a Service</h3>
            <p className="text-stone-500 text-sm mt-1 mb-6">Choose the program that fits your goals</p>
            <div className="space-y-3">
              {s.list.map((item, i) => {
                const Icon = iconMap[item.icon] || Dumbbell;
                const isActive = i === active;
                return (
                  <button key={item.id} onClick={() => setActive(i)} className={`w-full text-left rounded-2xl p-4 flex items-center gap-4 transition-all border ${isActive ? 'bg-stone-900 text-white border-stone-900 shadow-md' : 'bg-white border-stone-200 hover:border-stone-300 text-stone-900'}`}>
                    <span className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isActive ? 'bg-white/10' : 'bg-rose-50'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-rose-400' : 'text-rose-500'}`} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <EditableText path={`services.list.${i}.title`} as="div" className="font-bold text-sm" />
                      <EditableText path={`services.list.${i}.short`} as="div" className={`text-xs mt-0.5 ${isActive ? 'text-stone-300' : 'text-stone-500'} line-clamp-1`} />
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="p-7 lg:p-10">
            <div className="h-1 w-24 bg-rose-400 rounded-full mb-6" />
            <div className="flex items-start gap-4 mb-6">
              <span className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center"><ActiveIcon className="w-6 h-6 text-stone-700" /></span>
              <div>
                <EditableText path={`services.list.${active}.title`} as="h3" className="font-display font-bold text-2xl text-stone-900" />
                <EditableText path={`services.list.${active}.short`} as="p" className="text-stone-500 text-sm mt-1" />
              </div>
            </div>
            <div className="border-t border-stone-100 pt-5">
              <h4 className="font-bold text-sm text-stone-900 border-b-2 border-rose-400 inline-block pb-1 mb-4">Program Includes:</h4>
              <ul className="space-y-2.5">
                {cur.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <EditableText path={`services.list.${active}.features.${fi}`} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              {[{l:'Duration', k:'duration'}, {l:'Suitable For', k:'suitable'}, {l:'Expected Results', k:'results'}].map((m) => (
                <div key={m.k} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                  <div className="text-[10px] tracking-widest text-stone-500 font-bold uppercase">{m.l}</div>
                  <EditableText path={`services.list.${active}.${m.k}`} as="div" className="text-sm text-stone-900 font-semibold mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
