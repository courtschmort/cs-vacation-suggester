$(document).ready(function() {

  $(".type").click(function() {
    let type = $("input:radio[name=type]:checked").val();
    if (type === "one-way") {
      $("#return-date").hide();
    } else {
      $("#return-date").show();
    }
  });

  $(".climate").change(function() {
    let climate = $("#climate").val();
    if (climate === "polar") {
      $(".activity").hide();
    } else {
      $(".activity").show();
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
      $("#central-america").show();
      $("#caribbean").hide();
      $("#europe").hide();
      $("#north-america").hide();
      $("#antarctica").hide();
    } else if (climateInput === "tropical" && activityInput === "relax") {
      $("#central-america").hide();
      $("#caribbean").show();
      $("#europe").hide();
      $("#north-america").hide();
      $("#antarctica").hide();
    } else if (climateInput === "temperate" && activityInput === "explore") {
      $("#central-america").hide();
      $("#caribbean").hide();
      $("#europe").show();
      $("#north-america").hide();
      $("#antarctica").hide();
    } else if (climateInput === "temperate" && activityInput === "relax") {
      $("#central-america").hide();
      $("#caribbean").hide();
      $("#europe").hide();
      $("#north-america").show();
      $("#antarctica").hide();
    } else if (climateInput === "polar") {
      $("#central-america").hide();
      $("#caribbean").hide();
      $("#europe").hide();
      $("#north-america").hide();
      $("#antarctica").show();
    }

    $("#results").show();

    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

    event.preventDefault();
  });

});
