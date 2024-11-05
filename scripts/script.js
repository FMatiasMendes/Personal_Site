document.addEventListener("DOMContentLoaded", function () {
	const menuIcon = document.querySelector(".menu-icon");
	const navLinks = document.querySelector(".nav-links");
	const dropdowns = document.querySelectorAll(".dropdown");

	menuIcon.addEventListener("click", function () {
		navLinks.classList.toggle("active");
		menuIcon.classList.toggle("active");

		//changing dropdown icon
		if (navLinks.classList.contains("active")) {
			menuIcon.textContent = "✖";
		} else {
			menuIcon.textContent = "☰";
		}
	});

	//show dropdown menu
	dropdowns.forEach(dropdown => {
		const parentLi = dropdown.parentElement;

		parentLi.addEventListener("click", function (event) {
			event.stopPropagation(); // Previne o clique no pai
			dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";           
		});
	});

	//hide dropdown menu when clicking
	document.addEventListener("click", function () {
		dropdowns.forEach(dropdown => {
			dropdown.style.display = "none";
		});
	});
});
