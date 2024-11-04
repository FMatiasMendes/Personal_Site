document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const dropdowns = document.querySelectorAll(".dropdown");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("active");

        // Mudando o texto do menu
        if (navLinks.classList.contains("active")) {
            menuIcon.textContent = "✖"; // Altera para o ícone de fechar (X)
        } else {
            menuIcon.textContent = "☰"; // Volta para o ícone de hambúrguer
        }
    });

    // Para exibir o dropdown ao clicar
    dropdowns.forEach(dropdown => {
        const parentLi = dropdown.parentElement;

        parentLi.addEventListener("click", function (event) {
            event.stopPropagation(); // Previne o clique no pai
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";           
        });
    });

    // Ocultar dropdown se clicar fora
    document.addEventListener("click", function () {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });
    });
});
