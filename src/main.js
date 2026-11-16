// EDIT THIS BEFORE LAUNCHING: enquiries use the visitor's email application.
// Without an address, the enquiry button displays an honest setup message.
export const CONTACT_EMAIL = 'divinaracle@gmail.com';
const menu = document.getElementById('mobileNav');
const menuButton = document.getElementById('menuToggle');
menuButton.addEventListener('click', () => { const opening = menu.hidden; menu.hidden = !opening; menuButton.setAttribute('aria-expanded', String(opening)); menuButton.textContent = opening ? '×' : '☰'; });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.hidden = true; menuButton.setAttribute('aria-expanded','false'); menuButton.textContent='☰'; }));
document.querySelectorAll('.inquire').forEach(button => button.addEventListener('click', () => {
  document.getElementById('experience').value = button.dataset.service;
  document.getElementById('appointments').scrollIntoView({behavior:'smooth'});
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const status=document.getElementById('formStatus');
  if(CONTACT_EMAIL.startsWith('REPLACE_WITH_')) { status.textContent='Booking contact is not configured yet. Please edit CONTACT_EMAIL in src/main.js before publishing.'; status.classList.add('warn'); return; }
  const values=Object.fromEntries(new FormData(e.currentTarget).entries());
  const subject=`Divinaracle enquiry — ${values.experience}`;
  const body=`Hello Vi,\n\nI would like to enquire about a private appointment.\n\nName: ${values.name}\nEmail: ${values.email}\nExperience: ${values.experience}\nPreferred format: ${values.format}\n\nA note from me:\n${values.message||'(none)'}\n\nWith warmth,\n${values.name}`;
  window.location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent='Your email application should open with a prepared enquiry. Please send the email to complete your request.';
});
const observer = new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
