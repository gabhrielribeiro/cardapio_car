const form = document.querySelector('#car-search');
const input = document.querySelector('#search-input');
const cards = [...document.querySelectorAll('.car-card')];
const emptyState = document.querySelector('#empty-state');
const filterButtons = document.querySelectorAll('[data-filter]');

function filterCars(term = '') {
  const query = term.trim().toLocaleLowerCase('pt-BR');
  let visible = 0;

  cards.forEach((card) => {
    const matches = card.dataset.search.includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  });

  emptyState.hidden = visible !== 0;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  filterCars(input.value);
  document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

input.addEventListener('input', () => {
  if (!input.value) filterCars();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const { filter } = button.dataset;
    input.value = filter;
    filterCars(filter);
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('.favorite').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const saved = button.classList.toggle('is-favorite');
    button.setAttribute('aria-pressed', saved);
  });
});
