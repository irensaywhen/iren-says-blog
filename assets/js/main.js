// Block scroll when menu is open

//Select DOM Items

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const body = document.body;
const clampElements = Array.from(document.querySelectorAll('.clamp-excerpt p'));
console.log(clampElements);

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    body.classList.add('mobile-menu');

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    body.classList.remove('mobile-menu');

    // Set menu state
    showMenu = false;
  }
});

clampElements.forEach(element => $clamp(element, { clamp: 4 }));
