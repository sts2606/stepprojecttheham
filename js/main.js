$(document).ready(function () {

    //Функция переключения вкладок в секции "Our Services"
    $(".services-list a").click(function (event) {
        $(".services-list a").removeClass("selected");
        $(this).addClass("selected");
        let indexOfService = $(this).index();
        $(".service-description").removeClass("active");
        $(".service-description").eq(indexOfService).addClass("active");
        event.preventDefault()
    });

    //Функция добавления картинок в секцию "Our Amazing Work"
    let counter1 = 0;
    $("#button-load1").click(function () {
        counter1++;
        if (counter1 == 1) {
            $(this).before(`<div class="animation">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>`);
            setTimeout(function () {
                $(".animation").remove();
                let conteinerImages = $("#button-load1").prev();
                $(".work-examples .img-block-2").removeClass("img-block-2");
            }, 3000);
        } else {
            $(this).before(`<div class="animation">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>`);
            setTimeout(function () {
                $(".animation").remove();
                let conteinerImages = $("#button-load1").prev();
                $(".work-examples .img-block-3").removeClass("img-block-3");
                $("#button-load1").remove();
            }, 3000);
        }
        event.preventDefault()
    });

        //Функция добавления картинок в секцию "Gallery of best images"
    let counter2 = 0;
    $("#button-load2").click(function () {
        counter2++;
        if (counter2 == 1) {
            $(this).before(`<div class="animation">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>`);
            setTimeout(function () {
                $(".animation").remove();
                let conteinerImages = $("#button-load2").prev();
                $(".gallery-wrapper .img-block-2").removeClass("img-block-2");
                launchMasonry();
            }, 3000);
        } else {
            $(this).before(`<div class="animation">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>`);
            setTimeout(function () {
                $(".animation").remove();
                let conteinerImages = $("#button-load2").prev();
                $(".gallery-wrapper .img-block-3").removeClass("img-block-3");
                launchMasonry();
                $("#button-load2").remove();
            }, 3000);
        }
        event.preventDefault()
    });

    //    Функция фильтра картинок в секции "Our Amazing Work"
    $(".work-menu a").click(function (event) {
        let buttonText = $(this).text();
        $(".work-menu a").removeClass("selected");
        $(this).addClass("selected");
        if (buttonText !== "All") {
            $(".work-examples div").hide();
            $(".work-examples div").filter(`div[data-target='creative design; ${buttonText}']`).show();
        } else {
            $(".work-examples div").show();
        }
        event.preventDefault()
    });

    $(".work-examples").on("mouseover", ".work-item", function () {
        let text = $(this).attr("data-target").split("; ");
        $(this).append(`<div class="work-item-hover">
                            <div class="icon-1">
                            <img src="img/icon1.png" alt="icon">
                        </div>
                        <div class="icon-2">
                            <img src="img/icon2.png" alt="icon">
                        </div>
                        <div class="text-container">
                            <p>${text[0]}</p>
                            <p>${text[1]}</p>
                        </div>
                    </div>`);
    });
    $(".work-examples").on("mouseleave", ".work-item", function () {
        $(this).find(".work-item-hover").remove();
    });

    //Инициализация плагина Masonry
    function launchMasonry() {
        $(".gallery-wrapper").masonry({
            itemSelector: ".gallery-item",
            columnWidth: 370,
            gutter: 19,
            horizontalOrder: true
        });
    }
    launchMasonry();

    //    Инициализация плагина Slick для слайдера
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.carousel',
    });
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        asNavFor: '.slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
})
