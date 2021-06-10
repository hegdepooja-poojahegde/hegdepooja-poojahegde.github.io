var imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-165971502-1';
document.head.appendChild(imported);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-165971502-1');

(function($){
    'use strict';
	var $window = $(window);
	//Menu Position Auto Right
	function menuPosition(){
		$('.sub-menu').each(function(){
			var $this = $(this),
				subMenuTotalWidth = $this.offset().left + $this.width(),
				windowWidth = $window.width();
			if(subMenuTotalWidth > windowWidth){
				$this.addClass('right-menu');
			}else{
				$this.removeClass('right-menu');
			}
		});
	}
	menuPosition();
	

    // This code is for partner area slider
    if($.fn.owlCarousel){
        var footer_partner_wrapper = $('.footer_partner_wrapper');
        footer_partner_wrapper.owlCarousel({
            loop:true,
            autoplay: direkuta_brandscroll,
            dots: false,			  
            autoplayTimeout: 1000,
            smartSpeed: 1000,
			margin: 55,
			rtl:true,
            responsive:{
                1200:{
                    items: direkuta_brandnumber
                },
                768:{
                    items: 5
                },
                300:{
                    items: 3
                }
            }
        });
    }  // Partner area slider end
	

    // This code is for biographie single film slider
    if($.fn.owlCarousel){
          var biographie_single_film_wrapper = $('.biographie_single_film_wrapper');
          biographie_single_film_wrapper.owlCarousel({
            loop: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 0,
			rtl:true,
            smartSpeed: 1000,
            responsive:{
                1600: {
                    items: 8
                },
                1200:{
                    items: 6
                },
                992:{
                    items: 5
                },
                768:{
                    items: 4
                },
                300:{
                    items: 2
                },
                480:{
                    items: 3
                }
            }
        });
    }  // biographi page slider end

    // This code is for award area slider
    if($.fn.owlCarousel){
          var awards_slider_wrapper = $('.awards_slider_wrapper');
          awards_slider_wrapper.owlCarousel({
			  items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 3000,
            animateIn: "fadeInDown",
            animateOut: "fadeOutDown",
            mouseDrag: false,
			rtl:true
        });
    }  // award area slider end

    // This code is for Hero area Countdown
	var clockCountDown = $('#clock'),
		countDownDate = clockCountDown.data('countdate');
    clockCountDown.countdown(countDownDate, function(event) {
        var $this = $(this).html(event.strftime(''
      + '<li>%D <span>days</span></li>  '
      + '<li>%H <span>hours</span></li>  '
      + '<li>%M <span>minutes</span></li>  '
      + '<li>%S <span>seconds</span></li> '));
    });  
    // countdown js end

    // This code is for CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // counter up js end

    // This code is for Magnetic Pop_Up
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
    // magnetic pop up end

    // This Code is for scroll bottom
    $(".scroll_down").on('click', function(){
        var $this = $(this);
        var sectionToSlide = $this.parents('.common_area').next();
        var sectionToSlide = $this.parents('.common_area, .vc_row.wpb_row.vc_row-fluid').next();
        $('html, body').animate({ scrollTop:  sectionToSlide.offset().top + 1 }, 'slow');
    });
    // scroll bottom end

    // this code is for meanmenu
    $('.header_area .mainmenu nav').meanmenu();


    // This COde is for Animation
    var $revealClass = $('.reveal');
    $revealClass.css({
        'animation-name': 'none',
        'visibility': 'hidden'
    });
    $revealClass.waypoint(function (direction) {
        var animationName = $(this).attr('data-anim'),
            animDelay = $(this).attr('data-anim-delay'),
            animDuration = $(this).attr('data-anim-duration');
        $(this).css({
            'animation-name': animationName,
            'data-anim-duration': animDuration,
            '-webkit-animation-delay': animDelay,
            '-moz-animation-delay': animDelay,
            'animation-delay': animDelay,
            'visibility': 'visible'
        });
    },{
        offset: '90%'
    });



    // This Code is for Blog Carousel
    var blogCarousel1 = $('.blog-carousel1');
    blogCarousel1.owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        mouseDrag: false,
        autoplay: false,
        autoplaySpeed: 2000,
        nav: false,
        fluidSpeed: 2000,
        dotsSpeed: 500,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });   

    var blog_carousel1_center = $('.blog-carousel1 .owl-item.center');
    blog_carousel1_center.prev().addClass('prEv');
    blog_carousel1_center.next().addClass('neXt');

    blogCarousel1.on('translate.owl.carousel', function () {
        $('.owl-item').removeClass('prEv neXt');
    }).on('translated.owl.carousel', function () {
        blog_carousel1_center = $('.blog-carousel1 .owl-item.center');
        blog_carousel1_center.prev().addClass('prEv');
        blog_carousel1_center.next().addClass('neXt');
    });

    var blogCarousel2 = $('.blog-carousel2');
    blogCarousel2.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        dots: true,
        margin: 10,
        stagePadding: 0,
        dotsSpeed: 1000,
        smartSpeed: 2000,
    });

    blogCarousel2.on('translate.owl.carousel', function (property) {
        blogCarousel1.find('.owl-dot:eq(' + property.page.index + ')').click();
    });
    blogCarousel1.on('translate.owl.carousel', function (property) {
        blogCarousel2.find('.owl-dot:eq(' + property.page.index + ')').click();
    });
    // Blog Carousel End



    // This Code is for Expedition slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.expeditation-slider2'
    });

    $('.expeditation-slider2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    
    // Convert All Image to SVG
    $('img.svg').each(function() {
         var $img = $(this),
             imgID = $img.attr('id'),
             imgClass = $img.attr('class'),
             imgURL = $img.attr('src');

         $.get(imgURL, function(data) {
             // Get the SVG tag, ignore the rest
             var $svg = $(data).find('svg');

             // Add replaced image's ID to the new SVG
             if (typeof imgID !== 'undefined') {
                 $svg = $svg.attr('id', imgID);
             }
             // Add replaced image's classes to the new SVG
             if (typeof imgClass !== 'undefined') {
                 $svg = $svg.attr('class', imgClass);
             }

             // Remove any invalid XML tags as per http://validator.w3.org
             $svg = $svg.removeAttr('xmlns:a');

             // Replace image with new SVG
             $img.replaceWith($svg);
        }, 'xml');

    });
	
	$('.blog_page_commets a').lettering('words');
    
    
    // This code is for window load function
    $window.on('load', function(){


		$('.blog-grid-area-inner').masonry({
			percentPosition: true,
			columnWidth: true,
		});
		$('.filmographies').masonry({
			itemSelector: '.masonry-box',
		});
		

        //this code is for Isotop mesonary
        var $portfolio = $('.gallery_items');
        $portfolio.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'packery',
            filter: '*'
        });
        
        $('.filter-menu li').on('click', function(){
            $('.filter-menu li').removeClass('current_menu_item');
            $(this).addClass('current_menu_item');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
			
        }); // Isotop mesonary end
        
        
        // This Code is for Preloader
        $('.preloader').fadeOut('slow');
        $('.preloader-bg').fadeOut('slow');
        // preloader js end
		
		// Replace search button
		$('input.search-submit').replaceWith('<button class="search-submit"><i class="fa fa-search"></i></button>');
        
    });
	

	if($('body.rtl').length){
		function bs_fix_vc_full_width_row(){
			var $elements = jQuery('[data-vc-full-width="true"]');
			jQuery.each($elements, function () {
				var $el = jQuery(this);
				$el.css('right', $el.css('left')).css('left', '');
			});
		}

		// Fixes rows in RTL
		jQuery(document).on('vc-full-width-row', function () {
			bs_fix_vc_full_width_row();
		});

		// Run one time because it was not firing in Mac/Firefox and Windows/Edge some times
		bs_fix_vc_full_width_row();
	}




})(jQuery);