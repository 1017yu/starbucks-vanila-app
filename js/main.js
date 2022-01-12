const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


// Search
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// Badge
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function (){
  if (window.scrollY > 500) {
    // 배지 badge 숨기기
    // gsap.to(요소, 지속시간(s), {옵션})
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간(ms))

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7
  })
});

// SWIPER
// new Swiper(선택자, 옵션)
var swiper = new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      slidesPerView : '1'

    },
    autoplay: true,
    loop: true,
});