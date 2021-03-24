
// onclick="deleteRow(this.parentNode.parentNode.rowIndex)"
// onclick="document.getElementById('myTable').deleteRow(0)">


$(function (){
    $('#tbl tbody').on('click', '#deletebtn', function (){
        const bookingId = $(this).children()
        console.log(bookingId)

    $.ajax({
        dataType: 'json',
        contentType: 'application/json',
        url: "http://54.234.57.19:8085/booking/" + bookingId,
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
    deleteRow();
    async function deleteRow (){
        const url ="http://54.234.57.19:8085/booking";
        const response = await fetch(url);
        const bookings = await response.json();
        // console.log(bookings);
        const container= document.getElementById("tbl");
        console.log(container);
        bookings.forEach(booking => {
            const bookingId = booking.bookingId;
            const bookingDate = booking.bookingDate;
            const bookingTime = booking.bookingTime;
            const participantCount = booking.participantCount;
            const actName = booking.actId["actName"];


            const row = container.insertRow();
            const id = row.insertCell(0);
            const date = row.insertCell(1);
            const time = row.insertCell(2);
            const participants = row.insertCell(3);
            const activityName = row.insertCell(4);
            const description = row.insertCell(5);
            const instructor = row.insertCell(6);
            const button = row.insertCell(7);

            id.innerHTML = bookingId;
            date.innerHTML = bookingDate;
            time.innerHTML = bookingTime;
            participants.innerHTML = participantCount
            activityName.innerHTML = actName;
            description.innerHTML = actDescription;
            instructor.innerHTML = employeeId;
            button.innerHTML = "Delete";
            const deleteButton = document.createElement("button");
            deleteButton.onclick = function (){
                deleteBooking(bookingId);
            }
            button.appendChild(deleteButton);
        })
    }

    function deleteBooking(bookingId2){
        const url = `http://54.234.57.19:8085/booking/${bookingId2}`
        const deleteObject = {
            method:"DELETE"
        }
        fetch(url, deleteObject).then(x => console.log(x));
        location.reload();
    }
})
