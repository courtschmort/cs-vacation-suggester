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

    let climateInput = $("#climate").val();
    let activityInput = $("input:radio[name=activity]:checked").val();

    $("#results").show();
    if (climateInput === "tropical" && activityInput === "explore") {
      $("#peru").show();
      $("#bahamas").hide();
    } else {
      $("#results").hide();
    }

    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

    event.preventDefault();
  });

});
