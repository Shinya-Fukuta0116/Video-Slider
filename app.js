//javascript of responsive navigation menu
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
  console.log(menuBtn);
});

// video slider navigation
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  btns[manual].classList.add('active');
  slides[manual].classList.add('active');
  console.log(manual);
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sliderNav(i);
  });
});