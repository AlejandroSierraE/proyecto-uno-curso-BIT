// Arreglo de objetos con la información para cada diapositiva del IntroCarousel
const introCarouselItems = [
    {
        title: "LAMBORGHINI REVUELTO",
        subtitle: "Diseñado por nuevos deseos",
        link: "https://www.lamborghini.com/es-en",
        linkText: "Quiero uno!",
        backgroundImage: "./resources/img/lamborghini/revuelto.jpg",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    {
        title: "UNIDOS POR EL COLOR",
        subtitle: "Cuando Piero Ferrari decidió personalizar su Purosangue...",
        backgroundImage:"./resources/img/ferrari/purosangue.jpg",
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
    {
        title: "Nuevo Mercedes‑Maybach GLS.",
        link: "https://www.mercedes-benz.es/passengercars/models/suv/maybach-gls/overview.html",
        linkText: "Quiero uno!",
        backgroundImage:"./resources/img/mercedez/GLS_600.jpg",
        backgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6))",
        class:"carousel-amg"
    },
    {
        title: "Elementos destacados del 911 Carrera T.",
        link: "https://www.porsche.com/latin-america-es/models/911/911-models/carrera/",
        linkText: "Quiero uno!",
        backgroundImage:"./resources/img/porsche/porsche-normal.webp",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    }
];

// Función para generar el HTML del IntroCarrusel dinámicamente
function generateCarouselHTML() {
    const carouselIndicators = document.getElementById('carouselIndicators');
    const carouselInner = document.getElementById('carouselInner');

    introCarouselItems.forEach((item, index) => {
        // Crear indicadores
        const indicator = document.createElement('li');
        indicator.setAttribute('data-mdb-target', '#introCarousel');
        indicator.setAttribute('data-mdb-slide-to', index.toString());
        if (index === 0) {
            indicator.classList.add('active');
        }
        carouselIndicators.appendChild(indicator);

        // Crear elementos de carrusel
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.style.backgroundImage = `url(${item.backgroundImage})`;
        if (index === 0) {
            carouselItem.classList.add('active');
        }
        carouselItem.innerHTML = `
            <div class="mask ${item.class}" style="background-color: ${item.backgroundColor};">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white text-center">
                        <h2 class="mb-3">${item.title}</h2>
                        <h5 class="mb-4">${item.subtitle || ''}</h5>
                        ${item.link ? `<a class="btn btn-outline-light btn-lg m-2" href="${item.link}" target="_blank" role="button">${item.linkText || 'Leer más'}</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
    });
}

// Generar el HTML del IntroCarrusel
generateCarouselHTML();