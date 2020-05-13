$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
        "dataType": "json",
		"data": {
        	"first": first,
            "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    console.log(data);
    let rawHtml = "";
    for(let row of data){
        rawHtml += `<li>${row.first} ${row.last}</li>`;
    }
    $("#guestList").html(rawHtml);
}