$(document).ready(function(){
    AOS.init();

    $(".voltar-topo").on("click", function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });
    

    $(".btn-menu").on("click", function(){
        $(".menu").toggleClass("active");
        $(this).toggleClass("open");
    });

    $("#portfolio .item").on("click", function(){
        var valor = $(this).data("id");

        $('#modal .box-modal').animate({scrollTop:0}, 'slow');

        $('#modal .box-modal .item').removeClass("active");
        $('#modal .box-modal .item[data-id="'+valor+'"]').addClass("active");
        $("#modal").addClass("active");
    });

    $(".btn-fechar").on("click", function(){
        $("#modal").removeClass("active");
    });

    $("body").on('click', function(e) {
        var target = $(e.target);

        if (!target.closest('.menu').length && !target.closest('.btn-menu').length) {
            $(".menu").removeClass("active");
            $(".btn-menu").removeClass("open");
        }

        if (!target.closest('#modal .box-modal').length && !target.closest('#portfolio .item').length) {
            $("#modal").removeClass("active");
        }
    });

    $('.logo-loading').css({
        'opacity': '1'
    });

    setTimeout(function () {
        $('.logo-loading').addClass('active');

        setTimeout(function () {
            $('.loading').fadeOut();

        }, 900);
    }, 300);

    $('header ul li').on("click", function(){
        var valor = $('#banner-home').length;

        if(valor != 1){
            var ancora = $(this).data("ancora");
            location.href="http://www.rafaelamarchesi.com.br/#"+ancora;
        }
    })
});