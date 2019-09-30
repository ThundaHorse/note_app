$(document).ready(function() {
  var modal = $("#myModal");
  var btn = $("#myBtn");
  var span = $(".close");

  btn.click(function() {
    modal.fadeIn(400);
  });
  span.click(function() {
    modal.fadeOut(400);
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
      $(newEntryTitle)
        .hide()
        .appendTo("p#titles")
        .slideDown("fast");
      $(newEntryBody)
        .hide()
        .appendTo("p#bodies")
        .slideDown("fast");
    }
  }
});
