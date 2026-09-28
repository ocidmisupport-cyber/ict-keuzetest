/* Bewegend lichtstreepje op de rand van de startpagina. */
const kaarten = document.querySelectorAll('.card');
const rondeDuur = 3200;

kaarten.forEach((kaart) => {
  const loper = document.createElement('span');
  loper.className = 'neon-runner';
  kaart.append(loper);
});

function beweegLopers(tijd) {
  const ronde = (tijd % rondeDuur) / rondeDuur;

  kaarten.forEach((kaart) => {
    const loper = kaart.querySelector('.neon-runner');
    const zijde = ronde * 4;
    const positie = (zijde % 1) * 84;

    if (zijde < 1) {
      loper.style.cssText = `top:1px;left:${positie}%;right:auto;bottom:auto;width:16%;height:2px`;
    } else if (zijde < 2) {
      loper.style.cssText = `top:${positie}%;right:1px;left:auto;bottom:auto;width:2px;height:16%`;
    } else if (zijde < 3) {
      loper.style.cssText = `bottom:1px;right:${positie}%;top:auto;left:auto;width:16%;height:2px`;
    } else {
      loper.style.cssText = `bottom:${positie}%;left:1px;top:auto;right:auto;width:2px;height:16%`;
    }
  });

  requestAnimationFrame(beweegLopers);
}

requestAnimationFrame(beweegLopers);
