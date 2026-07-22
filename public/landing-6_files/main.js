/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {


        /* ================================
       Mobile Menu Js Start
    ================================ */

        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        $(".share-btn").on("click", function() {
            var target = $(this).data("target");
            $("#" + target).toggle();
        });
        $("#openButton").on("click", function(e) {
            e.preventDefault();
            $("#targetElement").removeClass("side_bar_hidden");
        });
        $("#openButton2").on("click", function(e) {
            e.preventDefault();
            $("#targetElement").removeClass("side_bar_hidden");
        });
        $("#closeButton").on("click", function(e) {
            e.preventDefault();
            $("#targetElement").addClass("side_bar_hidden");
        });

          /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        /* ================================
        Sticky Header Js Start
        ================================ */
    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        /* ================================
        Video & Image Popup Js Start
        ================================ */

         $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {}
        });


        /* ================================
        Wow Animation Js Start
        ================================ */

        new WOW().init();

        /* ================================
        Nice Select Js Start
        ================================ */

        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

         /* ================================
        Counterup Js Start
        ================================ */

        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });

        
     /* ================================
       Banner Active Js Start
    ================================ */

        if($('.banner-active').length > 0) {
            const bannerActive = new Swiper(".banner-active", {
                speed:1500,
                loop: true,
                slidesPerView: 1,
                effect:'fade',
                autoplay: {
                    delay: 3000,         
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,  
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
            });
        }
       
        /* ================================
        Service Slider Js Start
        ================================ */

        if($('.service-slide-4').length > 0) {
            const serviceSlide4 = new Swiper(".service-slide-4", {
                spaceBetween: 30,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1599: {
                        slidesPerView: 7,
                    },
                    1399: {
                        slidesPerView: 6.7,
                    },
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 2.5,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1.4,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.service-slide-5').length > 0) {
            const serviceSlide5 = new Swiper(".service-slide-5", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                 navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2.5,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        /* ================================
        Gallery Slider Js Start
        ================================ */

        if($('.gallery-slide').length > 0) {
            const gallerySlide = new Swiper(".gallery-slide", {
                spaceBetween: 30,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 7,
                    },
                     1199: {
                        slidesPerView: 6,
                    },
                    991: {
                        slidesPerView: 5.3,
                    },
                    991: {
                        slidesPerView: 4.3,
                    },
                    767: {
                        slidesPerView: 3.2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 1.2,
                    },
                },
            });
        }

        if($('.gallery-slide-3').length > 0) {
            const gallerySlide3 = new Swiper(".gallery-slide-3", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 2.9,
                    },
                    767: {
                        slidesPerView: 2.1,
                    },
                    575: {
                        slidesPerView: 1.6,
                    },
                    400: {
                        slidesPerView: 1.2,
                    },
                },
            });
        }

        /* ================================
        Category Slider Js Start
        ================================ */

        if($('.catagory-slide-4').length > 0) {
            const catagorySlide4 = new Swiper(".catagory-slide-4", {
                spaceBetween: 30,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 7,
                    },
                    991: {
                        slidesPerView: 6,
                    },
                    767: {
                        slidesPerView: 5,
                    },
                    575: {
                        slidesPerView: 4,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                },
            });
        }

         /* ================================
        Brand Slider Js Start
        ================================ */

        if($('.brand-slide').length > 0) {
            const brandSlide = new Swiper(".brand-slide", {
                spaceBetween: 30,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 7,
                    },
                    991: {
                        slidesPerView: 6,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                    0: {
                        slidesPerView: 1.8,
                    },
                },
            });
        }

          if($('.brand-slide3').length > 0) {
            const brandSlide3 = new Swiper(".brand-slide3", {
                spaceBetween: 30,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1699: {
                        slidesPerView: 7,
                    },
                      1399: {
                        slidesPerView: 6,
                    },
                    1199: {
                        slidesPerView: 6,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                    767: {
                        slidesPerView: 5,
                    },
                    575: {
                        slidesPerView: 4,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

         /* ================================
        About Slider Js Start
        ================================ */

        if($('.about-slide-5').length > 0) {
            const aboutSlide5 = new Swiper(".about-slide-5", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1.5,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        /* ================================
        Testimonial Slider Js Start
        ================================ */

        if($('.testimonial-slide').length > 0) {
            const testimonialSlide = new Swiper(".testimonial-slide", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
            });
        }

        if($('.testimonial-slide-2').length > 0) {
            const testimonialSlide2 = new Swiper(".testimonial-slide-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1.9,
                    },
                    575: {
                        slidesPerView: 1.2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-slide-3').length > 0) {
            const testimonialSlide3 = new Swiper(".testimonial-slide-3", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3.4,
                    },
                    991: {
                        slidesPerView: 2.5,
                    },
                    767: {
                        slidesPerView: 1.8,
                    },
                    575: {
                        slidesPerView: 1.5,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($('.testimonial-slider-content').length) {
            var slider = new Swiper ('.testimonial-slider-content', {
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: true,
                centeredSlides: true,
                speed: 1300,
                loop: true,
                loopedSlides: 6,
                navigation: {
                    nextEl: ".array-next",
                    prevEl: ".array-prev",
                },
            });
            var thumbs = new Swiper ('.testimonial-thumbs', {
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                speed: 1300,
                slideToClickedSlide: true,
            });
            slider.controller.control = thumbs;
            thumbs.controller.control = slider;
        }

        /* ================================
        Project Slider Js Start
        ================================ */

        if($('.project-slide-2').length > 0) {
            const projectSlide2 = new Swiper(".project-slide-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                  pagination: {
                    el: ".dot2",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                     1199: {
                        slidesPerView: 3.2,
                    },
                    991: {
                        slidesPerView: 2.8,
                    },
                    767: {
                        slidesPerView: 2.1,
                    },
                    575: {
                        slidesPerView: 1.4,
                    },
                    400: {
                        slidesPerView: 1.2,
                    },
                },
            });
        }

        if($('.project-slide-5').length > 0) {
            const projectSlide5 = new Swiper(".project-slide-5", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                  pagination: {
                    el: ".dot1",
                    clickable: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3.1,
                    },
                    767: {
                        slidesPerView: 2.3,
                    },
                    575: {
                        slidesPerView: 1.5,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        /* ================================
        Team Slider Js Start
        ================================ */

        if($('.team-slide').length > 0) {
            const teamSlider = new Swiper(".team-slide", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                 navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 3,
                    },
                     1199: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1.6,
                    },
                    575: {
                        slidesPerView: 1.5,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

         /* ================================
        Shop Slider Js Start
        ================================ */

        if($('.shop-slide-2').length > 0) {
            const shopSlide2 = new Swiper(".shop-slide-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                 navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 3,
                    },
                    1199: {
                        slidesPerView: 2.2,
                    },
                    991: {
                        slidesPerView: 1.8,
                    },
                    767: {
                        slidesPerView: 1.5,
                    },
                    575: {
                        slidesPerView: 1.3,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }
        
        if($('.shop-slide-3').length > 0) {
            const shopSlide3 = new Swiper(".shop-slide-3", {
                spaceBetween: 30,
                speed: 1500,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                 navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1.7,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }
      

        /* ================================
        Custom Accordion Js Start
        ================================ */

        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {
                var outerBox = $(this).closest('.accordion-box');
                var target = $(this).closest('.accordion');
                var accBtn = $(this);
                var accContent = accBtn.next('.acc-content');

                if (target.hasClass('active-block')) {
                    // Already open, so close it
                    accBtn.removeClass('active');
                    target.removeClass('active-block');
                    accContent.slideUp(300);
                } else {
                    // Close all others
                    outerBox.find('.accordion').removeClass('active-block');
                    outerBox.find('.acc-btn').removeClass('active');
                    outerBox.find('.acc-content').slideUp(300);

                    // Open clicked one
                    accBtn.addClass('active');
                    target.addClass('active-block');
                    accContent.slideDown(300);
                }
            });
        }

        /* ================================
        Countdown Js Start
        ================================ */

        let targetDate = new Date("2026-5-29 00:00:00").getTime();
        const countdownInterval = setInterval(function () {
            let currentDate = new Date().getTime();
            let remainingTime = targetDate - currentDate;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                // Display a message or perform any action when the countdown timer reaches zero
                $("#countdown-container").text("Countdown has ended!");
            } else {
                let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                let hours = Math.floor(
                    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                let minutes = Math.floor(
                    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                );
                let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                // Pad single-digit values with leading zeros
                $("#day").text(days.toString().padStart(2, "0"));
                $("#hour").text(hours.toString().padStart(2, "0"));
                $("#min").text(minutes.toString().padStart(2, "0"));
                $("#sec").text(seconds.toString().padStart(2, "0"));
            }
        }, 1000);

        /* ================================
        Quantity Increment/Decrement Js Start
        ================================ */

        const quantityButtons = document.querySelectorAll(".quantityIncrement, .quantityDecrement");
        if (quantityButtons.length) {
            quantityButtons.forEach((button) => {
                button.addEventListener("click", function () {
                    const input = button.parentElement.querySelector("input");
                    let value = parseInt(input.value, 10) || 0;

                    if (button.classList.contains("quantityIncrement")) {
                        input.value = value + 1;
                    } else if (button.classList.contains("quantityDecrement") && value > 1) {
                        input.value = value - 1;
                    }
                });
            });
        }
    
    
        /* ================================
        Payment Method Update Js Start
        ================================ */

        function updatePaymentMethod() {
            let paymentMethod = $("input[name='pay-method']:checked").val();
            $(".payment").html(paymentMethod);
        }

        // Initial load
        updatePaymentMethod();

        // On click of radio option
        $(".checkout-radio-single input[name='pay-method']").on("change", function () {
            updatePaymentMethod();
        });

     /* ================================
        Additional Quantity Controls Js Start
        ================================ */

        const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
        const btnminus = document.querySelectorAll('.qtyminus');
        const btnplus = document.querySelectorAll('.qtyplus');

        if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

            inputs.forEach(function(input, index) {
                const min = Number(input.getAttribute('min'));
                const max = Number(input.getAttribute('max'));
                const step = Number(input.getAttribute('step'));

                function qtyminus(e) {
                    const current = Number(input.value);
                    const newval = (current - step);
                    if (newval < min) {
                        newval = min;
                    } else if (newval > max) {
                        newval = max;
                    }
                    input.value = Number(newval);
                    e.preventDefault();
                }

                function qtyplus(e) {
                    const current = Number(input.value);
                    const newval = (current + step);
                    if (newval > max) newval = max;
                    input.value = Number(newval);
                    e.preventDefault();
                }

                btnminus[index].addEventListener('click', qtyminus);
                btnplus[index].addEventListener('click', qtyplus);
            });
        }


        /* ================================
         Search Popup Toggle Js Start
      ================================ */
  
      if ($(".search-toggler").length) {
          $(".search-toggler").on("click", function(e) {
              e.preventDefault();
              $(".search-popup").toggleClass("active");
              $("body").toggleClass("locked");
          });
      }

      /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
      }

    /* ================================
       Back To Top Button Js Start
    ================================ */
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 20) {
			$('#back-top').addClass('show');
		} else {
			$('#back-top').removeClass('show');
		}
	});

	// Smooth scroll to top on click
	$(document).on('click', '#back-top', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
	});
		

		// Smooth scroll to top on click
		$(document).on('click', '#back-top', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 800);
		});
      

    /* ================================
       Text Anim Js Start
    ================================ */

    if ($(".text-anim").length) {
        let staggerAmount = 0.03,
            translateXValue = 20,
            delayValue = 0.1,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll(".text-anim");

        animatedTextElements.forEach(element => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });

            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: () => {
                    gsap.from(animationSplitText.chars, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        ease: easeType,
                    });
                },
            });
        });
    }

        
    // circle-progress
        $(".circle-bar").loading();

    }); // End Document Ready Function

     /* ================================
        Price Range Slider Js Start
    ================================ */

    document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");
    
        // Exit early if essential elements are missing
        if (!minSlider || !maxSlider || !amount) return;
    
        function updateAmount() {
            let minValue = parseInt(minSlider.value, 10);
            let maxValue = parseInt(maxSlider.value, 10);
    
            // Swap values if min is greater than max
            if (minValue > maxValue) {
                [minValue, maxValue] = [maxValue, minValue];
                minSlider.value = minValue;
                maxSlider.value = maxValue;
            }
    
            // Update amount input
            amount.value = `$${minValue} - $${maxValue}`;
    
            // Calculate percentages for gradient
            const minPercent = ((minValue - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
            const maxPercent = ((maxValue - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;
    
            const trackStyle = `linear-gradient(to right, #063232 ${minPercent}%, #5B8C51 ${minPercent}%, #5B8C51 ${maxPercent}%, #063232 ${maxPercent}%)`;
    
            minSlider.style.background = trackStyle;
            maxSlider.style.background = trackStyle;
        }
    
        // Initialize on page load
        updateAmount();
    
        // Add event listeners
        minSlider.addEventListener("input", updateAmount);
        maxSlider.addEventListener("input", updateAmount);
    });

    /* ================================
       Preloader Js Start
    ================================ */
    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();
    
     /* ================================
        Circle Progressbar Slider Js Start
        ================================ */

    $.fn.loading = function() {
        const DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000
        };

        $(this).each(function() {
            const $target = $(this);

            const opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);

            const $rotate = $target.find('.rotate');
            setTimeout(function() {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            }, 1);

            if (opts.percent > 50) {
                let animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                let animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    }

    
})(jQuery); // End jQuery

