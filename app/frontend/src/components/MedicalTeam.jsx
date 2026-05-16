import React from 'react';
import { EditableText } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Stethoscope, Activity, HeartPulse } from 'lucide-react';

const icons = [Stethoscope, Activity, HeartPulse];

const MedicalTeam = () => {
  const { content } = useEdit();
  const t = content.team;
  return (
    <section className="py-20 lg:py-24 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-stone-900 text-white text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-md uppercase"><EditableText path="team.eyebrow" /></span>
          <EditableText path="team.title" as="h2" className="mt-5 font-display font-bold text-3xl lg:text-4xl text-stone-900" />
          <EditableText path="team.subtitle" as="p" className="mt-3 text-stone-500" />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.members.map((m, i) => {
            const Icon = icons[i] || Stethoscope;
            return (
              <div key={i} className="group bg-white rounded-3xl border border-stone-200 p-7 hover:border-rose-300 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                    <Icon className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors" />
                  </span>
                  <div className="text-right">
                    <EditableText path={`team.members.${i}.num`} as="div" className="text-[11px] tracking-widest text-stone-400 font-bold" />
                    <EditableText path={`team.members.${i}.tag`} as="div" className="text-[11px] font-semibold text-rose-500" />
                  </div>
                </div>
                <EditableText path={`team.members.${i}.title`} as="h3" className="font-display font-bold text-xl text-stone-900" />
                <EditableText path={`team.members.${i}.desc`} as="p" className="text-sm text-stone-500 mt-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
