function fillPrimes(numberInput) {
  primes = [];
  for (var i=2; i <= numberInput; i++) {
    primes.push(i);
  }
  return primes;
}

function siftPrimes (primes) {
  var index = 0;
  var numberEntered = primes[primes.length - 1];
//  console.log(numberEntered);
  var outputString = "";
  for (var numToTest=2; numToTest <= numberEntered; numToTest++) {
    outputString = outputString + ", " + ;
  }
  return outputString;
}

$(document).ready(function() {
  $("#primesForm").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("input#numberEntered").val());
    var primes = fillPrimes(numberInput);
    var outputString = siftPrimes(primes);
    $("#primesForm").hide();
    $("#result").empty;
    $("#result").append(outputString);
  });
});
