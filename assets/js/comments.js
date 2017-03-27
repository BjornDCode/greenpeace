// Global variables
var body = document.querySelector('body');

var fbAuth = (function() {
    var button = body.querySelector('.fb-auth');
    var form = body.querySelector('.comment-form');
    button.addEventListener('click', function() {
        button.classList.remove('visible');
        form.classList.add('visible');
    })

})();
