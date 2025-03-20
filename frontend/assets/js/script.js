// const grid = new muuri(".grid", {
//   layout: {
//     rouding: false,
//   },
// });
window.addEventListener("load", () => {
  //   grid.refreshItems().layout();
  document
    .getElementById("contenedor-actividades")
    .classList.add("imagenes-cargadas");

  const enlaces = document.querySelectorAll("#categorias a");
  enlaces.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove("activo"));
      evento.target.classList.add("activo");

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === "todos"
        ? contenedor - actividades.filter("[data-categoria]")
        : contenedor - actividades.filter(`[data-categoria="${categoria}"`);
    });
  });
});
const stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-value");
    stars.forEach((s) => s.classList.remove("selected"));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("selected");
    }
  });
});
