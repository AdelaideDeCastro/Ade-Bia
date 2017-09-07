////To ruotate the image
//window.onload = function (angle) {
//    $elem = $('#button');
//    $({ button: 0 }).animate({ button: 360 }, {
//        duration: 2000,
//        step: function (now) {
//            $elem.css({
//                transform: 'rotate(' + now + 'button)'
//            });
//        }
//    });
//}

//window.onload = function (){
//    $("#button").rotate(360, 6000);

//}

//window.onload = function 90{
//$("#button").animate({rotate: 360}, 6000);
//};

//window.onload = function (){
//    $("#button").rotate({bind:{click: function(){
//        $(this).rotate({angle: 0, animateTo:180, duration: 6000 });
//        setTimeout(function(){$("#button").stopRotate()}, 1000);
//    }
//    }
//})
//}

 

window.onload = function (weekList) {
    var returnList = Math.floor(Math.random() * weekList.length);
    do {
        weekList[returnList];
        returnList++;
    }
    while (weekList.length == 5 && index!=returnList);
}
var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
var index = returnList;





////To have a rondom menu list
//var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
window.onload = function (weekList) {
    return weekList[Math.floor(Math.random() * weekList.length)];
    do{

    }
    while()
}
var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];


//////$("#workDay li").eq(Math.floor(Math.random() * weekList.length))

////var press=document.getElementById('button').addEventListener('click', randomItem () {
////    do {

////}
////while ()
////});

//////To take a single random value
window.onload = function () {
    $randomList = $("#workDay li").eq(Math.floor(Math.random() * weekList.length));
    do{
        weekList[randomList];
        randomList++;
    }
    while(weekList.length == 5 && index != retunList);
};
var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
var index = randomList;


window.onload = function () {
    let weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
    let randomList = Math.floor(Math.random() * weekList.length);
    do{
        weekList[randomList];
        randomList++;
    }
    while(weekList.length == 5 && index != retunList);
};
var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
var index = randomList;


////To limit the checkbox to 2 selections
//    var limit = 2;
//    $('input.dinner').on('change', function (evt) {
//        if ($(this).siblings(':checked').length >= limit) {
//            this.checked = false;
//        }
//    });
//};