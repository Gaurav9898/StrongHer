import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { ENQUIRY_FORM_ENDPOINT, WHATSAPP_AFTER_ENQUIRY_URL } from '../config/enquiry';
import logoImage from '../assets/brand/strongher-logo.png';

const initialForm = {
  email: '',
  fullName: '',
  age: '',
  city: '',
  whatsappNumber: '',
  heardAbout: [],
  primaryGoals: [],
  trainingExperience: '',
  lookingFor: '',
  healthNotes: '',
  consultationDate: '',
  consultationTime: '',
  termsAccepted: false
};

const heardAboutOptions = ['Instagram', 'Referral', 'Protein Plate', 'Existing Client', 'Event/Workshop', 'Other'];
const goalOptions = ['Fat Loss', 'Muscle Gain', 'Strength', 'General Health', 'Posture/Mobility', 'Other'];
const experienceOptions = ['Absolute Beginner', 'Some Experience', 'Intermediate', 'Advanced'];
const lookingForOptions = ['Online Coaching', '1:1 Online sessions', 'In-person training', 'Not sure yet'];

const TextField = ({ label, name, type = 'text', value, onChange, required = false }) => (
  <label className="block">
    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
      {label} {required && <span className="text-rose-500">*</span>}
    </span>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-2 w-full rounded-xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
      placeholder={type === 'date' || type === 'time' ? '' : 'Your answer'}
    />
  </label>
);

const ChoicePill = ({ option, selected, onClick, type = 'checkbox' }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
      selected ? 'border-rose-500 bg-rose-500 text-white shadow-sm' : 'border-stone-200 bg-white text-stone-700 hover:border-rose-300'
    }`}
    aria-pressed={selected}
  >
    <span>{option}</span>
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center ${type === 'radio' ? 'rounded-full' : 'rounded-md'} border ${selected ? 'border-white bg-white/20' : 'border-stone-300'}`}>
      {selected && <Check className="h-3.5 w-3.5" />}
    </span>
  </button>
);

