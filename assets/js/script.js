// Global variables
var body = document.querySelector('body');


// Use slider on mobile
(function() {
    var sliderSection = body.querySelector('.slider-section');
    var output = sliderSection.querySelector('.output');
    var slider = sliderSection.querySelector('.slider');
    slider.addEventListener('change', updateDays);

    function updateDays(e) {
        var days = e.target.value;
        output.innerHTML = days + ' days';
        body.className = 'days' + days;
    }

})();
