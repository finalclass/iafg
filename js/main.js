AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {
    'use strict';

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });

    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // loader
    var loader = function() {
        setTimeout(function() {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    // Burger Menu
    var burgerMenu = function() {
        $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
            event.preventDefault();

            if ($('#ftco-nav').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    };
    burgerMenu();

    var onePageClick = function() {
        $(document).on('click', '#ftco-nav a[href^="#"]', function(event) {
            event.preventDefault();

            var href = $.attr(this, 'href');

            $('html, body').animate(
                {
                    scrollTop: $($.attr(this, 'href')).offset().top - 70
                },
                500,
                function() {
                    // window.location.hash = href;
                }
            );
        });
    };

    onePageClick();

    var carousel = function() {
        $('.home-slider').owlCarousel({
            merge:true,
            loop:true,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false,
            video: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            // autoplayHoverPause: true,
            onInitialized: function theThing(event){
                $('.active .owl-video-play-icon').trigger('click');
            },
            items: 1,
            navText: [
                "<span class='ion-md-arrow-back'></span>",
                "<span class='ion-chevron-right'></span>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    };
    carousel();

    $('nav .dropdown').hover(
        function() {
            var $this = $(this);
            //   timer;
            // clearTimeout(timer);
            $this.addClass('show');
            $this.find('> a').attr('aria-expanded', true);
            // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
            $this.find('.dropdown-menu').addClass('show');
        },
        function() {
            var $this = $(this);
            // timer;
            // timer = setTimeout(function(){
            $this.removeClass('show');
            $this.find('> a').attr('aria-expanded', false);
            // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
            $this.find('.dropdown-menu').removeClass('show');
            // }, 100);
        }
    );

    $('#dropdown04').on('show.bs.dropdown', function() {
        console.log('show');
    });

    // scroll
    var scrollWindow = function() {
        $(window).scroll(function() {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint(
            function(direction) {
                if (
                    direction === 'down' &&
                    !$(this.element).hasClass('ftco-animated')
                ) {
                    i++;

                    $(this.element).addClass('item-animate');
                    setTimeout(function() {
                        $('body .ftco-animate.item-animate').each(function(k) {
                            var el = $(this);
                            setTimeout(
                                function() {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    } else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    } else if (effect === 'fadeInRight') {
                                        el.addClass(
                                            'fadeInRight ftco-animated'
                                        );
                                    } else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                },
                                k * 50,
                                'easeInOutExpo'
                            );
                        });
                    }, 100);
                }
            },
            { offset: '95%' }
        );
    };
    contentWayPoint();

    // magnific popup
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });




    function newUpcommingEvents() {
        var $upcommingEventsContainer = $('.ucpomming-events-counter');
        var $eventName = $upcommingEventsContainer.find('.event-name');
        var $eventDays = $upcommingEventsContainer.find('.event-days');
        var $eventHours = $upcommingEventsContainer.find('.event-hours');
        var $eventMinutes = $upcommingEventsContainer.find('.event-minutes');
        var $eventSeconds = $upcommingEventsContainer.find('.event-seconds');

        var upcommingEvents = [
            {
                name: 'English service, August 17',
                date: moment.utc('2019-08-17 14:00')
            },
            {
                name: 'English service, September 21',
                date: moment.utc('2019-09-21 14:00')
            },
            {
                name: 'English service, October 19',
                date: moment.utc('2019-10-19 14:00')
            },
            {
                name: 'English service, November 16',
                date: moment.utc('2019-11-16 14:00')
            },
            {
                name: 'English service, December 21',
                date: moment.utc('2019-12-21 14:00')
            },
            {
                name: 'English service, January 18',
                date: moment.utc('2020-01-18 14:00')
            },
            {
                name: 'English service, February 15',
                date: moment.utc('2020-02-15 14:00')
            },
            {
                name: 'English service, March 21',
                date: moment.utc('2020-03-21 14:00')
            },
            {
                name: 'English service, April 18',
                date: moment.utc('2020-04-18 14:00')
            },
            {
                name: 'English service, May 16',
                date: moment.utc('2020-05-16 14:00')
            },
            {
                name: 'English service, June 20',
                date: moment.utc('2020-06-20 14:00')
            },
            {
                name: 'English service, July 18',
                date: moment.utc('2020-07-18 14:00')
            },
            {
                name: 'English service, August 15',
                date: moment.utc('2020-08-15 14:00')
            },
            {
                name: 'English service, September 19',
                date: moment.utc('2020-09-19 14:00')
            },
            {
                name: 'English service, October 17',
                date: moment.utc('2020-10-17 14:00')
            },
            {
                name: 'English service, November 21',
                date: moment.utc('2020-11-21 14:00')
            },
            {
                name: 'English service, December 19',
                date: moment.utc('2020-12-19 14:00')
            }
        ];

        function findLatestEvent(upcommingEvents) {
            var now = moment();
            return upcommingEvents
                .filter(function (ev) {
                    return ev.date.isAfter(now);
                })
                .sort(function (a, b) {
                    return a.date.valueOf() - b.date.valueOf();
                })[0];
        }

        setInterval(function () {
            var now = moment();
            
            var latestEvent = findLatestEvent(upcommingEvents);
            $('.next-event-date').text(latestEvent.date.format('DD MMMM YYYY'));
            var duration = moment.duration(latestEvent.date.diff(now));
            $eventName.text(latestEvent.name);
            $eventDays.text(Math.floor(duration.asDays()));
            $eventHours.text(duration.hours());
            $eventMinutes.text(duration.minutes());
            $eventSeconds.text(duration.seconds());
        }, 1000);
    }

    newUpcommingEvents();


})(jQuery);
