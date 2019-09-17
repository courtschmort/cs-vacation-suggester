$(document).ready(function() {

  $(".type").click(function() {
    let type = $("input:radio[name=type]:checked").val();
    if (type === "one-way") {
        $("#return-date").hide();
      } else {
        $("#return-date").show();
      }
  });

  $("form").submit(function(event) {
    let firstNameInput = $("input#first-name").val();
    let lastNameInput = $("input#last-name").val();
    $(".first-name").text(firstNameInput);
    $(".last-name").text(lastNameInput);
    


    $("#results").show();
    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

    event.preventDefault();
  });

});
