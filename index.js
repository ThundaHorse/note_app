// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Adding Notes
var noteOutput = [];
var titleInput = document.getElementById("title");
var bodyInput = document.getElementById("body");
var formEl = document.querySelector("form#addNotes");

formEl.addEventListener("submit", function(evt) {
  evt.preventDefault();
  noteOutput.push({ title: titleInput.value, body: bodyInput.value });
  fillArray();
});

function fillArray() {
  var newEntryTitle = document.createElement("p");
  var newEntryBody = document.createElement("p");
  for (var i = 0; i < noteOutput.length; i++) {
    var entry = noteOutput[i];
    if (i % 2 !== 0) {
      try {
        newEntryTitle.style.cssText = "background-color: #CBFFFA;";
        newEntryBody.style.cssText = "background-color: #CBFFFA;";
      } catch (e) {
        console.log(e);
      }
    } else {
      newEntryTitle.style.cssText = "background-color: #39ff14;";
      newEntryBody.style.cssText = "background-color: #39ff14;";
    }
  }
  newEntryTitle.innerHTML = entry.title;
  newEntryBody.innerHTML = entry.body;
  document.getElementById("titles").append(newEntryTitle);
  document.getElementById("bodies").append(newEntryBody);
}
