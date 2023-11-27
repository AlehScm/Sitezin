//index javascript

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

var nextButton = document.querySelector('.swiper-button-next');
var prevButton = document.querySelector('.swiper-button-prev');

nextButton.style.color = '#ffff00'; // Muda a cor das setas para vermelho
prevButton.style.color = '#ffff00'; // Muda a cor das setas para vermelho

nextButton.style.fontSize = '32px'; // Ajusta o tamanho das setas
prevButton.style.fontSize = '32px'; // Ajusta o tamanho das setas

nextButton.style.right = '30%'; // Ajusta a distância da seta direita para a borda direita
prevButton.style.left = '30%'; // Ajusta a distância da seta esquerda para a borda esquerda


// Verifica o tamanho da tela
if (window.innerWidth < 768) {
    // Para telas pequenas (ex: smartphones)
    nextButton.style.right = '5%';
    prevButton.style.left = '5%';
  } else if (window.innerWidth < 1024) {
    // Para telas médias (ex: tablets)
    nextButton.style.right = '5%';
    prevButton.style.left = '5%';
  } else {
    // Para telas grandes (ex: desktops)
    nextButton.style.right = '30%';
    prevButton.style.left = '30%';
  }
