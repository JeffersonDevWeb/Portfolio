export default function carrosel(){

  // Carrosel da aba projetos
   $(function(){
        function atualizar_info(){
            $('.projName').text( $('.slick-center').data('name'))
            $('.projDesc').text( $('.slick-center').data('desc'))
        }

        $('.carrossel').on('init', () => {
            atualizar_info()
        }) 

        $('.carrossel').slick({
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            variableWidth: true,
            prevArrow: $("#prev"),
            nextArrow: $(".next1"),
            responsive: [
              {
                breakpoint: 708,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 1
                }
              }
            ]
          });
          
        $('.carrossel').on('afterChange', () => {
            atualizar_info()
        })
     })
}