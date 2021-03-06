export default function carrosel() {
  $(() => {
    function atualizar_info() {
      $(".projName").text($(".slick-center").data("name"));
      $(".projDesc").text($(".slick-center").data("desc"));
    }
    $(".carrossel").on("init", () => {
      atualizar_info();
    });
    $(".carrossel").slick({
      infinite: !0,
      centerMode: !0,
      centerPadding: "60px",
      slidesToShow: 3,
      variableWidth: !0,
      prevArrow: $("#prev"),
      nextArrow: $(".next1"),
      responsive: [
        {
          breakpoint: 708,
          settings: {
            arrows: !1,
            centerMode: !0,
            centerPadding: "10px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: !1,
            centerMode: !0,
            centerPadding: "10px",
            slidesToShow: 1,
          },
        },
      ],
    });
    $(".carrossel").on("afterChange", () => {
      atualizar_info();
    });
  });
}
