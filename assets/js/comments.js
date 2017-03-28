// Global variables
var body = document.querySelector('body');

var fbAuth = (function() {
    var button = body.querySelector('.fb-auth');
    var form = body.querySelector('.comment-form');
    var input = body.querySelector('.username input');
    var usernames = ['lewisbs', 'adamborow'];
    var user = usernames[Math.floor(Math.random() * usernames.length)];
    console.log(user);

    button.addEventListener('click', function() {
        button.classList.remove('visible');
        form.classList.add('visible');

    })

})();
