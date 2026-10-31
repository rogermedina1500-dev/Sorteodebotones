// Elementos del DOM
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const choicesContainer = document.getElementById('choicesContainer');
const resultContainer = document.getElementById('resultContainer');
const resultMessage = document.getElementById('resultMessage');
const resultIcon = document.getElementById('resultIcon');
const resetBtn = document.getElementById('resetBtn');

/**
 * Determina el resultado aleatorio ("Has ganado" o "Has perdido")
 * y actualiza la interfaz de usuario.
 */
function jugarDestino() {
  // 50% de probabilidad de ganar o perder
  const haGanado = Math.random() < 0.5;

  if (haGanado) {
    resultMessage.textContent = 'Has ganado';
    resultMessage.className = 'result-message win';
    resultIcon.textContent = '🎉';
  } else {
    resultMessage.textContent = 'Has perdido';
    resultMessage.className = 'result-message lose';
    resultIcon.textContent = '💥';
  }

  // Deshabilitar botones de elección visualmente y mostrar resultado
  choicesContainer.classList.add('disabled');
  resultContainer.classList.remove('hidden');

  // Llevar el foco suavemente al botón de reiniciar para accesibilidad
  resetBtn.focus();
}

/**
 * Reinicia el estado del juego para permitir otra partida.
 */
function reiniciarJuego() {
  resultContainer.classList.add('hidden');
  choicesContainer.classList.remove('disabled');
  resultMessage.className = 'result-message';
  
  // Regresar el foco a la primera opción
  redBtn.focus();
}

// Event Listeners
redBtn.addEventListener('click', jugarDestino);
blueBtn.addEventListener('click', jugarDestino);
resetBtn.addEventListener('click', reiniciarJuego);
