// Abre un modal según su ID
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

// Cierra un modal según su ID
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Cambia de un modal a otro
function switchModal(current, target) {
  closeModal(current);
  openModal(target);
}

// Cierra el modal si se hace clic fuera del contenido
window.onclick = function (event) {
  const modals = ['loginModal', 'registerModal'];
  modals.forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Inicializa el carrusel Swiper cuando cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
    }
  });
});
