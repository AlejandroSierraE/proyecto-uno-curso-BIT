// Obtener el botón de redirección
const btnRedireccion = document.getElementById("btnDown");

// Escuchar el evento click en el botón y redirigir a la ubicación deseada
btnRedireccion.addEventListener("click", function() {
    const destino = document.getElementById("containerPBread");

    // Scroll suave hacia la ubicación del destino
    destino.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////////////////////////////////////////
// Obtener el botón de Subir
const btnSubir = document.getElementById("btnSubir");

// Mostrar u ocultar el botón de Subir dependiendo de la posición del scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
};

// Desplazar suavemente hacia arriba cuando se hace clic en el botón de Subir
btnSubir.addEventListener("click", function() {
    document.documentElement.scrollTop = 0; // Para navegadores como Chrome, Firefox, IE y Safari
    document.body.scrollTop = 0; // Para navegadores que utilizan propiedades document.body.scrollTop
});