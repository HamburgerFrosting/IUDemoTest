/*
 * Copyright (c) 2019-2025 HamburgerFrosting
 * Licensed under the MIT license
 */

function loggedInloggedOut() {
var user=getCookie("uname");

    if (user != "") {
       document.getElementById("logged-out").style.display="none";
       document.getElementById("logged-in").style.display="block";
       document.getElementById("nav-li").style.display="none";
       document.getElementById("nav-lo").style.display="block";
       document.getElementById("username").innerHTML=" "+user;
       document.getElementById("commenting-logged-out").style.display="none";
       document.getElementById("commenting-logged-in").style.display="block";
       document.getElementById("stats-logged-out").style.display="none";
       document.getElementById("stats-logged-in").style.display="block";
       document.getElementById("usr-options").style.display="block";
    } else {
       document.getElementById("logged-out").style.display="block";
       document.getElementById("logged-in").style.display="none";
       document.getElementById("nav-li").style.display="block";
       document.getElementById("nav-lo").style.display="none";
       document.getElementById("commenting-logged-out").style.display="block";
       document.getElementById("commenting-logged-in").style.display="none";
       document.getElementById("stats-logged-out").style.display="block";
       document.getElementById("stats-logged-in").style.display="none";
       document.getElementById("usr-options").style.display="none";
       document.getElementsByClassName("comment-options").style.display="none";
    }
}
