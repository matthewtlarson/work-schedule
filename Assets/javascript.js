var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  })

  function timeTracker() {
      var timeNow = moment().hour();

      $(".time-block").each(function () {
          var blockTime = parseInt($(this).attr("id").split("")[1]);

          if (blockTime < timeNow) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          else if (blockTime === timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
  }

  $("#9 AM .description").val(localStorage.getItem("9 AM"));
  $("#10 AM .description").val(localStorage.getItem("10 AM"));
  $("#11 AM .description").val(localStorage.getItem("11 AM"));
  $("#12 PM .description").val(localStorage.getItem("12 PM"));
  $("#1 PM .description").val(localStorage.getItem("1 PM"));
  $("#2 PM .description").val(localStorage.getItem("2 PM"));
  $("#3 PM .description").val(localStorage.getItem("3 PM"));
  $("#4 PM .description").val(localStorage.getItem("4 PM"));
  $("#5 PM .description").val(localStorage.getItem("5 PM"));

  timeTracker();
})