window.onload = function () {


    //var stopAnimation;
    ////voglio che la funzione sia stoppata quando torna il nuovo array
    ////quindi no click 
    $('#button').click(function () {
        id = setInterval(function () { AnimateRotate(360, 1000) }
        , 5000)




//secondaprova

        //prova

        //clearInterval(id)
    })

}


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










//    function stopRotate(){
//        clearInterval(stopAnimation, 5000);
//    };
//    clearInterval(stopAnimation)
//}





//window.onload = function (weekList) {
//    var returnList = Math.floor(Math.random() * weekList.length);
//    do {
//        weekList[returnList];
//        returnList++;
//    }
//    while (weekList.length == 5 && index!=returnList);
//}
//var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
//var index = returnList;





//////To have a rondom menu list
//var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
//window.onload = function (weekList) {
//    var returnList=[Math.floor(Math.random() * weekList.length)];
    //do {
    //    weekList[returnList];
    //    returnList++;
    //}
    //while (weekList.length == 5 && index != retunList);
//}
//var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];


////////$("#workDay li").eq(Math.floor(Math.random() * weekList.length))

//////var press=document.getElementById('button').addEventListener('click', randomItem () {
//////    do {

//////}
//////while ()
//////});

////////To take a single random value
//window.onload = function () {
//    $randomList = $("#workDay li").eq(Math.floor(Math.random() * weekList.length));
//    do{
//        weekList[randomList];
//        randomList++;
//    }
//    while(weekList.length == 5 && index != retunList);
//};
//var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
//var index = randomList;


//window.onload = function () {
//    let weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
//    let randomList = Math.floor(Math.random() * weekList.length);
//    do{
//        weekList[randomList];
//        randomList++;
//    }
//    while(weekList.length == 5 && index != retunList);
//};
//var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
//var index = randomList;


//////To limit the checkbox to 2 selections
    
//window.onload=function(){
//    $('input.dinner').on('change', function (evt) {
//        if ($(this).siblings(':checked').length >= limit) {
//            this.checked = false;
//        }
//    });
//};
//    var limit = 2;








    //////////To ruotate the image
    //function myFunction(angle, duration) {
    //    // caching the object for performance reasons
    //    //var $elem = $('#button');

    //    // we use a pseudo object for the animation
    //    // (starts from `0` to `angle`), you can name it as you want
    //    $({ deg: 0 }).animate({ deg: angle }, {
    //        duration: duration,
    //        step: function (now) {
    //            // in the step-callback (that is fired each step of the animation),
    //            // you can use the `now` paramter which contains the current
    //            // animation-position (`0` up to `angle`)
    //            //$elem.css({
    //            //    transform: 'rotate(' + now + 'deg)'
    //            //});
    //        }
    //    });
    //}



//var weekList = ["Salsicce e lenticchie", "Pesce e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Pollo e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Polpette e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Frittata e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Straccetti e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Bistecca e fagiolini/peperoni/patare/funghi/verza/cappuccio", "Involtini di verza e fagiolini/peperoni/patare/funghi/verza/cappuccio"];
//document.getElementById("showMenu").innerHTML = weekList;

//function button() {
//    weekList.sort(function (a, b) { 
//        return 0.5 - Math.random();
//    });
//    document.getElementById("showMenu").innerHTML = weekList;
//    do {

//        ++
//    }
//    while(weekList == 5);
//}
