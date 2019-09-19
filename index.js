var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var saveNote = document.querySelector("input#title");

btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
saveNote.onchange = function() {
  console.log(saveNote.innerText);
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
