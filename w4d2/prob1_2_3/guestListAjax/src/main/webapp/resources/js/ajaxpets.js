$(document).ready(function() {
   $("#puppies").on("click", updatePictures);
   $("#kitties").on("click", updatePictures);
 });

 function updatePictures(event) {
    var animal = "";
    if ($("#puppies")[0].checked) {
        animal = "puppy";
    } else {
        animal = "kitty";
    }
    $.ajax({
       url: "PetsServlet",
       type: "get",
       success: displayPictures,
       data: {"animal": animal}
    });
 }
 function displayPictures(data) {
    $("#pictures").html(data);
 }
 //absolute url for get -- http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php