// ACTIVIDAD INDIVIDUAL 6 MODULO 2  

// Define las imagenes en una lista
let images = $(".thumb");  // Crear una lista de las imagenes 
let currentIndex = 0;  // Define el indice actual

// Las imágenes se abren en grande al seleccionar
$(".thumb").click(function() {
    let src_imagen = $(this).attr("src");              // Toma la ruta de la imagen 
    $(".imagen_modal").attr("src", src_imagen);        // Asigna esa ruta a la imagen del modal
    $(".modal").fadeIn();                              // Muestra el modal en grande
    currentIndex = $(this).attr("data-index");                // Guarda el índice actual de la imagen
});

// Cierra el modal al hacer clic en la X
$(".close").click(function() {
    $(".modal").fadeOut();                             // Oculta el modal 
});


// Cierra el modal si se hace clic fuera de la imagen
$(".modal").click(function(e) {
    if (!$(e.target).is(".imagen_modal") && !$(e.target).is("button")) {
        $(".modal").fadeOut();                          // Oculta si no es imagen ni botón
    }
});


// Botón de anterior
$("#prev").click(function() {
    // Da el índice válido con el módulo (%) permitiendo retroceder
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    // Toma la ruta de la nueva imagen
    let src_imagen = $(images[currentIndex]).attr("src");  
    // Cambia la imagen en el modal
    $(".imagen_modal").attr("src", src_imagen);
});

// Botón de siguiente
$("#next").click(function() {
    currentIndex = (currentIndex + 1) % images.length;
    let src_imagen = $(images[currentIndex]).attr("src");    
    $(".imagen_modal").attr("src", src_imagen);               
});

