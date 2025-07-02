// ACTIVIDAD INDIVIDUAL 5


// Contador de las solicitudes y las conexiones
const solicitudesSpan = document.getElementById('solicitudes');
const conexionesSpan = document.getElementById('conexiones');


// Aceptar la invitacion

function aceptar(elemento) {
  const tarjeta = elemento.closest('.invitacion');
  tarjeta.remove();

  // Disminuye solicitudes (porque aceptaste, se quita la invitación)
  let solicitudes = parseInt(solicitudesSpan.textContent);
  solicitudesSpan.textContent = solicitudes - 1;

  // Aumenta conexiones
  let conexiones = parseInt(conexionesSpan.textContent);
  conexionesSpan.textContent = conexiones + 1;
}

function rechazar(elemento) {
  const tarjeta = elemento.closest('.invitacion');
  tarjeta.remove();

  // Disminuye solicitudes (porque rechazaste, se quita la invitación)
  let solicitudes = parseInt(solicitudesSpan.textContent);
  solicitudesSpan.textContent = solicitudes - 1;
}