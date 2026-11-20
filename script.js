document.querySelectorAll('.favorite').forEach((button) => {
  button.addEventListener('click', () => {
    const saved = button.classList.toggle('is-favorite');
    button.setAttribute('aria-pressed', saved);
  });
});
