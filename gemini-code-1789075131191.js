function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-pt]');
  
  elements.forEach(el => {
    if (lang === 'en' && el.getAttribute('data-en')) {
      el.textContent = el.getAttribute('data-en');
    } else if (lang === 'pt' && el.getAttribute('data-pt')) {
      el.textContent = el.getAttribute('data-pt');
    }
  });

  document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}