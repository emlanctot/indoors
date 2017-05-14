$(document).ready(function () {
    $('#base-layer').mousemove(function (e) {
        parallax(e, this, 1);
        parallax(e, document.getElementById('layer-two'), 2);
        parallax(e, document.getElementById('layer-three'), 3);
        parallax(e, document.getElementById('layer-four'), 4);
    });
});

function parallax(e, target, layer) {
    var layer_coeff = 40 / layer;
    var x = ($(window).width() - target.offsetWidth) / 3 - (e.pageX - ($(window).width() / 3)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 3 - (e.pageY - ($(window).height() / 3)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};
