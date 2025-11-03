function validate(form){
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email?.value || '');
  const phoneOk = form.phone ? /^[+]?[0-9\s()-]{7,}$/.test(form.phone.value) : true;
  let ok = true, errs=[];
  [...form.elements].forEach(el=>{
    if (el.required && !el.value.trim()){ ok=false; errs.push(`${el.name} is required`); }
  });
  if (!emailOk){ ok=false; errs.push('Valid email is required'); }
  if (!phoneOk){ ok=false; errs.push('Valid phone number is required'); }
  return { ok, message: ok ? 'Looks good!' : errs.join(' • ') };
}

function handleAjax(form, toEmail){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const box = form.querySelector('.form-msg');
    const { ok, message } = validate(form);
    if (!ok){ box.textContent = message; box.style.color='crimson'; return; }
    const data = Object.fromEntries(new FormData(form).entries());
    const emailPreview = `To: ${toEmail}\nSubject: ${document.title} submission\nBody:\n${JSON.stringify(data, null, 2)}`;
    box.textContent = 'Submitting…'; box.style.color='#333';
    setTimeout(()=>{
      box.innerHTML = 'Submitted! A preview of the email has been created below:';
      const pre = document.createElement('pre');
      pre.textContent = emailPreview; pre.style.whiteSpace='pre-wrap';
      pre.style.background='#f6f8fb'; pre.style.padding='12px'; pre.style.borderRadius='12px';
      form.appendChild(pre);
      form.reset();
    },700);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  if (document.getElementById('enquiryForm')) handleAjax(document.getElementById('enquiryForm'), 'enquiries@greenroots.org');
  if (document.getElementById('contactForm')) handleAjax(document.getElementById('contactForm'), 'info@greenroots.org');
});
