import React from 'react';
import { EditableText, EditableImage } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Trophy, Plus, Equal } from 'lucide-react';

const About = () => {
  const { content } = useEdit();
  const a = content.about;
  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block text-xs tracking-[0.3em] font-semibold text-stone-500 border-b-2 border-rose-400 pb-1 mb-4"><EditableText path="about.eyebrow" /></div>
            <EditableText path="about.title" as="h2" className="font-display font-bold text-4xl lg:text-5xl text-stone-900 leading-tight" />
            <EditableText path="about.p1" as="p" multiline className="mt-5 text-stone-600 leading-relaxed" />
            <EditableText path="about.p2" as="p" multiline className="mt-3 text-stone-600 leading-relaxed" />
            <div className="mt-7 bg-white rounded-2xl p-5 border border-stone-200">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-sm mb-3">
                <span className="w-1 h-4 bg-rose-500 rounded" />
                <EditableText path="about.formulaTitle" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {a.formula.map((f, i) => (
                  <React.Fragment key={i}>
                    <span className="px-3 py-1.5 rounded-lg bg-rose-50 text-stone-800 text-sm font-semibold">
                      <EditableText path={`about.formula.${i}`} />
                    </span>
                    {i < a.formula.length - 1 ? <Plus className="w-4 h-4 text-stone-400" /> : <Equal className="w-4 h-4 text-stone-400" />}
                  </React.Fragment>
                ))}
                <span className="px-4 py-1.5 rounded-lg bg-rose-500 text-white text-sm font-bold">
                  <EditableText path="about.formulaResult" />
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-xl">
              <EditableImage path="about.image" alt="About Sangram" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-5 left-5 lg:-left-2 bg-stone-900 text-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <EditableText path="about.badge" className="font-bold text-sm" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {a.stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 text-center">
              <EditableText path={`about.stats.${i}.value`} as="div" className="font-display font-bold text-3xl lg:text-4xl text-rose-500" />
              <EditableText path={`about.stats.${i}.label`} as="div" className="mt-1 text-xs lg:text-sm text-stone-500 uppercase tracking-wider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
