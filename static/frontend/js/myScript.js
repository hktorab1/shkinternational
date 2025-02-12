$(document).ready(function () {
    // Show details popup
    $(".car-btn-details").on("click", function () {
        const target = $(this).data("target");
        $(target).removeClass("d-none");
    });

    // Close popup
    $(".close-popup").on("click", function () {
        $(this).closest(".details-popup").addClass("d-none");
    });

    // When the modal is opened, load the YouTube video URL
    $('#videoModal').on('show.bs.modal', function (event) {
        debugger
        var button = $(event.relatedTarget); // Button that triggered the modal
        var videoSrc = button.data('video'); // Extract YouTube video URL from data-* attributes

        // Set the iframe source URL to the YouTube embed URL with autoplay
        var modal = $(this);
        modal.find('#videoFrame').attr('src', videoSrc + "?autoplay=1");
    });

    // When the modal is hidden, clear the iframe src
    $('#videoModal').on('hidden.bs.modal', function () {
        $(this).find('#videoFrame').attr('src', '');
    });
});



$(document).ready(function () {
    const topbar = $('.topbar');
    let previousScroll = 0;
  
    $(window).on('scroll', function () {
      const currentScroll = $(window).scrollTop();
  
      // If user scrolls more than 200px, hide topbar when scrolling down, show when scrolling up
      if (currentScroll > 400) {
        if (currentScroll > previousScroll) {
            if(currentScroll>400 && currentScroll<799){
                topbar.removeClass('sticky').css('top', '-100px'); // Hide


            }
            if(currentScroll>800 ){
                topbar.addClass('sticky').css('top', '0'); // Show


            }

          // Scrolling down

        } else {
          // Scrolling up
          topbar.removeClass('sticky').css('top', '-100px'); // Hide

        }
      }
       
      else {
        // Reset to default (visible)
        topbar.addClass('sticky').css('top', '0');
      }
  
      previousScroll = currentScroll; // Update scroll position
    });
  });
  
  