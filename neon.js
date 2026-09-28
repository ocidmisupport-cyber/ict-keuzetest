/* Beweging van de kleurrand op de startpagina. */
const kaarten = document.querySelectorAll('.card');
const rondeDuur = 1800;

function laatKleurenLopen(tijd) {
  const positie = ((tijd % rondeDuur) / rondeDuur) * 300;
  kaarten.forEach((kaart) => kaart.style.setProperty('--neon-shift', `${positie}%`));
  requestAnimationFrame(laatKleurenLopen);
}

requestAnimationFrame(laatKleurenLopen);
