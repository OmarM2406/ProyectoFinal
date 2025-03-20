document.addEventListener("DOMContentLoaded", () => {
  ("DOM completamente cargado");
  const navItems = document.querySelectorAll(".secondary-nav ul li a");
  const currentUrl = window.location.pathname.split("/").pop(); // Obtiene solo el nombre del archivo actual

  navItems.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.parentElement.classList.add("active");
    }
  });
});
