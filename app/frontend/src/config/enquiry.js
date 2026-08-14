export const ENQUIRY_FORM_ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT || 'https://script.google.com/macros/s/AKfycbz5P6gEBCkW4NVnHniCos5U9UGx47Rue7lj9fkUlHGuRXcj46i2xFmZn-wsotVS4X40CQ/exec';

export const WHATSAPP_AFTER_ENQUIRY_URL = `https://wa.me/919829639773?text=${encodeURIComponent(
  'Hi, I have filled the form and want to know more about StrongHer coaching'
)}`;
