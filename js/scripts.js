$(document).ready(function() {
  $("form").submit(function(event) {
    $("#results").show();
    var elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

    event.preventDefault();
  });
});
