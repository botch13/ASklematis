$(document).ready(function(){
    $('.carousel__iner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow2.png"></button>',
        nextArrow : '<button type="button" class="slick-next"><img src="../img/arrow.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false,
                    
                }         
            }  
        ]
    });
    $('ul.cat__lists').on('click', 'li:not(.cat__btn_activ)', function() {
        $(this)
          .addClass('cat__btn_activ').siblings().removeClass('cat__btn_activ')
          .closest('div.container').find('div.cat__catalog').removeClass('cat__catalog_active').eq($(this).index()).addClass('cat__catalog_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.store__content').eq(i).toggleClass('store__content_active');
                $('.store__list').eq(i).toggleClass('store__list_active');
            })
        });
    };
    toggleSlide('.store__details_a');
    toggleSlide('.store__back');
    //Modal
    

    $('[data-modal=consultation]').on('click', function(){
        $('.modales,#order').fadeIn();
    });

    $('.modal__close').on('click', function(){
        $('.modales,#order,#order_two,#order_whe').fadeOut('slow');
    });

    // $('.button_cat').on('click', function(){
    //     $('.modales,#order_two').fadeIn();
    // });

    $('.button_cat').each(function(i) {
        $(this).on('click', function(){
            $('#order_two .modal__descr').text($('.store__title').eq(i).text());
            $('.modales,#order_two').fadeIn();
        });
    });
    
});