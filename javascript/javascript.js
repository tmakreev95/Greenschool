/* Sticky navigation */
$(window).scroll(function() {
  if( $(this).scrollTop() > $('#main-header').height() ) {
      $('#main-header').addClass('sticky');
  } else {
    $('#main-header').removeClass('sticky');
  }
});
/* Sticky navigation */


/* Dropdown in navigation */
$( ".dropdown-menu-item" ).hover(
    function() { //hover in
        $('.articles-dropdown').slideDown();
    },
    function() { //hover out
        $( ".articles-dropdown" ).hover(
            function() {
                $('.articles-dropdown').slideDown();
            },
            function() {
                $('.articles-dropdown').slideUp();
            }
         );

    }
 );

 /* Dropdown in navigation */


  /* Video hover */

 /* $("video").hover(function(event) {
     if(event.type === "mouseenter") {
         $(this).prop("controls", true);
     } else if(event.type === "mouseleave") {
         $(this).prop("controls", false);
     }
 });

 /* Video hover */

/* Article share hover effect */
$( ".latest-article" ).hover(
    function() {
        $(this).find('.article-share').show(200);
    }, function() {
        $(this).find('.article-share').hide(200);
    }
 );

 /* Article share hover effect */


/* Animate.css only */
$(function() {
  var animationName = 'animated pulse';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('.first-steps a').on('mouseenter',function() {
    $('.first-steps a').addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated pulse';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('.first-steps a').on('mouseenter',function() {
    $('.first-steps a').addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated pulse';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('#create-acc-btn').on('mouseenter',function() {
    $('#create-acc-btn').addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated pulse';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(".most-popular-species article").on('mouseenter',function() {
      $(this).addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated shake';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(".article-left-wrapper a").on('mouseenter',function() {
      $(this).addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated rubberBand';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(".view-all-articles").on('mouseenter',function() {
      $(this).addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated tada';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $("#form-btn").on('mouseenter',function() {
      $('.fa-envelope').addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

/* Animate.css only */
