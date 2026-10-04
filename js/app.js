// =============================================
// RETO 1: MODO OSCURO INTERACTIVO
// =============================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// getElementById busca en el HTML el elemento que tenga el id que le pasamos.
// Aquí le pasamos 'btn-toggle-tema' porque es el id del botón que queremos controlar.
const btnTema = document.getElementById('btn-toggle-tema');

// Seleccionamos el body directamente con document.body porque es el elemento
// principal de la página y es más rápido y sencillo que usar getElementById.
const body = document.body;

// 2. MANEJO DE EVENTOS
// El evento 'click' se dispara cada vez que el usuario hace clic en el botón.
// La función anónima (function() { ... }) es el código que se ejecuta automáticamente cuando ocurre ese clic.
btnTema.addEventListener('click', function() {

    // classList.toggle('tema-oscuro') agrega la clase si no existe, o la quita si ya existe.
    // Así activamos o desactivamos el modo oscuro con un solo clic.
    body.classList.toggle('tema-oscuro');

    // Cambiar el texto del botón dependiendo del estado actual
    if (body.classList.contains('tema-oscuro')) {
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = " Modo Oscuro";
    }
});

// =============================================
// RETO 2: SALUDO DINÁMICO
// =============================================

// 1. SELECCIÓN DEL CONTENEDOR
// Obtenemos el párrafo vacío donde vamos a escribir el saludo.
const textoSaludo = document.getElementById('saludo-tiempo-real');

// 2. LÓGICA DE TIEMPO
// Creamos un objeto Date para obtener la hora actual del sistema.
const fechaActual = new Date();
const horaActual = fechaActual.getHours(); // Solo nos interesa la hora (0-23)

let mensaje = "";

// Según la hora, elegimos el saludo apropiado
if (horaActual >= 6 && horaActual < 12) {
    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
} else if (horaActual >= 12 && horaActual < 18) {
    mensaje = "¡Buenas tardes! Gracias por visitar nuestro restaurante.";
} else {
    mensaje = "¡Buenas noches! Descubre nuestros platos destacados.";
}

// 3. INYECCIÓN EN EL DOM
// textContent solo inserta texto plano (más seguro).
// innerHTML permite insertar etiquetas HTML, pero aquí no las necesitamos,
// por eso usamos textContent para mayor seguridad y simplicidad.
textoSaludo.textContent = mensaje;