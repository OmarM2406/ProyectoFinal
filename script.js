var swiper = new Swiper (".mySwiper", {
    effect: "coverflow", 
    grabCursor: true, 
    centeredSlides: true, 
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth:500,
        modifer:1,
        slidesShadows:true,
        rotate: 0,
        stretch:0
    }
})

var swiper = new Swiper('.swiper', {
    loop: true,  // Para que el slider se repita
    autoplay: {
        delay: 3000,  // Tiempo en milisegundos entre cada cambio de slide (3 segundos)
        disableOnInteraction: false,  // Sigue moviéndose aunque el usuario interactúe
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const grid = new muuri('.grid', {
    layout:{
        rouding:false
    }
});
window.addEventListener('load', ()=>{
    grid.refreshItems().layout();
    document.getElementById('contenedor-actividades').classList.add('imagenes-cargadas');

const enlaces = document.querySelectorAll('#categorias a');
enlaces.forEach( (elemento)=>{
elemento.addEventListener('click', (evento)=>{
    evento.preventDefault();
    enlaces.forEach((enlace)=>enlace.classList.remove('activo'));
    evento.target.classList.add('activo');

    const categoria = evento.target.innerHTML.toLowerCase();
    categoria ==='todos' ? contenedor-actividades.filter('[data-categoria]') : contenedor-actividades.filter(`[data-categoria="${categoria}"`);
});
});
});
const stars = document.querySelectorAll('.star');
        let selectedRating = 0;

        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = star.getAttribute('data-value');
                stars.forEach(s => s.classList.remove('selected'));
                for (let i = 0; i < selectedRating; i++) {
                    stars[i].classList.add('selected');
                }
            });
        });