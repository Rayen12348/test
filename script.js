const button = document.getElementById('flowerButton');
const container = document.getElementById('flowerContainer');

button.addEventListener('click', () => {
  const flower = document.createElement('div');
  flower.textContent = '🌸';
  flower.classList.add('flower');
  container.appendChild(flower);

  setTimeout(() => flower.remove(), 2000); // disparaît après 2s
});
