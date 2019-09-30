$(document).ready(function() {
  var modal = $("#myModal");
  var btn = $("#myBtn");
  var span = $(".close");
  // var editDelete = $("span.editDelete");

  btn.click(function() {
    modal.show().animate(
      {
        left: "-=50px",
        right: "+= 50px",
        width: "+=150px"
      },
      500,
      "swing"
    );
  });
  span.click(function() {
    modal.hide(500, "swing");
  });
  $(window).click(function(event) {
    if (event.target == modal) {
      modal.hide(500, "swing");
    }
  });

  var noteOutput = [];
  var titleInput = $("#title");
  var bodyInput = $("#body");
  var formEl = $("#addNotes");

  formEl.submit(function(event) {
    event.preventDefault();
    if (titleInput.val() == "" || bodyInput.val() == "") {
      alert("Please enter note title and body");
      titleInput.val("");
      bodyInput.val("");
    } else {
      noteOutput.push({ title: titleInput.val(), body: bodyInput.val() });
      fillArray();
    }
  });

  function fillArray() {
    var newEntryTitle = document.createElement("p");
    var newEntryBody = document.createElement("p");
    var editButton = $("<button/>", {
      text: "Edit",
      style: "background-color: yellow;",
      id: "btn_" + i,
      click: function() {
        console.log(i);
      }
    });
    var deleteButton = $("<button/>", {
      text: "Delete",
      style: "background-color: red;",
      id: "btn_" + i,
      click: function() {
        alert("hi");
      }
    });
    for (var i = 0; i < noteOutput.length; i++) {
      var entry = noteOutput[i];
      if (i % 2 !== 0) {
        $(newEntryTitle).css("background-color", "#CBFFFA");
        $(newEntryBody).css("background-color", "#CBFFFA");
      } else {
        $(newEntryTitle).css("background-color", "#39ff14");
        $(newEntryBody).css("background-color", "#39ff14");
      }
      newEntryTitle.innerHTML = entry.title;
      newEntryBody.innerHTML = entry.body;
      $("p#titles").append(newEntryTitle);
      $("p#bodies").append(newEntryBody);
      $("p#buttons").append(editButton, deleteButton);
    }
  }
});
