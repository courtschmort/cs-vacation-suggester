$(document).ready(function() {
  $("form").submit(function(event) {
    $("#results").show();

    event.preventDefault();
  });
});
