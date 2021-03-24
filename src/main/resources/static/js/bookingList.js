
// onclick="deleteRow(this.parentNode.parentNode.rowIndex)"
// onclick="document.getElementById('myTable').deleteRow(0)">


$(function (){
    $('#tbl tbody').on('click', '#deletebtn', function (){
        const bookingId = $(this).children()
        console.log(bookingId)

    $.ajax({
        dataType: 'json',
        contentType: 'application/json',
        url: "http://localhost:8085/booking/" + bookingId,
        type: 'post',
        // data: "{Id : '" + bookingId + "'}",
    success: function (data){
            console.log(data)
        },
        error: function (data){
            console.log(data)
        }
    })
})


    $(function () {
        $.ajax({
            url: "http://localhost:8085/booking",
            // url: "http://54.234.57.19:8085/booking",
            success: function (result) {
                console.log(result)
                let tableRows = "";
                $.each(result, function (key, val) {
                    tableRows += "<tr>";
                    tableRows +=
                        "<td>" + val["bookingId"] +
                        "</td><td>" + val["bookingDate"] +
                        "</td><td>" + val["bookingTime"] +
                        "</td><td>" + val["participantCount"] +
                        // "</td><td>" + val["activity"]["actId"] +
                        "</td><td>" + val["activity"]["actName"] +
                        "</td><td>" + val["activity"]["actDescription"] +
                        "</td><td>" + val["activity"]["employee"] +
                        "</td><td><button type=button id='deletebtn' class=deletebtn title=Remove-row>X</button></td>";

                });
                tableRows += "</tr>";
                $('#tbl tbody').html(tableRows)
            }
        })
    })})