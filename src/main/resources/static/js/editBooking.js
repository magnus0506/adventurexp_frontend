// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

let bookingString;

$(document).ready(function () {
    $.ajax({
        // url: "http://localhost:8085/activities",
        url: "http://54.234.57.19:8085/activities",
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

//tager sidens URL og splitter den ved hvert "/", tager 2. index som svarer til bookingId
let pathArr = window.location.pathname.split("/");
console.log(pathArr)
$(function () {
    $('#edit-booking').on('click', function () {
        let dataString = {
            bookingId: pathArr[2],
            bookingDate: $('#bookingDate').val(),
            bookingTime: $('#bookingTime').val(),
            participantCount: $('#participants').val(),
            activity: {
                //actId bliver hentet fra indexen af den valgte aktivitet
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
        console.log(dataString.bookingId)
        console.log(dataString.activity.actId = bookingString);
        $.ajax({
            type: 'PATCH',
            dataType: 'json',
            data: JSON.stringify(dataString),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            url: 'http://54.234.57.19:8085/booking/' + pathArr[2],
            // url: 'http://localhost:8085/booking/' + pathArr[2],

            //location.replace redirecter til URL i parameteret hvis ajax requesten går igennem
            // ellers viser den beskeden i error (linje 65)
            success: function (data) {
                // location.replace("http://localhost:8090/booking")
                location.replace("http://54.234.57.19:8090/booking")
                console.log(data);
            },
            error: function () {
                $('#err').html("Oops, something went wrong!")
            }
        })
    });
});
