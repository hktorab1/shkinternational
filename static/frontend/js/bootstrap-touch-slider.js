/*Bootstrap Carousel Touch Slider.
 http://bootstrapthemes.co
 
 Credits: Bootstrap, jQuery, TouchSwipe, Animate.css, FontAwesome
 
 */

( function ( $ ) {
    "use strict";

    $.fn.bsTouchSlider = function ( options ) {
        var carousel = $( ".carousel" );
        return this.each( function ( ) {

            function doAnimations( elems ) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elems.each( function ( ) {
                    var $this = $( this ),
                        $animationType = $this.data( 'animation' );
                    $this.addClass( $animationType ).one( animEndEv, function ( ) {
                        $this.removeClass( $animationType );
                    } );
                } );
            }

            //Variables on page load
            var $firstAnimatingElems = carousel.find( '.item:first' ).find( "[data-animation ^= 'animated']" );
            //Initialize carousel
            carousel.carousel( );
            //Animate captions in first slide on page load
            doAnimations( $firstAnimatingElems );
            //Other slides to be animated on carousel slide event
            carousel.on( 'slide.bs.carousel', function ( e ) {
                var $animatingElems = $( e.relatedTarget ).find( "[data-animation ^= 'animated']" );
                doAnimations( $animatingElems );
            } );
            //swipe initial 
            $( ".carousel .carousel-inner" ).swipe( {
                swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
                    this.parent( ).carousel( 'next' );
                },
                swipeRight: function ( ) {
                    this.parent( ).carousel( 'prev' );
                },
                threshold: 0
            } );

        } );
    };


} )( jQuery );

// Data for dropdowns
const carData = {
    toyota: {
        alion: [2021, 2022],
        aqua: [2021, 2022],
        auris: [2019, 2020],
    },
    mitsubishi: {
        outlander: [2019, 2020, 2021, 2022, 2023],
        pajero: [2019, 2020, 2021, 2022, 2023],
    },
};

// Elements
const brandDropdown = document.getElementById("brand");
const modelDropdown = document.getElementById("model");
const yearDropdown = document.getElementById("year");

// Populate Model Dropdown
brandDropdown.addEventListener("change", function () {
    const selectedBrand = this.value;
    modelDropdown.innerHTML = '<option value="" selected disabled>Select Model</option>'; // Reset models
    yearDropdown.innerHTML = '<option value="" selected disabled>Select Year</option>';  // Reset years
    yearDropdown.disabled = true;

    if (selectedBrand) {
        const models = Object.keys(carData[selectedBrand]);
        models.forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
            modelDropdown.appendChild(option);
        });
        modelDropdown.disabled = false;
    } else {
        modelDropdown.disabled = true;
    }
});

// Populate Year Dropdown
modelDropdown.addEventListener("change", function () {
    const selectedBrand = brandDropdown.value;
    const selectedModel = this.value;
    yearDropdown.innerHTML = '<option value="" selected disabled>Select Year</option>'; // Reset years

    if (selectedModel) {
        const years = carData[selectedBrand][selectedModel];
        years.forEach((year) => {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            yearDropdown.appendChild(option);
        });
        yearDropdown.disabled = false;
    } else {
        yearDropdown.disabled = true;
    }
});

