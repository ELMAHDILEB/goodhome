let linkDiv = document.querySelector('.linkDiv');
let closeMenu = document.querySelector('.closeMenu');
let openMenu = document.querySelector('.openMenu');
let openEm = document.getElementById('employment');


if (linkDiv && closeMenu && openMenu) {
  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', close);
}

function show() {
  linkDiv.style.height = '450px';
  linkDiv.style.top = '-1px';
}

function close() {
  linkDiv.style.height = '0px';
  linkDiv.style.top = '-150%';
}
function openEmpl() {
  openEm.style.scale = '1';
}

function closeEmpl() {
  openEm.style.scale = '0';
}

