/*
* Template Name: SoftLand
* Template URL: https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/
* License: https://bootstrapmade.com/license/
*/

(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

	$(window).load(function() {
		var $this = $(this),
				w = $this.width();

			if ( w < 768 ) {
				$('.reload-class').removeClass('order-2');
			} else {
				$('.reload-class').addClass('order-2');
			}
	});

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
			if ( w < 768 ) {
				$('.reload-class').removeClass('order-2');
			} else {
				$('.reload-class').addClass('order-2');
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mousDavinderp(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
	    }
		});
	}; 
	siteMenuClone();

	var siteScroll = function() {	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();
  
  var siteOwlCarousel = function() {
  	$('.testimonial-carousel').owlCarousel({
		  center: true,
	    items: 1,
	    loop: true,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
		});
  };
  siteOwlCarousel();


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});

$('form.contact-us-form').submit(function() {
	sendMail();
});

function sendMail() {
	console.log("send");
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var contact = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phoneformat = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
	var flag = false;
	if (name == '' || name == null || name == undefined) {
		alert("Name should not be empty");
		return;
	}
	if ((contact == null || contact == '' || contact == undefined ) && (email == '' || email == null || email == undefined)) {
		alert("Email or Phone Number should not be empty!!");
		return;
	}
	if (email != '' && (email.length < 1 || !email.match(mailformat))) {
		alert("Invalid Email !!");
		return;
	}
	if (contact != '' && (contact.length < 1 || !contact.match(phoneformat))) {
		alert("Invalid Phone Number !!");
		return;
	}
	/*----------------------------
	if (contact.match(/\d/g) == null || contact.match(/\d/g).length != 10) {
		alert("Invalid Contact Number !!");
		return;
	}
	----------------------------*/

		Email.send({
			SecureToken : "a897fcb9-eabf-48a5-86ec-0310d4a485a5",
			To: 'info@gigly.io,davinderdhindsa350@gmail.com',
			From: "davinderdhindsa356@gmail.com",
			Subject: "Client Request Gigly Info website",
			Body: "Client Name :  " + document.getElementById("name").value + " <br/>Email: " + document.getElementById("email").value + "<br/>Contact : " + document.getElementById("phone").value + "<br/>Message :" + document.getElementById("message").value
		}).then(
			message => {
				if (message == "OK") {
					alert("Thanks we will connect you soon.");
					document.getElementById("name").value = '';
					document.getElementById("email").value = '';
					document.getElementById("phone").value = '';
					document.getElementById("message").value = '';
				} else
					alert("Please send mail to info@gigly.io . Sorry due to some System error not able to save details")
			}
		)
}

/* Disable right-click menu on page */
document.addEventListener('contextmenu', function(event) { 
    event.preventDefault()
});
