const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('open');
	nav.classList.toggle('open');
});
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');
const galleryImages = document.querySelectorAll('.gallery img');

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  galleryImages.forEach(image => {
    const caption = image.getAttribute('alt').toLowerCase();
    if (caption.includes(searchTerm)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
});
