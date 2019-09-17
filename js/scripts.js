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
    let firstNameInput = $("input#firstName").val();
    let lastNameInput = $("input#lastName").val();
    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    if(firstNameInput==="") {
      alert("Your first name is required.")
    }
    if(lastNameInput==="") {
      alert("Your last name is required.")
    }

    $("#results").show();
    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

    event.preventDefault();
  });
});
