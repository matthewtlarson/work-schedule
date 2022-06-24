var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var Save = document.getElementById("savebtn");

function save(event) {
  event.preventDefault();
  console.log('');
}

