$(document).ready(function () {
    $.ajax({
        // url: "http://localhost:8085/activities",
        url: "http://54.234.57.19:8085/activities",
        success: function (result) {
            console.log(result);
            let tableContent = "";
            $.each(result, function (key, value) {
                tableContent += "<tr>";
                tableContent +=
                    "<td>" + value["actName"] +
                    "</td><td>" + value["actDescription"] +
                    "</td><td>" + value["employee"] + "</td>";
            });
            tableContent += "</tr>";
            $('#tbl tbody').html(tableContent)
        }
    });
});