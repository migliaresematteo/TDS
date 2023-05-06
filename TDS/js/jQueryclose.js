$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
      if ($(".navbar-collapse").hasClass("show")) {
        $(".navbar-collapse").collapse('hide');
      }
    });
  });
  