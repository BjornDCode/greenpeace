// Global variables
var body = document.querySelector('body');

var back = (function() {
    var backButton = body.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        window.history.back();
    });
})();
