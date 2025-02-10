$(document).ready(function () {
    // Show details popup
    $(".btn-details").on("click", function () {
        const target = $(this).data("target");
        $(target).removeClass("d-none");
    });

    // Close popup
    $(".close-popup").on("click", function () {
        $(this).closest(".details-popup").addClass("d-none");
    });
});

// When the modal is opened, load the YouTube video URL
$('#videoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var videoSrc = button.data('video'); // Extract YouTube video URL from data-* attributes
    
    // Set the iframe source URL to the YouTube embed URL with autoplay
    var modal = $(this);
    modal.find('#videoFrame').attr('src', videoSrc + "?autoplay=1");
});

// When the modal is closed, stop the video by clearing the iframe source
$('#videoModal').on('hidden.bs.modal', function () {
    var modal = $(this);
    modal.find('#videoFrame').attr('src', '');
});
