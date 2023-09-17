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
function generateIntroCarouselHTML() {
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
generateIntroCarouselHTML();

//////////////////////////////////////////////////////////////////////////////////////
//Arreglo de objetos con la información de las marcas TOP
const topBrands = [
    {
        name: "Ferrari",
        img: "./resources/img/marcasTop/ferrari-logo2.jpg",
        url: "https://www.ferrari.com/es-CO",
        backgroundColor:"rgba(57, 192, 237, 0.2)"
    },
    {
        name: "Lamborghini",
        img: "./resources/img/marcasTop/Lamborghini-logo2.jpg",
        url: "https://www.lamborghini.com/en-en",
        backgroundColor:"rgba(57, 192, 237, 0.2)"
    },
    {
        name: "Porsche",
        img: "./resources/img/marcasTop/porsche-logo.jpg",
        url: "https://www.porsche.com/germany/?referrer_url=https%3A%2F%2Fwww.porsche.com%2Flatin-america-es%2F_colombia_%2F",
        backgroundColor:"rgba(57, 192, 237, 0.2)"
    }
]

//Función para generar el HTML de cada marca
function generateBrandHTML(brand) {
    return `
        <div class="col-md-4">
            <div class="bg-image hover-overlay ripple border-marcas m-2">
                <img src="${brand.img}" class="img-fluid" alt="${brand.name}" />
                <a href="${brand.url}" target= "_blank">
                    <div class="mask" style="background-color: ${brand.backgroundColor} ;"></div>
                </a>
            </div>
        </div>
    `;
}

// Obtener el contenedor de marcas
const marcasContainer = document.getElementById('idMarcasTopContainer');

// Generar y agregar las marcas al contenedor
topBrands.forEach((brand) => {
    const brandHTML = generateBrandHTML(brand);
    marcasContainer.innerHTML += brandHTML;
});


//////////////////////////////////////////////////////////////////////////////////////
const ourServices = [
    {
        title: "Asesoria personalizada",
        description: "Nuestra asesoría personalizada se adapta a ti, brindándote orientación y soluciones a medida para alcanzar tus metas y objetivos.",
        linkText: "¡Quiero este!",
        url: "#",
    },
    {
        title: "Acercamiento con la marca",
        description: "Descubre cómo nuestro enfoque único crea conexiones auténticas y fortalece la lealtad del cliente con la marca.",
        linkText: "¡Quiero este!",
        url: "#",
    },
    {
        title: "Capacitación sobre el cuidado de carro",
        description: "Potencia tu conocimiento con nosotros, garantizando un rendimiento óptimo y una vida útil prolongada para tus vehículos.",
        linkText: "¡Quiero este!",
        url: "#",
    },
    {
        title: "Test drive con el vehiculo deseado",
        description: "Experimenta la emoción de un Test Drive , acercándote a tu sueño automovilístico y tomando el control de tu futuro en la carretera.",
        linkText: "¡Quiero este!",
        url: "#",
    },
]

function generateOurServicesHtml(service) {
    return `
    <div class="col-md-6 col-sm-12">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                    <a href="${service.url}" class="btn btn-primary">${service.linkText}</a>
                </div>
            </div>
        </div>
    </div>
    `;
}

const servicesContainer = document.getElementById('ourServicesContainer');

ourServices.map((service) => {
    const serviceHTML = generateOurServicesHtml(service);
    servicesContainer.innerHTML += serviceHTML
})




