(function () {
  'use strict';
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 760) setMenu(false); });

  var form = document.getElementById('form');
  var msg = document.getElementById('msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = false;
    form.querySelectorAll('[required]').forEach(function (f) {
      var ok = f.value.trim().length > 1;
      if (f.type === 'tel') ok = f.value.replace(/\D/g, '').length >= 10;
      f.classList.toggle('bad', !ok);
      if (!ok) bad = true;
    });
    msg.textContent = bad
      ? 'Please add your name, a 10-digit mobile number and your vehicle.'
      : 'Concept only: this form is not connected yet. Connect Formspree or Netlify Forms before launch.';
    if (!bad) form.reset();
  });
})();
