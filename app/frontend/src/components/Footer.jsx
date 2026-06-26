import React from 'react';
import { EditableText } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Instagram, Youtube, MessageCircle, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { content } = useEdit();
  const f = content.footer;

  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">{content.brand.logoLetters}</span>
              </div>
              <div>
                <EditableText path="brand.name" as="div" className="font-semibold text-white" />
                <EditableText path="brand.tagline" as="div" className="text-[11px] text-stone-400" />
              </div>
            </div>
            <EditableText path="footer.description" as="p" multiline className="mt-5 text-sm text-stone-400 leading-relaxed max-w-xs" />
            <div className="mt-5 flex gap-2">
              {[Instagram, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-stone-900 hover:bg-rose-500 flex items-center justify-center transition-colors"><Icon className="w-4 h-4 text-white" /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {f.quickLinks.map((q, i) => (
                <li key={i}><EditableText path={`footer.quickLinks.${i}`} as="a" className="text-sm text-stone-400 hover:text-rose-400 transition-colors block" /></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm tracking-wider mb-4">PROGRAMS</h4>
            <ul className="space-y-2.5">
              {f.programs.map((p, i) => (
                <li key={i}><EditableText path={`footer.programs.${i}`} as="a" className="text-sm text-stone-400 hover:text-rose-400 transition-colors block" /></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm tracking-wider mb-4">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-stone-400"><Phone className="w-4 h-4 text-rose-400" /> <EditableText path="footer.phone" /></div>
              <div className="flex items-center gap-2.5 text-sm text-stone-400"><MapPin className="w-4 h-4 text-rose-400" /> <EditableText path="footer.location" /></div>
              <a href="https://wa.me/919829639773" target="_blank" rel="noreferrer" className="inline-block mt-2 px-5 py-2.5 rounded-full border-2 border-white text-white text-xs font-bold tracking-wider hover:bg-white hover:text-stone-900 transition-colors">WHATSAPP</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col gap-2 lg:flex-row lg:justify-between items-start lg:items-center">
          <EditableText path="footer.designedBy" className="text-xs text-stone-500" />
          <div className="text-xs text-stone-500 flex flex-col gap-1">
            <span>© {new Date().getFullYear()} StrongHer · Seema</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
