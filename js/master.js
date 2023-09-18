// Obtener el botón de redirección
const btnRedireccion = document.getElementById("btnDown");

if (btnRedireccion) {
    const ferrari = document.getElementById("containerFBread");
    const lambo = document.getElementById("containerLBread");
    const porsche = document.getElementById("containerPBread");

    // Escuchar el evento click en el botón y redirigir a la ubicación deseada
    btnRedireccion.addEventListener("click", function() {
        if (ferrari) {
            const destino = ferrari
            // Scroll suave hacia la ubicación del destino
            destino.scrollIntoView({ behavior: "smooth" });
        }
        if (lambo) {
            const destino = lambo
            // Scroll suave hacia la ubicación del destino
            destino.scrollIntoView({ behavior: "smooth" });
        }
        if (porsche) {
            const destino = porsche
            // Scroll suave hacia la ubicación del destino
            destino.scrollIntoView({ behavior: "smooth" });
        }  
    });   
}

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

//////////////////////////////////////////////////////////////////////////////////////
//Arreglo de objetos con la información de las galerias
const galleryFerrari = [
    {
        img: "./resources/img/ferrari/488_pista.jpg",
        title: "Ferrari 488 Pista",
        description: "Es un automóvil deportivo de alto rendimiento que presenta varias características notables.",
        characteristicOne:"Motor V8 Biturbo de Alta Potencia",
        characteristicTwo:"Dinámica de Carrera Avanzada",
        characteristicThree:"Diseño Ligero y Aerodinámico",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    {
        img: "./resources/img/ferrari/stradale.jpg",
        title: "Ferrari SF90 Stradale",
        description: "Es un automóvil deportivo de altas prestaciones con características de vanguardia en términos de tecnología y rendimiento.",
        characteristicOne:"Híbrido Enchufable de Alto Rendimiento",
        characteristicTwo:"Tracción en las Cuatro Ruedas",
        characteristicThree:"Modos de Conducción Personalizables",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    {
        img: "./resources/img/ferrari/ferrari_roma.jpg",
        title: "Ferrari Roma",
        description: "Es un automóvil deportivo que combina el diseño elegante de un gran turismo con el rendimiento y la tecnología típicos de Ferrari.",
        characteristicOne:"Motor V8 Biturbo Potente",
        characteristicTwo:"Tecnología Avanzada",
        characteristicThree:"Diseño Elegante y Clásico",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    
]

const galleryLambo = [
    {
        img: "./resources/img/lamborghini/Huracan_mini.jpg",
        title: "Lamborghini Huracan",
        description: "Es un coche deportivo impresionante que combina rendimiento, estilo y tecnología de vanguardia.",
        characteristicOne:"Motor V10 Potente",
        characteristicTwo:"Diseño Atractivo y Aerodinámico",
        characteristicThree:"Tecnología Avanzada",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    {
        img: "./resources/img/lamborghini/xian_2.jpg",
        title: "Lamborghini Xian",
        description: "Es un coche deportivo que lleva la emoción al límite. Con un motor V12 de 6.5 litros que produce una potencia impresionante de 800 caballos de fuerza, este coche combina rendimiento extremo con un diseño aerodinámico y audaz.",
        characteristicOne:"Motor V12 de Alto Rendimiento",
        characteristicTwo:"Modos de Conducción Inteligente",
        characteristicThree:"Interior Personalizado de Fibra de Carbono",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    {
        img: "./resources/img/lamborghini/urus.jpg",
        title: "Lamborghini Urus",
        description: "Es un SUV de alto rendimiento que desafía las expectativas. Combina la versatilidad de un SUV de lujo con la potencia y la agilidad propias de un Lamborghini.",
        characteristicOne:"Motor V8 biturbo de 4.0 litros",
        characteristicTwo:"Sistema de Suspensión Neumática Adaptativa",
        characteristicThree:"Tecnología Híbrida Avanzada",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    
]

const galleryPorsche = [
    {
        img: "./resources/img/porsche/911_carrera.jpg",
        title: "Porsche 911",
        description: "Es un coche deportivo legendario con una rica historia y una reputación de excelencia en rendimiento y diseño.",
        characteristicOne:"Motor Bóxer Seis Cilindros",
        characteristicTwo:"Diseño Clásico e Iconico",
        characteristicThree:"Tracción en las Cuatro Ruedas (opcional)",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    {
        img: "./resources/img/porsche/cayenne_turbo_gt.jpg",
        title: "Porsche Cayenne Turbo",
        description: "Es una variante de alto rendimiento del Cayenne, diseñada para aquellos que buscan una experiencia de conducción aún más emocionante.",
        characteristicOne:"Motor V8 Turboalimentado Potente",
        characteristicTwo:"Sistema de Tracción en las Cuatro Ruedas",
        characteristicThree:"Diseño Deportivo y Elegante",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    {
        img: "./resources/img/porsche/cayman-gt4-rs.jpg",
        title: "Porsche Cayman GT4 RS",
        description: "Es una variante de alto rendimiento del Cayman, diseñada para ofrecer un rendimiento excepcional en la pista y una experiencia de conducción emocionante",
        characteristicOne:"Motor de Seis Cilindros Bóxer",
        characteristicTwo:"Diseño Aerodinámico y Deportivo",
        characteristicThree:"Suspensión Deportiva Ajustable",
        urlQuieroEste: "#",
        urlCustom: "#",
    },
    
]

//Función para generar el HTML de cada Galeria
function generateGalleryHtml(car) {
    return `
    <div class="col">
        <div class="card">
            <img src="${car.img}" class="card-img-top"
                alt="${car.title}" />
            <div class="card-body">
                <h5 class="card-title">${car.title}</h5>
                <p class="card-text">${car.description}</p>
            </div>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4">
                    <i class="fas fa-check-circle me-2 text-success"></i>${car.characteristicOne}
                </li>
                <li class="list-group-item px-4">
                    <i class="fas fa-check-circle me-2 text-success"></i>${car.characteristicTwo}
                </li>
                <li class="list-group-item px-4">
                    <i class="fas fa-check-circle me-2 text-success"></i>${car.characteristicThree}
                </li>
            </ul>
            <div class="card-body">
                <a href="${car.urlQuieroEste}" class="card-link">ver más</a>
                <a href="${car.urlCustom}" class="card-link">Personalizar</a>
            </div>
        </div>
    </div>
    `;
}
// Obtener el contenedor de la galeria
const galleryContainerF = document.getElementById('galleryF');
const galleryContainerL = document.getElementById('galleryL');
const galleryContainerP = document.getElementById('galleryP');

// Generar y agregar los carros a la galeria
if(galleryContainerF){
    galleryFerrari.map((car) => {
        const galleryHTML = generateGalleryHtml(car);
        galleryContainerF.innerHTML += galleryHTML
    })
}

if (galleryContainerL) {
    galleryLambo.map((car) => {
        const galleryHTML = generateGalleryHtml(car);
        galleryContainerL.innerHTML += galleryHTML
    })   
}

if (galleryContainerP) {
    galleryPorsche.map((car) => {
        const galleryHTML = generateGalleryHtml(car);
        galleryContainerP.innerHTML += galleryHTML
    })   
}