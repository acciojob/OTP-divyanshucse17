const codes = document.querySelectorAll('.code');

codes[0].focus(); // Focus first input on page load

codes.forEach((code, idx) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '' && idx > 0) {
        codes[idx - 1].focus();
        codes[idx - 1].value = '';
      }
    }
  });
});
