// Obtener elementos del DOM
const piedraBtn = document.getElementById('piedra');
const papelBtn = document.getElementById('papel');
const tijeraBtn = document.getElementById('tijera');
const resultadoDiv = document.getElementById('resultado');
const mensajeFinalDiv = document.getElementById('mensaje-final');
const jugadaComputadoraDiv = document.getElementById('jugada-computadora');

// Función para obtener la jugada de la computadora
function obtenerJugadaComputadora() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const jugadaAleatoria = Math.floor(Math.random() * 3);
    return opciones[jugadaAleatoria];
}

// Función para determinar el ganador
function determinarGanador(jugadaJugador, jugadaComputadora) {
    if (jugadaJugador === jugadaComputadora) {
        return 'Empate';
    }
    if (
        (jugadaJugador === 'piedra' && jugadaComputadora === 'tijera') ||
        (jugadaJugador === 'papel' && jugadaComputadora === 'piedra') ||
        (jugadaJugador === 'tijera' && jugadaComputadora === 'papel')
    ) {
        return 'Ganaste';
    }
    return 'Perdiste';
}

// Función principal del juego
function jugar(jugadaJugador) {
    // Obtener la jugada de la computadora
    const jugadaComputadora = obtenerJugadaComputadora();
    jugadaComputadoraDiv.querySelector('span').textContent = jugadaComputadora;

    // Determinar el ganador
    const resultado = determinarGanador(jugadaJugador, jugadaComputadora);
    resultadoDiv.innerHTML = `Elegiste ${jugadaJugador}.`;
    mensajeFinalDiv.innerHTML = resultado;
}

// Agregar event listeners a los botones
piedraBtn.addEventListener('click', () => jugar('piedra'));
papelBtn.addEventListener('click', () => jugar('papel'));
tijeraBtn.addEventListener('click', () => jugar('tijera'));
