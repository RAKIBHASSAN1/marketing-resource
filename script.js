const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('open');
	nav.classList.toggle('open');
});