const EnquiryForm = ({ standalone = false, onClose, resetOnBack = false, dismissible = true }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!resetOnBack) return undefined;

    const resetFormOnBack = () => {
      setForm(initialForm);
      window.location.hash = 'enquriy';
    };

    window.history.pushState({ enquiry: true }, '', '#enquriy');
    window.addEventListener('popstate', resetFormOnBack);

    return () => window.removeEventListener('popstate', resetFormOnBack);
  }, [resetOnBack]);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const updateOption = (name, option, type = 'checkbox') => {
    setForm((current) => {
      if (type === 'radio') {
        return { ...current, [name]: option };
      }

      const selected = current[name];
      return {
        ...current,
        [name]: selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option]
      };
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.fullName || !form.email || !form.age || !form.city || !form.whatsappNumber || form.primaryGoals.length === 0 || !form.healthNotes || !form.termsAccepted) {
      setError('Please complete all required fields before submitting.');
      return;
    }

    setStatus('submitting');
    const whatsappWindow = window.open('about:blank', '_blank');

    try {
      const payload = {
        ...form,
        source: standalone ? 'standalone-page' : 'website-popup',
        submittedAt: new Date().toISOString()
      };

      await fetch(ENQUIRY_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      if (whatsappWindow) {
        whatsappWindow.opener = null;
        whatsappWindow.location.href = WHATSAPP_AFTER_ENQUIRY_URL;
      } else {
        window.open(WHATSAPP_AFTER_ENQUIRY_URL, '_blank', 'noopener,noreferrer');
      }

      setForm(initialForm);
      setStatus('idle');
      if (!standalone && onClose) {
        onClose();
      }
    } catch (err) {
      if (whatsappWindow) {
        whatsappWindow.close();
      }
      setStatus('idle');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={standalone ? 'min-h-screen bg-[#f8f4f6] px-4 py-8 flex justify-center' : 'fixed inset-0 z-[100] overflow-y-auto bg-stone-950/75 px-4 py-6 backdrop-blur-sm'}>
      <div className={standalone ? 'w-full max-w-4xl' : 'mx-auto w-full max-w-4xl'}>
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl">
          <img src={logoImage} alt="" className="pointer-events-none absolute right-[-80px] top-20 w-80 opacity-[0.045]" />
          <div className="relative bg-gradient-to-r from-stone-950 via-stone-900 to-rose-500 px-6 py-6 text-white">
            {!standalone && dismissible && (
              <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/15 p-2 hover:bg-white/25" aria-label="Close enquiry form">
                <X className="h-5 w-5" />
              </button>
            )}
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="StrongHer by Seema" className="h-16 w-16 rounded-2xl bg-white object-cover" />
              <div>
                <h1 className="text-2xl font-bold">Start your StrongHer Journey</h1>
                <p className="mt-1 text-sm text-white/75">StrongHer by Seema</p>
              </div>
            </div>
          </div>

          <div className="relative bg-[#f8f4f6] px-5 py-5">
            <form onSubmit={submitForm} className="grid gap-4 lg:grid-cols-2">
              <section className="rounded-3xl bg-white/85 p-4 shadow-sm ring-1 ring-stone-200/80 sm:p-5">
                <h2 className="mb-4 text-lg font-bold text-stone-950">1. Details</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <TextField label="Email Address" name="email" type="email" value={form.email} onChange={updateField} required />
                  <TextField label="Full Name" name="fullName" value={form.fullName} onChange={updateField} required />
                  <TextField label="Age" name="age" type="number" value={form.age} onChange={updateField} required />
                  <TextField label="City" name="city" value={form.city} onChange={updateField} required />
                  <TextField label="WhatsApp Number" name="whatsappNumber" type="tel" value={form.whatsappNumber} onChange={updateField} required />
                </div>
              </section>

              <section className="rounded-3xl bg-white/85 p-4 shadow-sm ring-1 ring-stone-200/80 sm:p-5">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <h2 className="mb-1 text-lg font-bold text-stone-950">2. Discovery</h2>
                    <h2 className="text-lg font-bold text-stone-900">How did you hear about StrongHer</h2>
                    <div className="mt-3 grid gap-2">
                      {heardAboutOptions.map((option) => (
                        <ChoicePill key={option} option={option} selected={form.heardAbout.includes(option)} onClick={() => updateOption('heardAbout', option)} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900">What are your primary goals? <span className="text-rose-500">*</span></h2>
                    <div className="mt-3 grid gap-2">
                      {goalOptions.map((option) => (
                        <ChoicePill key={option} option={option} selected={form.primaryGoals.includes(option)} onClick={() => updateOption('primaryGoals', option)} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl bg-white/85 p-4 shadow-sm ring-1 ring-stone-200/80 sm:p-5">
                <h2 className="mb-4 text-lg font-bold text-stone-950">3. Training Context</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <h2 className="text-lg font-bold text-stone-900">Have you trained before?</h2>
                    <div className="mt-3 grid gap-2">
                      {experienceOptions.map((option) => (
                        <ChoicePill key={option} type="radio" option={option} selected={form.trainingExperience === option} onClick={() => updateOption('trainingExperience', option, 'radio')} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900">What are you looking for?</h2>
                    <div className="mt-3 grid gap-2">
                      {lookingForOptions.map((option) => (
                        <ChoicePill key={option} type="radio" option={option} selected={form.lookingFor === option} onClick={() => updateOption('lookingFor', option, 'radio')} />
                      ))}
                    </div>
                  </div>
                  <label className="lg:col-span-2">
                    <span className="text-sm font-bold text-stone-900">Any injury, pain, medical condition, dietary restriction or anything else? <span className="text-rose-500">*</span></span>
                    <textarea
                      name="healthNotes"
                      value={form.healthNotes}
                      onChange={updateField}
                      required
                      rows={4}
                      className="mt-2 w-full resize-none rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                      placeholder="Your answer"
                    />
                  </label>
                </div>
              </section>

              <section className="rounded-3xl bg-white/85 p-4 shadow-sm ring-1 ring-stone-200/80 sm:p-5">
                <h2 className="mb-4 text-lg font-bold text-stone-950">4. Schedule & Terms</h2>
                <div className="grid gap-5">
                  <div className="grid gap-4">
                    <TextField label="Preferred consultation date" name="consultationDate" type="date" value={form.consultationDate} onChange={updateField} />
                    <TextField label="Preferred time" name="consultationTime" type="time" value={form.consultationTime} onChange={updateField} />
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-stone-950 to-stone-800 p-5 text-white">
                    <h2 className="text-lg font-bold">* Terms & Conditions</h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/80">If you feel StrongHer coaching could be the right fit for you, you can book a complimentary consultation call to discuss your goals, current routine, challenges and the coaching options available.</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">The consultation is an initial discussion to understand your goals and determine whether StrongHer coaching is the right fit for you. It does not include a personalized workout or diet plan.</p>
                    <label className="mt-5 flex items-start gap-3 text-sm font-semibold">
                      <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={updateField} required className="mt-1 h-4 w-4 accent-rose-500" />
                      <span>I agree to the terms & conditions.</span>
                    </label>
                  </div>
                </div>
              </section>

              <div className="lg:col-span-2 flex flex-wrap items-center justify-between gap-3 rounded-3xl bg-white/85 p-4 shadow-sm ring-1 ring-stone-200/80">
                {error && <p className="text-sm font-semibold text-rose-500">{error}</p>}
                <button type="submit" disabled={status === 'submitting'} className="ml-auto rounded-full bg-rose-500 px-8 py-3 text-sm font-bold text-white hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
