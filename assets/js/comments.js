// Global variables
var body = document.querySelector('body');

var fbAuth = (function() {
    var button = body.querySelector('.fb-auth');
    var form = body.querySelector('.comment-form');
    var input = body.querySelector('.username input');
    var usernames = ['lewisbs', 'adamborow'];
    var user = usernames[Math.floor(Math.random() * usernames.length)];
    var url = window.location.href;
    var qs = '&user=' + user;

    button.addEventListener('click', function() {
        // window.location.href = url + qs;
        button.classList.remove('visible');
        form.classList.add('visible');
        input.value = user;

    })

})();
