/*
 * Copyright (c) 2020-2025 HamburgerFrosting
 * Licensed under the MIT license
 */

function displayResult() {
    var x = document.getElementById("myHeader");
    if (x.innerHTML === "Click the button...and change your life forever...") {
        x.innerHTML = "Nothing happened. That must've really <q>pushed your buttons,</q> right? LOL";
  	} else {
        x.innerHTML = "Click the button...and change your life forever...";
    	}
}
