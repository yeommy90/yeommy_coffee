// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 500) {
    // BADGE 요소 숨기기
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동버튼 보이기
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });
  } else {
    // badge 요소 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // 상단으로 이동버튼 숨기기
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});

toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
})

// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// 슬라이드 기능 (new 키워드와 함께 실행)
new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true // 사용자가 제어가능한지 여부
  },
  navigation: { // 슬라이드 이전, 다음 버튼 사용
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 토글버튼을 클릭했을때
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

gsap.to('.floating1', 1.5, {
  delay: 1, // 지연 시간
  y: 15, // 수직으로 얼마나 움직이냐
  repeat: -1, // 무한 반복
  yoyo: true, // 한번 재생된 애니메이션을 뒤로 재생
  ease: Power1.easeInout // Easing 함수 사용
});

gsap.to('.floating2', 2, {
  delay: 0.7, // 지연 시간
  y: 15, // 수직으로 얼마나 움직이냐
  repeat: -1, // 무한 반복
  yoyo: true, // 한번 재생된 애니메이션을 뒤로 재생
  ease: Power1.easeInout // Easing 함수 사용
});

gsap.to('.floating3', 3, {
  delay: 1.2, // 지연 시간
  y: 20, // 수직으로 얼마나 움직이냐
  repeat: -1, // 무한 반복
  yoyo: true, // 한번 재생된 애니메이션을 뒤로 재생
  ease: Power1.easeInout // Easing 함수 사용
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면을 추가
      triggerElement: spyEl, // 감시할 요소를 지정
      triggerHook: .8 // 화면의 어느 지점에서 보여지는지 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next'
  }
});