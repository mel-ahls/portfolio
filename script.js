// when MQ is reached, menu is closed aka false (because we set it originally to visbility: hidden to the user has to click to burg to open it)
let toggleNavStatus = false;


let toggleNav = function() {
  let getMenu = document.querySelector('.mobile-menu');
  let getMobileNav = document.querySelector('.mobile-nav');
  
  if (toggleNavStatus === false) {
    getMenu.style.visibility = 'visible';
  }
  else {
    getMenu.style.visibility ='hidden';
  }
}