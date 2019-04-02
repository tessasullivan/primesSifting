function calculateFactorial(numberEntered) {
  var factorial = 1;
  if (numberEntered === 0 || numberEntered === 1) {
    return factorial;
  } else {
    for (i=1; i <= numberEntered; i++){
      factorial *= i;
    }
  }
//  console.log (factorial);
  return factorial;
}

$(document).ready(function() {
  $("form#factorialForm").submit(function(event) {
    event.preventDefault();

    var numberEntered = parseInt($("input#numberEntered").val());
    var factorial = calculateFactorial(numberEntered);
    $("#factorialForm").hide();
    $("#result").empty;
    $("#result").append(numberEntered + "! = " + factorial);
  });
});
