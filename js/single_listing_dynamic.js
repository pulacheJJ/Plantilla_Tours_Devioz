/**
 * DEVIOZ - Sistema de Carga Dinámica de Tours Completo
 */

// 1. "Base de Datos" de Tours (Mock DB)
const toursData = {
    "machupicchu": {
        title: "Santuario de Machu Picchu",
        location: "Aguas Calientes, Cusco, Perú",
        mainBg: "images/machu_banner.jpg",
        mainImg: "images/machu_picchu_detail.jpg",
        description: "Descubra la magia de una de las siete maravillas del mundo moderno. Nuestro tour ofrece una inmersión completa en la ingeniería y espiritualidad incaica, recorriendo los sectores más emblemáticos de la ciudadela.",
        videoSrc: "videos/video_machu.mp4",
        videoText: "Machu Picchu",
        videoFooter: '"Una perspectiva única de la ciudadela inca, capturada exclusivamente para nuestros viajeros."',
        gallery: [
            "images/machu_1.jpg", "images/machu_2.jpg", "images/machu_3.jpg",
            "images/machu_4.jpg", "images/machu_5.jpg", "images/machu_6.jpg",
            "images/machu_7.jpg", "images/machu_8.jpg", "images/machu_9.jpg"
        ],
        packages: [
            {
                title: "Paquete Estándar (Grupal)",
                price: "S/ 250 por persona",
                includes: "Incluye: Guía certificado, entrada al Santuario y transporte en bus.",
                extra: "Salidas diarias desde Cusco (05:00 AM)",
                img: "images/tour_standard.jpg"
            },
            {
                title: "Paquete Privado Exclusivo",
                price: "S/ 450 por persona",
                includes: "Incluye: Guía privado, tickets de tren Vistadome y almuerzo gourmet.",
                extra: "Horarios flexibles y atención personalizada",
                img: "images/tour_private.jpg"
            }
        ]
    },
    "huacachina": {
        title: "Oasis de Huacachina",
        location: "Ica, Perú",
        mainBg: "images/huaca_banner.jpg",
        mainImg: "images/add2.jpg",
        description: "Vive la adrenalina en las dunas de Ica. Paseos en tubular, sandboarding y una estadía inolvidable frente al único oasis natural de América. Perfecto para amantes de la aventura.",
        videoSrc: "videos/video_huaca.mp4",
        videoText: "Huacachina",
        videoFooter: '"Siente la velocidad y el viento en el desierto más impresionante de Sudamérica."',
        gallery: [
            "images/huaca_gal_1.jpg", "images/huaca_gal_2.jpg", "images/huaca_gal_3.jpg",
            "images/huaca_gal_4.jpg", "images/huaca_gal_5.jpg", "images/huaca_gal_6.jpg",
            "images/huaca_gal_7.jpg", "images/huaca_gal_8.jpg", "images/huaca_gal_9.jpg"
        ],
        packages: [
            {
                title: "Paseo Tubular Básico",
                price: "S/ 60 por persona",
                includes: "Incluye: Paseo en arenero (1 hora) y tablas de sandboard.",
                extra: "Salidas cada hora desde el oasis",
                img: "images/huaca_pack_1.jpg"
            },
            {
                title: "Atardecer VIP + Picnic",
                price: "S/ 180 por persona",
                includes: "Incluye: Arenero privado, sandboard y picnic con snacks al atardecer.",
                extra: "Horario exclusivo: 4:30 PM",
                img: "images/huaca_pack_2.jpg"
            }
        ]
    },
    "mancora": {
        title: "Playas de Máncora",
        location: "Piura, Perú",
        mainBg: "images/mancora_banner.jpg",
        mainImg: "images/offer_6.jpg",
        description: "Disfruta del sol todo el año en las playas del norte piurano. Ideal para el surf, el avistamiento de ballenas y el mejor relax frente al mar en un entorno paradisíaco.",
        videoSrc: "videos/video_mancora.mp4",
        videoText: "Máncora",
        videoFooter: '"El atardecer perfecto te espera en las cálidas aguas del pacífico piurano."',
        gallery: [
            "images/mancora_gal_1.jpg", "images/mancora_gal_2.jpg", "images/mancora_gal_3.jpg",
            "images/mancora_gal_4.jpg", "images/mancora_gal_5.jpg", "images/mancora_gal_6.jpg",
            "images/mancora_gal_7.jpg", "images/mancora_gal_8.jpg", "images/mancora_gal_9.jpg"
        ],
        packages: [
            {
                title: "Full Day Playero",
                price: "S/ 120 por persona",
                includes: "Incluye: Traslados, clase básica de surf y almuerzo marino.",
                extra: "Salidas diarias desde el centro",
                img: "images/mancora_pack_1.jpg"
            },
            {
                title: "Tour Avistamiento de Ballenas",
                price: "S/ 200 por persona",
                includes: "Incluye: Yate privado, guía biólogo y snacks a bordo.",
                extra: "Sujeto a temporada (Julio - Octubre)",
                img: "images/mancora_pack_2.jpg"
            }
        ]
    },
    "vallesagrado": {
        title: "Valle Sagrado de los Incas",
        location: "Valle Sagrado, Cusco, Perú",
        mainBg: "images/valle_banner.jpg",
        mainImg: "images/offer_7.jpg",
        description: "Recorre los pueblos de Pisac y Ollantaytambo. Conecta con la naturaleza y la energía de los Andes en el corazón del Valle Sagrado antes de tu ascenso a la ciudadela.",
        videoSrc: "videos/video_valle.mp4",
        videoText: "Valle Sagrado",
        videoFooter: '"Una conexión espiritual con la historia viva de los Andes y sus comunidades."',
        gallery: [
            "images/valle_gal_1.jpg", "images/valle_gal_2.jpg", "images/valle_gal_3.jpg",
            "images/valle_gal_4.jpg", "images/valle_gal_5.jpg", "images/valle_gal_6.jpg",
            "images/valle_gal_7.jpg", "images/valle_gal_8.jpg", "images/valle_gal_9.jpg"
        ],
        packages: [
            {
                title: "Tour Clásico Valle Sagrado",
                price: "S/ 100 por persona",
                includes: "Incluye: Transporte turístico y guía oficial en español/inglés.",
                extra: "No incluye boleto turístico",
                img: "images/valle_pack_1.jpg"
            },
            {
                title: "Valle Sagrado VIP + Almuerzo",
                price: "S/ 220 por persona",
                includes: "Incluye: Transporte, entradas a sitios arqueológicos y almuerzo buffet en Urubamba.",
                extra: "Salidas diarias 07:00 AM",
                img: "images/valle_pack_2.jpg"
            }
        ]
    },
    "colca": {
        title: "Cañón del Colca",
        location: "Arequipa, Perú",
        mainBg: "images/colca_banner.jpg",
        mainImg: "images/offer_8.jpg",
        description: "Observa el majestuoso vuelo del Cóndor en uno de los cañones más profundos del mundo. Una ruta que combina paisajes volcánicos, cultura viva y aguas termales.",
        videoSrc: "videos/video_colca.mp4",
        videoText: "Cañón del Colca",
        videoFooter: '"Admira el vuelo del guardián de los Andes en su hábitat natural."',
        gallery: [
            "images/colca_gal_1.jpg", "images/colca_gal_2.jpg", "images/colca_gal_3.jpg",
            "images/colca_gal_4.jpg", "images/colca_gal_5.jpg", "images/colca_gal_6.jpg",
            "images/colca_gal_7.jpg", "images/colca_gal_8.jpg", "images/colca_gal_9.jpg"
        ],
        packages: [
            {
                title: "Full Day Colca",
                price: "S/ 90 por persona",
                includes: "Incluye: Transporte, desayuno, guía y parada en mirador Cruz del Cóndor.",
                extra: "Salida de madrugada (03:00 AM)",
                img: "images/colca_pack_1.jpg"
            },
            {
                title: "Tour Colca 2 Días / 1 Noche",
                price: "S/ 280 por persona",
                includes: "Incluye: Transporte, hotel en Chivay, visita a baños termales y alimentación.",
                extra: "Ideal para aclimatación y relax",
                img: "images/colca_pack_2.jpg"
            }
        ]
    }
};

