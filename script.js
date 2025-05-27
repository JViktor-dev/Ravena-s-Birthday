const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((el) => myObserver.observe(el));

function tempoDecorrido() {
  const dataInicial = new Date('2024-09-05T00:00:00');
  const agora = new Date();

  let diffMs = agora - dataInicial;
  if (diffMs < 0) return null;

  const msPorSegundo = 1000;
  const msPorMinuto = msPorSegundo * 60;
  const msPorHora = msPorMinuto * 60;
  const msPorDia = msPorHora * 24;
  const msPorMes = msPorDia * 30;

  const meses = Math.floor(diffMs / msPorMes);
  diffMs -= meses * msPorMes;

  const dias = Math.floor(diffMs / msPorDia);
  diffMs -= dias * msPorDia;

  const horas = Math.floor(diffMs / msPorHora);
  diffMs -= horas * msPorHora;

  const minutos = Math.floor(diffMs / msPorMinuto);
  diffMs -= minutos * msPorMinuto;

  const segundos = Math.floor(diffMs / msPorSegundo);
  diffMs -= segundos * msPorSegundo;

  const milissegundos = diffMs;

  return { meses, dias, horas, minutos, segundos, milissegundos };
}

function atualizarTempo() {
  const tempo = tempoDecorrido();
  if (!tempo) return;

  document.getElementById('meses').textContent = tempo.meses.toString().padStart(2, '0');
  document.getElementById('dias').textContent = tempo.dias.toString().padStart(2, '0');
  document.getElementById('horas').textContent = tempo.horas.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = tempo.minutos.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = tempo.segundos.toString().padStart(2, '0');
  document.getElementById('milissegundos').textContent = tempo.milissegundos.toString().padStart(3, '0'); // 3 dígitos
}

// Atualiza IMEDIATAMENTE ao carregar a página
atualizarTempo();

// Depois atualiza a cada 50ms para mostrar o milissegundo quase em tempo real
setInterval(atualizarTempo, 50);

// Rodar a musica ao clicar
const btnMusica = document.getElementById('btnMusica')
const audio = document.getElementById('musica');
const paragrafoEscondido = document.getElementById('depoisMusica');
btnMusica.addEventListener('click', ()=> {
  audio.play();
  audio.currentTime = 14;
  audio.volume = 0.1;
  paragrafoEscondido.classList.remove('escondido');
  paragrafoEscondido.classList.add('mostrarp')
  btnMusica.classList.add('escondido')
})