// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

let bookingString;

// $ (dollar) --> genvej til jQuery: jQuery(document) <--> $(document)
$(document).ready(function () {
    //ajax er en function der sender en XMLHttpRequest til valgte url
    $.ajax({
        // url: "http://localhost:8085/activities",
        url: "http://54.234.57.19:8085/activities",
        //hvis requesten går igennem kører nedenstående function, ellers giver siden en status code
        success: function (result) {
            console.log(result)
            let options = "";
            $.each(result, function (key, val) {
                options += "<option>" + val["actName"]
            });
            bookingString = $("#dropD");
            $(bookingString).html(options)
        }
    });
})

$(function () {
    //$('#add-booking') svarer til at oprette en ny konstant og bruge en DOM function.
    // fx GetElemenById eller QuerySelector
    $('#add-booking').on('click', function () {
        let dataString = {
            bookingId: 0,
            bookingDate: $('#bookingDate').val(),
            bookingTime: $('#bookingTime').val(),
            participantCount: $('#participants').val(),
            activity: {
                actId: $("#dropD").get(0).selectedIndex
            }
        }

        function maxCheck(x) {
            if (x <= 8) {
                return x + 1;
            }
        }

        // maxcheck tjekker om værdien fra dataString er mindre eller lig med 8
        // og lægger 1 til så det svarer til activity ID's
        bookingString = maxCheck(dataString.activity.actId)

        console.log(dataString.activity.actId = bookingString);
        $.ajax({
            url: 'http://54.234.57.19:8085/newbooking',
            type: 'POST',
            dataType: 'json',
            //stringify formatere den JSON data der skal sendes til datatyper der passer til java objekterne
            data: JSON.stringify(dataString),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            success: function (data) {
                console.log(data);
            },
            error: function () {
                $('#err').html("Oops, something went wrong!")
            }
        })
    });
});
