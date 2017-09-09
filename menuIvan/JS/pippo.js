window.onload = function () {
    validationCheckbox();

    $('#button').click(function () {
        var idset = setInterval(function () { AnimateRotate(360, 1000) }, 500)
        randomMenu();
        insertLunch();


        setTimeout(function () { stopRotate(idset); },4000)
        
    })

};
//////////To ruotate the image
function AnimateRotate(angle, duration) {
    ////////caching the object for performance reasons
    var $elem = $('#button');

    //////////we use a pseudo object for the animation
    //////////(starts from `0` to `angle`), you can name it as you want
    $({ deg: 0 }).animate({ deg: angle }, {
        duration: duration,
        step: function (now) {
            /////////in the step-callback (that is fired each step of the animation),
            //////////you can use the `now` paramter which contains the current
            ////////// animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

function randomMenu() {
    var lengthOptions = $("#workDay li").length;
    var i = 0;
    do {
        var $randomList = $("#workDay li").eq(Math.floor(Math.random() * lengthOptions));
        i++;
        $("#result td").eq(i).text($randomList.text());
    }
    while (i < 5);
}

function stopRotate(id){
    clearInterval(id);
};
  
function validationCheckbox() {
    $('#lunch input, #dinner input').on('change', function (evt) {
                if ($(this).siblings(':checked').length >= 2) {
                    this.checked = false;
                    //aggiungere messaggio per l'utente
                }
            });
};

function insertLunch() {
    $("#result td").eq(5).text($('#lunch input:checked').eq(0).val());
    $("#result td").eq(6).text($('#lunch input:checked').eq(1).val());
}