// Mobile menu
(function () {
  //Select DOM Items

  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const body = document.body;

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
})();

// Text truncation
(function () {
  const clampElements = Array.from(
    document.querySelectorAll('.clamp-excerpt p')
  );
  // Clamp text
  clampElements.forEach(element => $clamp(element, { clamp: 4 }));
})();

// Copy email address on click
(function () {
  const emailAddress = document.getElementById('email').dataset.email;

  function copyToClipboard(text) {
    // Input to copy text to clipboard
    var dummy = document.createElement('input');

    document.body.appendChild(dummy);

    dummy.setAttribute('value', text);
    dummy.select();

    document.execCommand('copy');

    // Delete input
    document.body.removeChild(dummy);
  }

  email.addEventListener('click', event => {
    event.preventDefault();

    copyToClipboard(emailAddress);
  });
})();
