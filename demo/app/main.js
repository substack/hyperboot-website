document.querySelector('#click').addEventListener('click', function (ev) {
    var times = 0;
    var iv = setInterval(function () {
        document.body.classList.toggle('lightning');
        if (++ times === 6) clearInterval(iv);
    }, 200);
});
