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

    if (climateInput === "tropical" && activityInput === "explore") {
      $("#brazil").show();
      $("#mexico").hide();
      $("#spain").hide();
      $("#canada").hide();
      $("#antarctic-peninsula").hide();
      $("#greenland").hide();
    } else if (climateInput === "tropical" && activityInput === "relax") {
      $("#brazil").hide();
      $("#mexico").show();
      $("#spain").hide();
      $("#canada").hide();
      $("#antarctic-peninsula").hide();
      $("#greenland").hide();
    } else if (climateInput === "temperate" && activityInput === "explore") {
      $("#brazil").hide();
      $("#mexico").hide();
      $("#spain").show();
      $("#canada").hide();
      $("#antarctic-peninsula").hide();
      $("#greenland").hide();
    } else if (climateInput === "temperate" && activityInput === "relax") {
      $("#brazil").hide();
      $("#mexico").hide();
      $("#spain").hide();
      $("#canada").show();
      $("#antarctic-peninsula").hide();
      $("#greenland").hide();
    } else if (climateInput === "polar" && activityInput === "explore") {
      $("#brazil").hide();
      $("#mexico").hide();
      $("#spain").hide();
      $("#canada").hide();
      $("#antarctic-peninsula").show();
      $("#greenland").hide();
    } else if (climateInput === "polar" && activityInput === "relax") {
      $("#brazil").hide();
      $("#mexico").hide();
      $("#spain").hide();
      $("#canada").hide();
      $("#antarctic-peninsula").hide();
      $("#greenland").show();
    }

    $("#results").show();

    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

    event.preventDefault();
  });

});
