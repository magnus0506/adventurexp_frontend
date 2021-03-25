// deleteRow();
//
// async function deleteRow() {
//     const url = "http://54.234.57.19:8085/booking";
//     const response = await fetch(url);
//     const bookings = await response.json();
//     // console.log(bookings);
//     const container = document.getElementById("tbl");
//     console.log(container);
//     bookings.forEach(booking => {
//         const bookingId = booking.bookingId;
//         const bookingDate = booking.bookingDate;
//         const bookingTime = booking.bookingTime;
//         const participantCount = booking.participantCount;
//         const actName = booking.actId["actName"];
//
//
//         const row = container.insertRow();
//         const id = row.insertCell(0);
//         const date = row.insertCell(1);
//         const time = row.insertCell(2);
//         const participants = row.insertCell(3);
//         const activityName = row.insertCell(4);
//         const description = row.insertCell(5);
//         const instructor = row.insertCell(6);
//         const button = row.insertCell(7);
//
//         id.innerHTML = bookingId;
//         date.innerHTML = bookingDate;
//         time.innerHTML = bookingTime;
//         participants.innerHTML = participantCount
//         activityName.innerHTML = actName;
//         description.innerHTML = actDescription;
//         instructor.innerHTML = employeeId;
//         button.innerHTML = "Delete";
//         const deleteButton = document.createElement("button");
//         deleteButton.onclick = function () {
//             deleteBooking(bookingId);
//         }
//         button.appendChild(deleteButton);
//     })
// }
//
// function deleteBooking(bookingId2) {
//     const url = `http://54.234.57.19:8085/booking/${bookingId2}`
//     const deleteObject = {
//         method: "DELETE"
//     }
//     fetch(url, deleteObject).then(x => console.log(x));
//     location.reload();
// }
// })
$

$(document).on('click', ".deletebtn", function (e) {
    e.preventDefault();
    $(this).closest('tr').remove()
    const id = $(this).data('id');
    console.log(id)
    $.ajax({
        url: "http://localhost:8085/booking/" + id,
        type: 'delete',
        success: function (data) {
            console.log(data)
        },
        error: function (data) {
            console.log("error: " + data)
        }
    })
});

$(document).on('click', ".editbtn", function (e) {
    e.preventDefault();
    const id = $(this).data('id');
    console.log(id)
    window.location.replace("http://localhost:8090/booking/edit/" + id);
});

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
                    "</td><td>" + val["activity"]["actName"] +
                    "</td><td>" + val["activity"]["actDescription"] +
                    "</td><td>" + val["activity"]["employee"] +
                    "</td><td><button type='button' class='deletebtn' data-id='" + val["bookingId"] + "'>Delete</button></td>" +
                    "</td><td><button type='button' class='editbtn' data-id='" + val["bookingId"] + "'>Edit</button></td>";
            });
            tableRows += "</tr>";
            $('#tbl tbody').html(tableRows)
        }
    })
})

