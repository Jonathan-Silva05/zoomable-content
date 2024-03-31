let zoomLevel = 100;
const zoomable = document.getElementById('zoomable');
const zoomSlider = document.getElementById('zoomSlider');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const zoomValue = document.getElementById('value');

function updateZoom() {
  zoomable.style.transform = `scale(${zoomLevel / 100})`;
  zoomSlider.value = zoomLevel;
  zoomValue.textContent = `${zoomLevel}%`;
}

zoomSlider.oninput = () => {
  zoomLevel = parseInt(zoomSlider.value);
  updateZoom();
};

zoomIn.onclick = () => {
  if (zoomLevel < 200) {
    zoomLevel += 10;
    updateZoom();
  }
};

zoomOut.onclick = () => {
  if (zoomLevel > 60) {
    zoomLevel -= 10;
    updateZoom();
  }
};

updateZoom();
