// initialize needed variables
var bodyWidth  = $('body').width(),
    bodyHeight = $('body').height();

var videoWidth  = $('#video').width(),
    videoHeight = $('#video').height();

var minTimeLength = 500,
    maxTimeLength = 2000;

// begin positioning the video
$(document).ready(function() {
    positionVideo();
});

// reassign the body width and height variables when the browser window is resized
$(window).on("debouncedresize", function(e) {
    bodyWidth  = $('body').width();
    bodyHeight = $('body').height();
});

// misc functions
function positionVideo() {
    var left = Math.random() * (bodyWidth  - videoWidth),
        top  = Math.random() * (bodyHeight - videoHeight);

    var timeLength = Math.random() * (maxTimeLength - minTimeLength) + minTimeLength;

    $('#video').animate({ left: left, top: top }, timeLength, function() {
        positionVideo();
    });
}