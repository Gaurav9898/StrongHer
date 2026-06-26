import React from 'react';
import { EditableText } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Check, Star } from 'lucide-react';

const whatsappPlanUrl = (plan) => {
  const message = `Hi, I want ${plan.name} ${plan.price}${plan.cycle}`;
  return `https://wa.me/919829639773?text=${encodeURIComponent(message)}`;
};

const Pricing = () => {
  const { content } = useEdit();
  const p = content.pricing;

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <EditableText path="pricing.title" as="h2" className="font-display font-bold text-4xl lg:text-5xl text-stone-900" />
          <EditableText path="pricing.subtitle" as="p" className="mt-4 text-stone-500 text-base lg:text-lg" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.plans.map((plan, i) => {
            const dark = plan.dark;
            return (
              <div key={i} className={`relative rounded-3xl overflow-hidden border ${dark ? 'bg-stone-900 border-stone-900 text-white' : 'bg-white border-stone-200 text-stone-900'} ${plan.featured ? 'lg:scale-[1.03] shadow-2xl' : 'shadow-sm'} transition-transform hover:-translate-y-1`}>
                {plan.tag && (
                  <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white text-center text-xs font-bold py-2 flex items-center justify-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <EditableText path={`pricing.plans.${i}.tag`} />
                  </div>
                )}
                <div className="p-7">
                  <EditableText path={`pricing.plans.${i}.name`} as="h3" className="font-display font-bold text-2xl text-center" />
                  <div className="mt-4 text-center">
                    <EditableText path={`pricing.plans.${i}.oldPrice`} as="div" className={`text-sm line-through ${dark ? 'text-stone-400' : 'text-stone-400'}`} />
                    <div className="flex items-baseline justify-center gap-0.5 mt-1">
                      <EditableText path={`pricing.plans.${i}.price`} as="span" className="font-display font-bold text-4xl" />
                      <EditableText path={`pricing.plans.${i}.cycle`} as="span" className={`text-sm ${dark ? 'text-stone-400' : 'text-stone-500'}`} />
                    </div>
                    <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-[11px] font-semibold ${dark ? 'bg-white/10 text-rose-300' : 'bg-rose-50 text-rose-500'}`}><EditableText path={`pricing.plans.${i}.save`} /></span>
                  </div>
                  <ul className="mt-6 space-y-3 min-h-[140px]">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${dark ? 'text-rose-400' : 'text-rose-500'}`} />
                        <EditableText path={`pricing.plans.${i}.features.${fi}`} className={dark ? 'text-stone-200' : 'text-stone-700'} />
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappPlanUrl(plan)} target="_blank" rel="noreferrer" className={`mt-6 inline-flex w-full items-center justify-center py-3 rounded-full text-sm font-bold border-2 transition-colors ${dark ? 'border-white/20 text-white hover:bg-white hover:text-stone-900' : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'}`}>
                    Get Started →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
