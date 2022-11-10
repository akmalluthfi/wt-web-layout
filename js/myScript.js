const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");

navLinks.forEach((l) => {
	l.addEventListener("click", function () {
		if (navbar.classList.contains("show")) {
			navbar.classList.remove("show");
		}
	});
});
