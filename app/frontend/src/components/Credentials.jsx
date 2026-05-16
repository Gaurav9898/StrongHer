import React from 'react';
import { EditableText } from './EditableText';
import { useEdit } from '../context/EditContext';
import { BadgeCheck } from 'lucide-react';

const Credentials = () => {
  const { content } = useEdit();
  const c = content.credentials;
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-rose-500 text-white text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-md uppercase"><EditableText path="credentials.eyebrow" /></span>
          <EditableText path="credentials.title" as="h2" className="mt-5 font-display font-bold text-3xl lg:text-4xl text-stone-900" />
          <EditableText path="credentials.subtitle" as="p" className="mt-3 text-stone-500" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.list.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <EditableText path={`credentials.list.${i}.code`} className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-1 rounded" />
                  <EditableText path={`credentials.list.${i}.year`} className="text-xs text-stone-500" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600"><BadgeCheck className="w-4 h-4" /> Verified</span>
              </div>
              <EditableText path={`credentials.list.${i}.title`} as="h3" className="font-display font-bold text-lg text-stone-900" />
              <EditableText path={`credentials.list.${i}.issuer`} as="p" className="text-sm text-stone-500 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
