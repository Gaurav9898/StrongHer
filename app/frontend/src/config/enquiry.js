export const ENQUIRY_FORM_ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT || 'https://script.google.com/macros/s/AKfycbyicvC0Y0C-MMyHozJv7Phpc7kT2K5JkLZAUVq4AnnNDCuO7kKMt28nyocb8J2Q-_fILA/exec';

export const WHATSAPP_AFTER_ENQUIRY_URL = `https://wa.me/919829639773?text=${encodeURIComponent(
  'Hi, I have filled the form and want to know more about StrongHer coaching'
)}`;
