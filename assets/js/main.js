// Block scroll when menu is open

//Select DOM Items

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', event => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');

    // Set menu state
    showMenu = false;
  }
});
