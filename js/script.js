


// scrolling smooth ----------
$("nav ul li a[href^='#'], footer a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;


   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});






//
// $('nav ul li a[href*=#]:not([href=#]), footer a[href*=#]:not([href=#])').click(function() {
//
//
// // $('#lokacije a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//         || location.hostname == this.hostname) {
//
//         var target = $(this.hash);
// 		console.log("target= " + target);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 		console.log(target);
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: (target.offset().top - 130) /*offset due to floating header*/
//             }, 1000);
//             return false;
//         }
//     }
// });








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
