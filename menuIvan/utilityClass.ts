class utilityClass {
    public static AnimateRotate(angle: number, duration: number) {
        ////////caching the object for performance reasons
        let $elem: JQuery = $('#button');

        //we use a pseudo object for the animation
        //(starts from `0` to `angle`), you can name it as you want
        $({ deg: 0 }).animate({ deg: angle }, {
            duration: duration,
            step: function (now) {
                //in the step-callback (that is fired each step of the animation),
                ///you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                $elem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    }

    public static randomMenu() {
        let lengthOptions = $("#workDay li").length;
        let i: number = 0;
        do {
            let $randomList = $("#workDay li").eq(Math.floor(Math.random() * lengthOptions));
            $("#result td").eq(i).text($randomList.text());
            i++;
        }
        while (i < 5);
    }

    public static validationCheckbox() {
        $('#lunch input, #dinner input').on('change', function (evt) {
            if ($(this).siblings(':checked').length >= 2) {
                this.checked = false;
                alert("Sorry, you can check only two meals"); //aggiungere messaggio per l'utente
            }
        });
    };

    public static insertLunch() {
        $("#result td").eq(5).text($('#lunch input:checked').eq(0).val() + " and " + $('#dinner input:checked').eq(0).val());
        $("#result td").eq(6).text($('#lunch input:checked').eq(1).val() + " and " + $('#dinner input:checked').eq(1).val());
    }

    public static checkValidation() : boolean {
        if ($('#lunch input, #dinner input').siblings(':checked').length != 4) {
            alert("Select two meals");
            return false;
        } else
            return true;
    }

    public static deleteMenu() {
        $('#newChoise').click(function () {
            $("#result td").empty();
            $('#lunch input, #dinner input').prop('checked', false);
        });
    };
}