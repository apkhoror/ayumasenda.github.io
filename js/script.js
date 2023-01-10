$(".page-scroll").on("click", function(e) {
  var href = $(this).attr("href");

  var elemenHref = $(href);

  $("html").animate({
    scrollTop : elemenHref.offset().top-40
  },1000, "swing");

  e.preventDefault();

});

// About Muncul
$(window).on("load", function(){
  $(".pSatu").addClass("pMuncul");
  $(".pDua").addClass("pMuncul");
});


// paralax
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

  // Jumbotron
  $(".jumbotron img").css({
    "transform" : "translate(0px, "+ wScroll / 4 +"%)"
  });

  $(".jumbotron h1").css({
    "transform" : "translate(0px, "+ wScroll / 2.2 +"%)"
  });

  $(".jumbotron p").css({
    "transform" : "translate(0px, "+ wScroll / 1.1 +"%)"
  });


  // Portfolio
  if (wScroll > $(".portfolio").offset().top-300) {
    $(".portfolio .thumbnail").each(function(i){
      setTimeout(function() {
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      },500 * (i + 1))
    });

  }

});
