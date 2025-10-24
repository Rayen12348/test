<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Click for Flowers 🌸</title>
  <style>
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #fef6ff;
      font-family: "Poppins", sans-serif;
      overflow: hidden;
    }

    button {
      background-color: #ff80bf;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 1.2em;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }

    button:hover {
      background-color: #ff66b3;
      transform: scale(1.1);
    }

    .flower {
      position: absolute;
      font-size: 2em;
      animation: floatUp 4s linear forwards;
    }

    @keyframes floatUp {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) scale(0.5);
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <button onclick="showFlowers()">🌷 Click me 🌷</button>

  <script>
    function showFlowers() {
      const flowers = ['🌸', '🌹', '🌼', '🌷', '💐', '🌻'];
      for (let i = 0; i < 30; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = '100vh';
        flower.style.animationDelay = Math.random() * 1 + 's';
        document.body.appendChild(flower);
        setTimeout(() => flower.remove(), 4000);
      }
    }
  </script>
</body>
</html>

