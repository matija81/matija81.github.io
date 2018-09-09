$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a:not(#lokacije a)").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


        $("#help_button").click(function() {
            $("#help").slideToggle(1000, function() {
                if($("#help_button").val() == "close")
                {
                    $("#help_button").val("show table");
                }
                else
                {
                    $("#help_button").val("close");
                }
            });
        });
});

// instafeed js ---------------------------------------------------------------
// How to get an access token:
// http://jelled.com/instagram/access-token

// {{model.user.username}}, {{likes}} likes

var galleryFeed = new Instafeed({
  get: "user",
  userId: 623597756,
  accessToken: "623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 20,
  template:



       '<a href="{{link}}" target="_blank" id="{{id}}">' +
       '<div class="img-featured-container">' +
       '<div class="img-backdrop"></div>' +
       '<div class="description-container">' +
       '<p class="caption">{{caption}}</p>' +
       '<span class="likes"><i class="fas fa-heart"></i> {{likes}}</span>' +
       '<span class="comments"><i class="fas fa-comment"></i> {{comments}}</span>' +
       '</div>' +

       '<img src="{{image}}" class="img-responsive">' +

       '</div>',
       // '</a>'


  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    // if (!this.hasNext()) {
    //   btnInstafeedLoad.setAttribute('disabled', 'disabled');
    // }

    var owl = $(".owl-carousel"),
        owlSlideSpeed = 300;

    // init owl
    $(document).ready(function(){
      owl.owlCarousel({
        // navContainer: '.owl-nav-custom',
        // dotsContainer: '.owl-dots-custom',
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        margin:10,
        loop:true,
        margin:10,
        nav:true,
        dots:false,

        responsive:{
          0:{
            items:1
          },
          200:{
            items:2
          },
          565:{
            items:3
          },
          768:{
            items:4
          },
          992:{
            items:5
          }
        }
      });
    });


    // keyboard controls
    $(document.documentElement).keydown(function(event) {
      if (event.keyCode == 37) {
        owl.trigger('prev.owl.carousel', [owlSlideSpeed]);
      }
      else if (event.keyCode == 39) {
        owl.trigger('next.owl.carousel', [owlSlideSpeed]);
      }
    });
  }
});

galleryFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});




//
//
//
// $(window).scroll(function() {
//
//     if ($(this).scrollTop()>-150)
//      {
//         $('.a2a').fadeOut();
//      }
//     else
//      {
//       $('.a2a').fadeIn();
//      }
//  });
