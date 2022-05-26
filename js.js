$(document).ready(function () {
  $(".menu>li>a").click(function (e) {
    e.preventDefault();

    $(this).parent().siblings().find("ul").slideUp();
    $(this).parent().find("ul").slideToggle();
    $(this).parent().siblings().find(".active").removeClass("active");
    $(this).addClass("active");
  });

  $(".gotop").click(() => {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  $("input:last-of-type").click((e) => {
    // e.preventDefault();
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 400,
    spaceBetween: 100,
  });
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  showImageNumberLabel: false,
});
