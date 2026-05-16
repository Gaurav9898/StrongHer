import React, { useState } from 'react';
import { EditableText, EditableImage } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Calendar, Clock, Trophy } from 'lucide-react';

const Transformations = () => {
  const { content } = useEdit();
  const tr = content.transformations;
  return (
    <section id="transformations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-stone-900 text-white text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-md uppercase"><EditableText path="transformations.eyebrow" /></span>
          <EditableText path="transformations.title" as="h2" className="mt-5 font-display font-bold text-4xl lg:text-5xl text-stone-900" />
          <EditableText path="transformations.subtitle" as="p" className="mt-4 text-stone-500" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.items.map((item, i) => (
            <TransformCard key={i} index={i} item={item} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <EditableText path="transformations.ctaTitle" as="h3" className="font-display font-bold text-3xl lg:text-4xl" />
            <EditableText path="transformations.ctaText" as="p" multiline className="mt-4 text-stone-300 max-w-2xl mx-auto" />
            <div className="mt-6 inline-flex flex-wrap justify-center gap-x-6 gap-y-2 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              {tr.avgResults.map((r, i) => (
                <React.Fragment key={i}>
                  <EditableText path={`transformations.avgResults.${i}`} className="text-rose-400 font-semibold text-sm" />
                  {i < tr.avgResults.length - 1 && <span className="text-stone-500">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TransformCard = ({ item, index }) => {
  const [tab, setTab] = useState('overview');
  return (
    <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="relative aspect-[4/3] bg-stone-100">
        <EditableImage path={`transformations.items.${index}.image`} alt={item.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="bg-stone-900/85 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded">BEFORE</span>
          <span className="bg-rose-500 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded">AFTER</span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded inline-flex items-center gap-1">
          <Clock className="w-3 h-3" /> <EditableText path={`transformations.items.${index}.duration`} />
        </div>
      </div>
      <div className="p-5">
        <EditableText path={`transformations.items.${index}.name`} as="h3" className="font-display font-bold text-lg text-stone-900" />
        <EditableText path={`transformations.items.${index}.location`} as="p" className="text-xs text-stone-500" />
        <span className="inline-block mt-2 text-[11px] font-bold bg-rose-50 text-rose-500 px-2.5 py-1 rounded"><EditableText path={`transformations.items.${index}.program`} /></span>
        <div className="mt-4 flex gap-1 bg-stone-100 p-1 rounded-lg">
          {['overview','results'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`flex-1 py-1.5 text-xs font-bold rounded-md capitalize transition-all ${tab===t?'bg-white text-stone-900 shadow-sm':'text-stone-500'}`}>{t}</button>
          ))}
        </div>
        {tab === 'overview' ? (
          <div className="mt-4 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-stone-600"><Calendar className="w-3.5 h-3.5" /> <EditableText path={`transformations.items.${index}.year`} /></div>
            <div className="flex items-center gap-1.5 text-rose-500 font-semibold"><Trophy className="w-3.5 h-3.5" /> Verified</div>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {item.stats.map((s, si) => (
              <div key={si} className="bg-stone-50 rounded-lg p-2 text-center">
                <EditableText path={`transformations.items.${index}.stats.${si}.value`} as="div" className="text-sm font-bold text-rose-500" />
                <EditableText path={`transformations.items.${index}.stats.${si}.label`} as="div" className="text-[9px] text-stone-500 uppercase tracking-wider mt-0.5" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Transformations;