// 2. Método / Función para inyectar los datos en la vista
function renderizarTour(idTour) {
    const data = toursData[idTour];

    if (!data) {
        console.error("Error: Tour no encontrado para el ID " + idTour);
        $('.hotel_title').text("Tour no encontrado");
        $('.hotel_info_text p').text("Lo sentimos, la ruta que buscas no está disponible.");
        $('.hotel_gallery, .location_on_map, .rooms').hide();
        return;
    }

    // --- Actualizar Textos y Título de Pestaña ---
    $('.hotel_title').text(data.title);
    $('.hotel_location').text(data.location);
    $('.hotel_info_text p').html(data.description + "<br><br>Cada ruta de <strong>Devioz</strong> está planificada para ofrecer seguridad, confort y una conexión real con el destino.");
    document.title = data.title + " | Devioz";

    // --- Actualizar Imágenes Principales ---
    $('.hotel_image > img').attr('src', data.mainImg);
    $('.home_background').css('background-image', 'url(' + data.mainBg + ')');
    $('.home_background').attr('data-image-src', data.mainBg);

    // --- Actualizar Video y Texto del Video Footer ---
    const $videoSource = $('.video_container video source');
    if ($videoSource.length) {
        $videoSource.attr('src', data.videoSrc);
        $('.video_container video')[0].load();
    }
    $('.video_header h2 span').text(data.videoText);
    $('.video_footer p').text(data.videoFooter);

    // --- Actualizar Paquetes (Rooms) ---
    const $rooms = $('.room');
    if (data.packages && data.packages.length === 2 && $rooms.length >= 2) {
        // Paquete 1
        const pack1 = data.packages[0];
        $rooms.eq(0).find('.room_title').text(pack1.title);
        $rooms.eq(0).find('.room_price').text(pack1.price);
        $rooms.eq(0).find('.room_text').text(pack1.includes);
        $rooms.eq(0).find('.room_extra').text(pack1.extra);
        $rooms.eq(0).find('.room_image img').attr('src', pack1.img);

        // Paquete 2
        const pack2 = data.packages[1];
        $rooms.eq(1).find('.room_title').text(pack2.title);
        $rooms.eq(1).find('.room_price').text(pack2.price);
        $rooms.eq(1).find('.room_text').text(pack2.includes);
        $rooms.eq(1).find('.room_extra').text(pack2.extra);
        $rooms.eq(1).find('.room_image img').attr('src', pack2.img);
    }

    // --- Actualizar Galería (Owl Carousel) ---
    let galleryHtml = '';
    data.gallery.forEach(function (img) {
        galleryHtml += `
            <div class="owl-item">
                <a class="colorbox cboxElement" href="${img}">
                    <img src="${img}" alt="${data.title}">
                </a>
            </div>`;
    });

    const $slider = $('.hotel_slider');
    if ($slider.length) {
        // Destruir y recrear el carrusel para que tome las nuevas imágenes
        $slider.trigger('replace.owl.carousel', galleryHtml).trigger('refresh.owl.carousel');

        // Re-vincular el efecto Colorbox (zoom) a las nuevas imágenes
        if ($.isFunction($.fn.colorbox)) {
            $('.colorbox').colorbox({
                rel: 'colorbox',
                photo: true,
                maxWidth: '90%'
            });
        }
    }
}

// 3. Ejecución al cargar el DOM
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id') || 'machupicchu';
    renderizarTour(tourId);
});