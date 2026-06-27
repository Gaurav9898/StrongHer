/* All editable content for StrongHer (Seema) website */
import heroImage from './IMG_7629.JPG';

export const defaultContent = {
  brand: {
    name: 'StrongHer',
    tagline: 'by Seema · Fitness Coach for Women',
    logoLetters: 'SH'
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#pricing' },
    { label: 'Results', href: '#transformations' }
  ],
  hero: {
    badge: "CERTIFIED FITNESS COACH FOR WOMEN",
    titleLine1: 'Lose Fat. Build',
    titleHighlight: 'Strength.',
    titleLine2: 'Stay Fit.',
    description: "Personalized 1-on-1 coaching for women of all levels. Sustainable training that fits your lifestyle — helping you train smart, build strength and feel confident.",
    primaryCta: 'Book Free Consultation',
    secondaryCta: 'View Packages',
    image: heroImage,
    floatBadge1Title: '1-on-1 Coaching',
    floatBadge1Sub: 'PERSONALIZED',
    floatBadge2Title: '30+',
    floatBadge2Sub: 'CLIENTS COACHED',
    stats: [
      { value: '30+', label: 'Clients Coached' },
      { value: '3+', label: 'International Clients Coached' },
      { value: '5+', label: 'Years Experience' },
      { value: '100%', label: 'Personalized' },
      { value: '24/7', label: 'Support' }
    ]
  },
  pricing: {
    title: 'Choose Your Coaching Package',
    subtitle: 'Sustainable training plans designed exclusively for women',
    tabs: [
      { id: 'online', label: 'Online Coaching' },
      { id: 'live', label: 'Live Training' },
      { id: 'inperson', label: 'In-Person' }
    ],
    plans: [
      { tag: 'Starter', name: 'Workout Plan', features: ['Customized workout plan', 'Form videos & guidance', 'WhatsApp check-ins', 'Beginner friendly'], dark: true },
      { tag: '', name: 'Online Coaching', features: ['Workout + Nutrition Guidance', 'Weekly progress check-ins', 'Habit & lifestyle support', 'Direct chat with coach'], dark: false },
      { tag: 'Most Popular', name: '1-on-1 Live Training', features: ['Live online sessions', 'Real-time form correction', 'Personalized programming', 'Priority support'], dark: true, featured: true },
      { tag: '', name: 'In-Person Training', features: ['In-person sessions (Jaipur)', 'Hands-on coaching', 'Strength & mobility focus', 'Flexible scheduling'], dark: false }
    ]
  },
  services: {
    eyebrow: 'Services',
    title: 'What I Offer',
    subtitle: 'Coaching solutions tailored for women — train smart, build strength, stay consistent',
    list: [
      { id: 'live', icon: 'Dumbbell', title: 'Online 1-on-1 Live Training', short: 'Live virtual sessions with real-time guidance and form correction', features: ['Live video coaching sessions', 'Real-time form correction & cues', 'Personalized programming each session', 'Flexible scheduling around your routine', 'Direct accountability and support'], duration: '1-6 months', suitable: 'All experience levels', results: 'Strength, technique, confidence' },
      { id: 'online', icon: 'Apple', title: 'Online Coaching', short: 'Custom workout plans with nutrition guidance and weekly check-ins', features: ['Personalized workout programming', 'Nutrition and habit guidance', 'Weekly check-ins & adjustments', 'Form-check video reviews', 'Direct WhatsApp support'], duration: '2-12 months', suitable: 'Self-motivated trainees', results: 'Fat loss, strength, sustainable habits' },
      { id: 'inperson', icon: 'Stethoscope', title: 'In-Person Training', short: 'Hands-on coaching at the gym (subject to availability)', features: ['One-on-one in-person sessions', 'Hands-on technique coaching', 'Strength & conditioning focus', 'Mobility and movement quality', 'Goal-specific programming'], duration: '1-6 months', suitable: 'Local clients (Jaipur)', results: 'Strength, posture, performance' },
      { id: 'medical', icon: 'Dna', title: 'Special Conditions Training', short: 'Safe, effective training for clients with medical concerns', features: ['Pre/post-natal training', 'PCOS-friendly programming', 'Joint & back pain considerations', 'Doctor-coordinated approach when needed', 'Gradual, safe progression'], duration: '3-12 months', suitable: 'Clients with medical concerns', results: 'Pain reduction, strength, well-being' },
      { id: 'habit', icon: 'Zap', title: 'Habit & Lifestyle Coaching', short: 'Build consistency with sustainable healthy habits', features: ['Habit-stacking framework', 'Sleep, stress and recovery focus', 'Realistic nutrition strategies', 'Mindset and consistency tools', 'Long-term sustainability'], duration: '1-3 months', suitable: 'Anyone seeking consistency', results: 'Lasting habits, better energy, focus' }
    ]
  },
  about: {
    eyebrow: 'About Me',
    title: "Hi, I'm Seema — Your Fitness Coach",
    p1: "I'm a certified fitness coach with experience helping individuals lose fat, build strength, improve fitness and create healthy habits that actually last.",
    p2: "I focus on sustainable training methods that fit your lifestyle — whether you're a complete beginner or getting back on track. I also work with clients who have specific concerns or medical conditions, ensuring training is always safe and effective.",
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85',
    badge: 'StrongHer Coach'
  },
  team: {
    eyebrow: 'Why Women Choose Me',
    title: 'A Coaching Approach That Works',
    subtitle: "Built specifically around women's goals, bodies and lifestyles",
    members: [
      { num: '01', tag: 'Personalized', title: 'Custom Programs', desc: 'Every plan is built around your goals, schedule and experience level' },
      { num: '02', tag: 'Sustainable', title: 'Real-Life Friendly', desc: 'Training methods that fit your lifestyle and stick long-term' },
      { num: '03', tag: 'Supportive', title: 'Always Reachable', desc: 'Direct WhatsApp support and weekly check-ins keep you accountable' }
    ]
  },
  transformations: {
    eyebrow: 'Success Stories',
    title: 'Client Transformations',
    subtitle: 'Real women. Real strength. Sustainable results from consistent training.',
    items: [
      { name: 'Priya Sharma', location: 'Jaipur, Age 32', program: 'Fat Loss & Strength', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '6 months', year: '2024', stats: [{ value: '12kg', label: 'Weight Lost' }, { value: '15%', label: 'Body Fat Reduced' }, { value: '3x', label: 'Strength Gained' }] },
      { name: 'Anjali Verma', location: 'Online, Age 28', program: 'PCOS-Friendly Training', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '5 months', year: '2024', stats: [{ value: '8kg', label: 'Weight Lost' }, { value: 'Better', label: 'Cycle Health' }, { value: '40%', label: 'Energy Boost' }] },
      { name: 'Riya Kapoor', location: 'Online, Age 35', program: 'Post-Natal Recovery', image: 'https://images.unsplash.com/photo-1595571024048-45a59177f538?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '4 months', year: '2024', stats: [{ value: '10kg', label: 'Weight Lost' }, { value: 'Strong', label: 'Core Restored' }, { value: 'No', label: 'Back Pain' }] },
      { name: 'Meera Joshi', location: 'Jaipur, Age 26', program: 'Strength & Muscle', image: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '8 months', year: '2024', stats: [{ value: '5kg', label: 'Muscle Gained' }, { value: '2x', label: 'Pull-up Reps' }, { value: '60%', label: 'Strength Gained' }] },
      { name: 'Sneha Agarwal', location: 'Online, Age 41', program: 'Beginner Fitness', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '3 months', year: '2024', stats: [{ value: '6kg', label: 'Weight Lost' }, { value: 'Daily', label: 'Workout Habit' }, { value: 'Better', label: 'Sleep & Mood' }] }
    ],
    ctaTitle: 'Ready to Become StrongHer?',
    ctaText: 'Join 30+ women who have built strength, lost fat and created healthy habits that last. Your transformation starts with one conversation.',
    avgResults: ['Average: 8kg fat loss', 'Strength up 50%+', '95% stay consistent']
  },
  footer: {
    description: "StrongHer — fitness coaching designed for women. Train smart, build strength, stay consistent.",
    quickLinks: ['Home', 'About', 'Services', 'Results', 'Contact'],
    programs: ['1-on-1 Live Training', 'Online Coaching', 'In-Person Training', 'Special Conditions', 'Habit Coaching'],
    phone: '+91 98296 39773',
    location: 'Jodhpur, Rajasthan',
    designedBy: 'StrongHer · by Seema'
  }
};
