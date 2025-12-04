// Interatividade simples de formulário
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    });
  }
});

/*CARROSSEL DE FOTOS*/
const carousel = document.getElementById('carouselImages');
const images = carousel.querySelectorAll('img');
const totalImages = images.length;
let index = 0;

function showImage(i) {
  carousel.style.transform = `translateX(${-i * 100}%)`;
}

function nextImage() {
  index = (index + 1) % totalImages;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + totalImages) % totalImages;
  showImage(index);
}

// Troca automática a cada 3 segundos
let interval = setInterval(nextImage, 3000);

// Botões
document.getElementById('nextBtn').addEventListener('click', () => {
  nextImage();
  resetTimer();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  prevImage();
  resetTimer();
});

// Reinicia o temporizador quando o usuário interage
function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}

