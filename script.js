// onClick run this function
function burgNav() {

  //get the id mobile-menu and set it to the variable name of nav
  const nav = document.getElementById("mobile-menu");

  // now id=mobile menu is now called nav (only in .js)
  // if nav(AKA id=mobile-menu) is clicked, give it a class of mobile-display (which is set to display:none before click) and the class of clicked (which is display: block) to display the nav
  if (nav.className === "mobile-display") {
    nav.className += " clicked";
    // YOU NEED THIS SPACE " clicked"

    // if nav isn't clicked leave it as mobile-display which is set to display: none
  } else {
    nav.className = "mobile-display";
  }
}