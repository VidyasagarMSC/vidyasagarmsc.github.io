$(document).ready(function () {
  $("#content").load("about.html");
  $("#blog #content").load("blog.html");
  $("#photos #content").load("photos.html");
  $("#connect #content").load("footer.html");
  /* Animations */

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function () {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");

  //});
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".toggler").on("click", () => {
    $(".fullscreen").toggleClass("light");
    $("#home").toggleClass("is-dark");
    //$("#home").addClass("is-dark");
    $("#about").toggleClass("is-black");
    //$("#about").addClass("is-black");
    //$("#blog").removeClass("has-background-white-bis");
    $("#blog").toggleClass("is-dark");
    $("#photos").toggleClass("is-black");
    $("article").toggleClass("has-background-dark");
    $(".card-content").toggleClass("text-color-invert");
    $(".content").children("h4").toggleClass("text-color-invert");
    $(".card").toggleClass("has-background-dark");
    $(".tag").toggleClass("is-dark");
  });
});

// function to toggle between light and dark theme
function toggleTheme() {
  $("#home").toggleClass("is-dark");
  //$("#home").addClass("is-dark");
  $("#about").toggleClass("is-black");
  //$("#about").addClass("is-black");
  //$("#blog").removeClass("has-background-white-bis");
  $("#blog").toggleClass("is-dark");
  $("#photos").toggleClass("is-black");
  $("article").toggleClass("has-background-dark");
  $(".card-content").toggleClass("text-color-invert");
  $(".content").children("h4").toggleClass("text-color-invert");
  $(".card").toggleClass("has-background-dark");
  $(".tag").toggleClass("is-dark");
}
