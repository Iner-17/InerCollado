var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    grabCursor: true,
    fade: true,
    centerSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  console.log("helo")