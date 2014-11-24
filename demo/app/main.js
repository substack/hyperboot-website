var hboot = require('hyperboot/rpc');

var lightning = document.querySelector('#click');
lightning.addEventListener('click', function (ev) {
    var times = 0;
    var iv = setInterval(function () {
        document.body.classList.toggle('lightning');
        if (++ times === 12) clearInterval(iv);
    }, 40);
});

var config = document.querySelector('#config');
config.addEventListener('click', function (ev) {
    hboot.toggle();
});
