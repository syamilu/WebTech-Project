const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('is-active');
  });
});

document.addEventListener('click', e => {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('is-active');
    }
  });
})