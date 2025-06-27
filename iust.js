//part1
document.getElementById("cphMain_ddlTopic").selectedIndex = 1;
document.getElementById("cphMain_ddlTopic").dispatchEvent(new Event('change'));

//part2
document.getElementById("cphMain_txtDuration").value = "60";
document.getElementById("cphMain_ddlRating").selectedIndex = 5;
document.getElementById("cphMain_txtComments").value = "Great session!";
document.getElementById("cphMain_btnSubmit").click();

// run the two parts separately, otherwise the server might start feeling a little nervous under the pressure!
// plus if you don't get what this script is, it's not for you
