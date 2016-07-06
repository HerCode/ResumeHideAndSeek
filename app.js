//Javascript
$(document)
    .ready(function() {
        $("#menu")
            .click(function() {
                $("nav.nav_closed")
                    .toggleClass("nav_open");
    });
});

$("nav ul li a")
    .click(function() {
        $("nav.nav_open")
            .removeClass("nav_open");

    });

    {
        $(".button").click(function(){
            $(".page-content").hide();
        });
        $(".button").click(function(){
            $("#div").show(".page-content");
        });
    }
$('a[href*="#"]:not([href="#"])')
    .click(function() {
        if (location.pathname.replace(/^\//, '') ==
            this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $(
                '[name=' + this.hash.slice(
                    1) + ']');
        }
        if ('target'.length) {
            $('html, body')
                .animate({
                    scrollTop: 'target'.offset()
                        .top
                }, 800);
            return false;

        }
    });
