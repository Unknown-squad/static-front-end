const burgerMenu = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar");

// Responsive Navbar Toggle
burgerMenu.addEventListener('click', () => {
	navbarMenu.classList.toggle('show');
});
