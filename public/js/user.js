$("#user-submit").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    email: $("#email").val().trim(),
    phone: $("#phone").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };
  //enter info
  $.post("/api/new", newUser)
    .then(function() {
      let row = $("<div>");
      row.addClass("contact");
      row.append("<p>" + newUser.firstName + " " + newUser.lastName + "  |  " + newUser.email + "  |  " + newUser.phone +" </p>");
      row.append("<span class='timeInfo'>entered info at " + moment(newUser.created_at).format("h:mma on dddd") + "</span>");

      $("#user-area").prepend(row);
    });
  //reset
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#phone").val("");
    row.append("<p> Thank you for your interest in Lost Planet. </p>");
  });

  //load to dispaly
  $.get("/api/all", function(data) {
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        var row = $("<div>");
        row.addClass("contact");
        row.append("<p>" + data[i].firstName +  " "  + data[i].lastName  +  "  |  "  +  data[i].email +  "  |  "  + data[i].phone + "</p>");
        row.append("<span class='timeInfo'>Enter info at " + moment(data[i].created_at).format("h:mma on dddd") + "</span>");

        $("#user-area").prepend(row);
      }
    }
  });
