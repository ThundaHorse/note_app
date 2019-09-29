$(document).ready(function() {
  // Modal JQuery
  var modal = $("#myModal");
  var btn = $("#myBtn");
  var span = $(".close");

  btn.click(function() {
    // modal.css("display", "block");
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

  // Adding Notes JQuery
  var noteOutput = [];
  var titleInput = $("#title");
  var bodyInput = $("#body");
  var formEl = $("#addNotes");

  formEl.submit(function(event) {
    event.preventDefault();
    noteOutput.push({ title: titleInput.val(), body: bodyInput.val() });
    fillArray();
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
      $("p#titles").append(newEntryTitle);
      $("p#bodies").append(newEntryBody);
    }
  }

  // Modal JS
  // var modal = document.getElementById("myModal");
  // var btn = document.getElementById("myBtn");
  // var span = document.getElementsByClassName("close")[0];
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // };

  // span.onclick = function() {
  //   modal.style.display = "none";
  // };
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };

  // Adding Notes JS
  // var noteOutput = [];
  // var titleInput = document.getElementById("title");
  // var bodyInput = document.getElementById("body");
  // var formEl = document.getElementById("addNotes");

  // formEl.addEventListener("submit", function(e) {
  //   e.preventDefault();
  //   noteOutput.push({ title: titleInput.value, body: bodyInput.value });
  //   fillArray();
  // });

  // fillArr JS
  // function fillArray() {
  //   var newEntryTitle = document.createElement("p");
  //   var newEntryBody = document.createElement("p");
  //   for (var i = 0; i < noteOutput.length; i++) {
  //     var entry = noteOutput[i];
  //     if (i % 2 !== 0) {
  //       $(newEntryTitle).css("background-color", "#CBFFFA");
  //       $(newEntryBody).css("background-color", "#CBFFFA");
  //     } else {
  //       $(newEntryTitle).css("background-color", "#39ff14");
  //       $(newEntryBody).css("background-color", "#39ff14");
  //     }
  //     newEntryTitle.innerHTML = entry.title;
  //     newEntryBody.innerHTML = entry.body;
  //     document.getElementById("titles").append(newEntryTitle);
  //     document.getElementById("bodies").append(newEntryBody);
  //   }
  // }
});
