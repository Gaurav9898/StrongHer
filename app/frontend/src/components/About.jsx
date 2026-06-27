import React from 'react';
import { EditableText, EditableImage } from './EditableText';
import { Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block text-xs tracking-[0.3em] font-semibold text-stone-500 border-b-2 border-rose-400 pb-1 mb-4"><EditableText path="about.eyebrow" /></div>
            <EditableText path="about.title" as="h2" className="font-display font-bold text-4xl lg:text-5xl text-stone-900 leading-tight" />
            <EditableText path="about.p1" as="p" multiline className="mt-5 text-stone-600 leading-relaxed" />
            <EditableText path="about.p2" as="p" multiline className="mt-3 text-stone-600 leading-relaxed" />
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-72 md:h-80 lg:h-full lg:min-h-[280px] max-w-md mx-auto shadow-xl">
              <EditableImage path="about.image" alt="About seema" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-5 left-5 lg:-left-2 bg-stone-900 text-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <EditableText path="about.badge" className="font-bold text-sm" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
