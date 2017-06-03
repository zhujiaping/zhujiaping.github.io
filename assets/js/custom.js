

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            $(function () {
                $('.move-me a').bind('click', function (event) { 
                	var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
            
            $(function () {
                $('.chart').easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    },
                    barColor: '#05D6AC', 
                    lineWidth: 10, 
                    size: 150, 
                });

            });
            
            $(function () {
                $('a[title]').tooltip();
            });
           
            $('#testimonial-main').carousel({
                interval: 4000 
            })
            

            $("a.preview").prettyPhoto({
                social_tools: false
            });
            
            new WOW().init();

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
