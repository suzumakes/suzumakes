// delay appending navbar classes
$(function () {
    $("ul > li").hover (
        function () {
            $(this).stop(true).delay(400).queue(function (next) {
                $(this).addClass('li-class');
            next();
            })
        },
        function () {
            $(this).stop(true).delay(400).queue(function (next) {
                $(this).removeClass('li-class');
            next();
            })
        }
    );
});

// setTimeout + delay
$(function () {
    var timer;
    $("ul > li").hover (
        function () {
            var that = this
            clearTimeout(timer);
            timer = setTimeout(function () {
                $(that).addClass('li-class');
            }, 400);
        },
        function () {
        $(this).delay(400).queue(function (next) {
            $(this).removeClass('li-class');
            next();
        })
        }
    );
});

// no delay
$(function () {
    $("ul > li").hover (
      function () {
          $(this).addClass('li-class');
      },
      function () {
          $(this).removeClass('li-class');
      }
    );
});
