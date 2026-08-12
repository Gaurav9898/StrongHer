/* All editable content for StrongHer (Seema) website */
import heroImage from './IMG_7629.JPG';
import aboutImage from './assets/about/seema-group-anniversary.jpg';
import jigeeshaBeforeImage from './assets/transformations/jigeesha-before.jpg';
import jigeeshaAfterImage from './assets/transformations/jigeesha-after.jpg';
import vandanaBeforeImage from './assets/transformations/vandana-before.jpg';
import vandanaAfterImage from './assets/transformations/vandana-after.jpg';
import tarnijaBeforeImage from './assets/transformations/tarnija-before.jpg';
import tarnijaAfterImage from './assets/transformations/tarnija-after.jpg';
import parthviBeforeImage from './assets/transformations/parthvi-before.jpg';
import parthviAfterImage from './assets/transformations/parthvi-after.jpg';

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
    floatBadge2Title: '50+',
    floatBadge2Sub: 'CLIENTS COACHED',
    stats: [
      { value: '50+', label: 'Clients Coached' },
      { value: '15+', label: 'International Clients Coached' },
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
      { tag: '', name: 'In-Person Training', features: ['In-person sessions (Jodhpur)', 'Hands-on coaching', 'Strength & mobility focus', 'Flexible scheduling'], dark: false }
    ]
  },
  services: {
    eyebrow: 'Services',
    title: 'What I Offer',
    subtitle: 'Coaching solutions tailored for women — train smart, build strength, stay consistent',
    list: [
      { id: 'live', icon: 'Dumbbell', title: 'Online 1-on-1 Live Training', short: 'Live virtual sessions with real-time guidance and form correction', features: ['Live video coaching sessions', 'Real-time form correction & cues', 'Personalized programming each session', 'Flexible scheduling around your routine', 'Direct accountability and support'], duration: '1-6 months', suitable: 'All experience levels', results: 'Strength, technique, confidence' },
      { id: 'online', icon: 'Apple', title: 'Online Coaching', short: 'Custom workout plans with nutrition guidance and weekly check-ins', features: ['Personalized workout programming', 'Nutrition and habit guidance', 'Weekly check-ins & adjustments', 'Form-check video reviews', 'Direct WhatsApp support'], duration: '2-12 months', suitable: 'Self-motivated trainees', results: 'Fat loss, strength, sustainable habits' },
      { id: 'inperson', icon: 'Stethoscope', title: 'In-Person Training', short: 'Hands-on coaching at the gym (subject to availability)', features: ['One-on-one in-person sessions', 'Hands-on technique coaching', 'Strength & conditioning focus', 'Mobility and movement quality', 'Goal-specific programming'], duration: '1-6 months', suitable: 'Local clients (Jodhpur)', results: 'Strength, posture, performance' },
      { id: 'medical', icon: 'Dna', title: 'Special Conditions Training', short: 'Safe, effective training for clients with medical concerns', features: ['Pre/post-natal training', 'PCOS-friendly programming', 'Joint & back pain considerations', 'Doctor-coordinated approach when needed', 'Gradual, safe progression'], duration: '3-12 months', suitable: 'Clients with medical concerns', results: 'Pain reduction, strength, well-being' },
      { id: 'habit', icon: 'Zap', title: 'Habit & Lifestyle Coaching', short: 'Build consistency with sustainable healthy habits', features: ['Habit-stacking framework', 'Sleep, stress and recovery focus', 'Realistic nutrition strategies', 'Mindset and consistency tools', 'Long-term sustainability'], duration: '1-3 months', suitable: 'Anyone seeking consistency', results: 'Lasting habits, better energy, focus' }
    ]
  },
  about: {
    eyebrow: 'About Me',
    title: "Hi, I'm Seema — Your Fitness Coach",
    p1: "I'm a certified fitness coach with experience helping individuals lose fat, build strength, improve fitness and create healthy habits that actually last.",
    p2: "I focus on sustainable training methods that fit your lifestyle — whether you're a complete beginner or getting back on track. I also work with clients who have specific concerns or medical conditions, ensuring training is always safe and effective.",
    image: aboutImage,
    badge: 'StrongHer Coach'
  },
  team: {
    eyebrow: 'Why Women Choose Me',
    title: 'A Coaching Approach That Works',
    subtitle: "Built specifically around women's goals, bodies and lifestyles",
    members: [
      { tag: 'Personalized', title: 'Custom Programs', desc: 'Every plan is built around your goals, schedule and experience level' },
      { tag: 'Sustainable', title: 'Real-Life Friendly', desc: 'Training methods that fit your lifestyle and stick long-term' },
      { tag: 'Supportive', title: 'Always Reachable', desc: 'Direct WhatsApp support and weekly check-ins keep you accountable' }
    ]
  },
  transformations: {
    eyebrow: 'Success Stories',
    title: 'Client Transformations',
    subtitle: 'Real women. Real strength. Sustainable results from consistent training.',
    items: [
      { name: 'Jigeesha', location: 'Jodhpur, Age 24', program: 'Weight Loss & Toning', image: jigeeshaAfterImage, beforeImage: jigeeshaBeforeImage, afterImage: jigeeshaAfterImage, beforePosition: 'center 25%', afterPosition: 'center 28%', duration: '3 months', year: '2026', testimonial: "Ma'am, these 3 months with you have been such an amazing journey! You didn't just train my body, you taught me to understand it, trust it and take care of it. From workouts to nutrition, I've learnt so much and gained confidence I never thought I would. Thank you for your patience, constant motivation and for making fitness feel so much more comfortable and fun. Aapke saath training karna was truly a learning experience I'll always cherish!", stats: [{ value: '3', label: 'Months' }, { value: 'Fat Loss', label: 'Goal' }, { value: 'Toning', label: 'Focus' }] },
      { name: 'Akshita', location: 'Singapore, Age 26', program: 'Back-Friendly Strength Workouts', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', beforeImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '1-on-1', year: '2026', testimonial: 'Training with Seema really helped improve my lower back pain - the workout plan was tailored perfectly to my body and needs, and I could genuinely feel the difference. She also made the sessions enjoyable with well-balanced gym exercises that kept me motivated.', stats: [{ value: 'Better', label: 'Lower Back' }, { value: 'Tailored', label: 'Plan' }, { value: 'Strength', label: 'Focus' }] },
      { name: 'Tarnija', location: 'Jodhpur, Age 36', program: 'Weight Loss', image: tarnijaAfterImage, beforeImage: tarnijaBeforeImage, afterImage: tarnijaAfterImage, beforePosition: 'center 24%', afterPosition: 'center 25%', duration: '3 months', year: '2026', testimonial: "Thank you Seema Suthar for training. It's been only 3 weeks and changes can be seen in my body. I wore saare after 3 weeks of training and it felt so amazing.", stats: [{ value: '5.4kg', label: 'Weight Drop' }, { value: '3.2%', label: 'Fat Drop' }, { value: '3', label: 'Months' }] },
      { name: 'Vandana', location: 'Jodhpur, Age 28', program: 'Posture Improvement & Toning', image: vandanaAfterImage, beforeImage: vandanaBeforeImage, afterImage: vandanaAfterImage, beforePosition: 'center 24%', afterPosition: 'center 25%', duration: 'Over 1 year', year: '2026', testimonial: "I've been training with her for over a year, and she's helped me improve my posture and build my confidence. She is attentive to every exercise, set, and rep, which has really improved my technique and consistency. Her guidance, encouragement, and attention to detail have made a big difference in my fitness journey.", stats: [{ value: 'Better', label: 'Posture' }, { value: 'Toned', label: 'Body' }, { value: 'Built', label: 'Confidence' }] },
      { name: 'Parthvi', location: 'Jodhpur, Age 24', program: 'Strength & Toning', image: parthviAfterImage, beforeImage: parthviBeforeImage, afterImage: parthviAfterImage, beforePosition: '38% 44%', afterPosition: 'center 26%', duration: 'Transformation', year: '2026', stats: [{ value: 'Strength', label: 'Built' }, { value: 'Toned', label: 'Body' }, { value: 'Confidence', label: 'Gained' }] },
      { name: 'Savitri', location: 'Jodhpur, Age 57', program: 'Pain-Free Strength & Confidence', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '3 months', year: '2026', testimonial: 'When I started, I lacked confidence and even basic squats were difficult due to knee pain. Seema helped me progress slowly and safely, focusing on mobility, strength, and proper form without ever pressuring or comparing me. Today, I can do weighted goblet squats, hold a 7-minute plank, and comfortably train on the elliptical for 60 minutes. Most importantly, my back and cervical pain have reduced significantly, and I feel stronger, more active, and genuinely enjoy going to the gym.', stats: [{ value: '7 min', label: 'Plank' }, { value: '60 min', label: 'Elliptical' }, { value: 'Pain-Free', label: 'Training' }] },
      { name: 'Kashish', location: 'Jodhpur, Age 24', program: 'Personalized Fitness Training', image: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: 'Ongoing', year: '2026', testimonial: "My trainer Seema ma'am has been a great mentor throughout my journey. She has an incredible deep understanding of fitness and how the body works. From day one, she took the time to personalize my training sessions, tailoring them to my goals and needs. What really stands out is her ability to keep every session fresh and exciting - she constantly introduces variety, so I never feel like I'm stuck in a routine. Whether it's strength training, flexibility, or cardio, she knows exactly what to focus on to help me progress. Her dedication and expertise have made a huge difference in my fitness journey. Highly recommend!", stats: [{ value: 'Custom', label: 'Sessions' }, { value: 'Varied', label: 'Training' }, { value: 'Progress', label: 'Focused' }] },
      { name: 'Ashmita', location: 'Jodhpur, Age 24', program: 'Strength & Muscle', image: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '8 months', year: '2024', stats: [{ value: '5kg', label: 'Muscle Gained' }, { value: '2x', label: 'Pull-up Reps' }, { value: '60%', label: 'Strength Gained' }] },
      { name: 'Himani', location: 'Jodhpur, Age 24', program: 'Beginner Fitness', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', duration: '3 months', year: '2024', stats: [{ value: '6kg', label: 'Weight Lost' }, { value: 'Daily', label: 'Workout Habit' }, { value: 'Better', label: 'Sleep & Mood' }] }
    ],
    avgResults: ['50+ clients coached', '15+ international clients', '100% personalized plans'],
    ctaTitle: 'Ready to Become StrongHer?',
    ctaText: 'Join 50+ women who have built strength, lost fat and created healthy habits that last. Your transformation starts with one conversation.'
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
