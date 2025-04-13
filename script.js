const tips = [
    "Apaga las luces cuando no las uses.",
    "Usa botellas reutilizables en lugar de plástico desechable.",
    "Recicla papel, cartón, vidrio y plástico.",
    "Camina o usa la bicicleta en trayectos cortos.",
    "Desconecta cargadores cuando no estén en uso.",
    "Reutiliza bolsas al hacer mercado.",
    "Consume productos locales y de temporada.",
    "Ahorra agua al cepillarte los dientes o lavar platos.",
    "Cultiva tus propias plantas o alimentos.",
    "Evita imprimir si no es necesario."
  ];
  
  let tipCount = 0;
  
  const tipText = document.getElementById('tip-text');
  const newTipBtn = document.getElementById('new-tip');
  const tipCountSpan = document.getElementById('tip-count');
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const body = document.body;
  
  newTipBtn.addEventListener('click', () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipText.style.opacity = 0;
    setTimeout(() => {
      tipText.textContent = randomTip;
      tipText.style.opacity = 1;
    }, 300);
    tipCount++;
    tipCountSpan.textContent = `Tips vistos: ${tipCount}`;
  });
  
  toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggleThemeBtn.textContent = body.classList.contains('dark') ? "☀️ Tema claro" : "🌙 Cambiar tema";
  });
  