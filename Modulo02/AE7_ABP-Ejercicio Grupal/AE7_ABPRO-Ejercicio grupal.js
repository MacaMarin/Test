// EJERCICIO GRUPAL 7

// Integrantes:
// 1. Claudia
// 2. Macarena Marin
// 3. Maria Eugenia Martinez 


// Documento
$(document).ready(function () {
  $("form").submit(function (e) { // Al enviar el formulario
    e.preventDefault();           
    $("#modalexitoso").fadeIn();  // Muestra el modal
    this.reset();                 
  });

  // Cierra el modal al hacer clic en la X
  $(".cierra-button").click(function () {
    $("#modalexitoso").fadeOut();
  });

  // Cierra el modal al hacer clic fuera del contenido
  $("#modalexitoso").click(function (e) {
    if (!$(e.target).closest(".modal-contenido").length) {
      $(this).fadeOut();
    }
  });
});
