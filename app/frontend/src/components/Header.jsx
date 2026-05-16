import React, { useState } from 'react';
import { EditableText } from './EditableText';
import { useEdit } from '../context/EditContext';
import { Menu, X, Pencil, Save, RotateCcw } from 'lucide-react';

const Header = () => {
  const { editing, setEditing, content, reset } = useEdit();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border-2 border-stone-900 flex items-center justify-center">
            <span className="font-display font-bold text-stone-900 text-lg leading-none">{content.brand.logoLetters}</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <EditableText path="brand.name" as="div" className="font-semibold text-stone-900 text-[15px]" />
            <EditableText path="brand.tagline" as="div" className="text-[11px] text-stone-500" />
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {content.nav.map((item, i) => (
            <a key={i} href={item.href} className="text-[13px] font-semibold tracking-wide text-stone-700 hover:text-rose-500 uppercase transition-colors">
              <EditableText path={`nav.${i}.label`} />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <button onClick={() => setEditing(!editing)} className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${editing ? 'bg-rose-500 text-white border-rose-500' : 'bg-stone-900 text-white border-stone-900 hover:bg-stone-800'}`}>
            {editing ? <><Save className="w-3.5 h-3.5" /> Save</> : <><Pencil className="w-3.5 h-3.5" /> Edit</>}
          </button>
          {editing && (
            <button onClick={() => { if(confirm('Reset all content to defaults?')) reset(); }} className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border border-stone-300 text-stone-700 hover:bg-stone-100" title="Reset content">
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
          <a href="#login" className="hidden sm:inline-flex px-5 py-2 rounded-full border border-stone-900 text-stone-900 text-xs font-bold tracking-wider hover:bg-stone-900 hover:text-white transition-colors">LOGIN</a>
          <a href="https://wa.me/919829639773" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border-2 border-rose-500 text-rose-500 text-xs font-bold tracking-wider hover:bg-rose-500 hover:text-white transition-colors">WHATSAPP</a>
          <button onClick={() => setOpen(!open)} className="lg:hidden ml-1 p-2">{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-stone-200 bg-white">
          <div className="px-5 py-4 flex flex-col gap-3">
            {content.nav.map((item, i) => (
              <a key={i} href={item.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-stone-700">{item.label}</a>
            ))}
            <button onClick={() => setEditing(!editing)} className="text-sm font-semibold text-rose-500 text-left">{editing ? 'Save Changes' : 'Edit Content'}</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
