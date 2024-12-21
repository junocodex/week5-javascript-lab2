"use strict";

// ! Smallest of 3 Numbers

function smallestNumber(a, b, c) {
  if (a < b && a < c) {
    alert(a + " is the smallest number");
  } else if (b < a && b < c) {
    alert(b + " is the smallest number");
  } else {
    alert(c + " is the smallest number");
  }
}

smallestNumber(5, 6, 7);

// ! Positve, Negative, or Zero

function negativeOrPositiveOrZero(number) {
  if (number === "0") {
    alert("Zero!");
  } else if (number > 0) {
    alert("Positive!");
  } else {
    alert("Negative!");
  }
}

let userInput = prompt("Enter a number");
negativeOrPositiveOrZero(userInput);

// ! Voting Eligibility

function votingAge(age) {
  if (age >= 18) {
    alert("You can vote!");
  } else {
    alert("You can not vote!");
  }
}

let userInput1 = prompt("What is your age?");
votingAge(userInput1);
