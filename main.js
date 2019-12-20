var navbar = document.querySelector('ul');
var navItems = document.querySelectorAll('.nav-item');
var mainContent = document.querySelector('main');

navbar.addEventListener('click', makeActive);


function makeActive(event) {
  if (event.target.classList.contains('collections')) {
      removeHighlight();
      event.target.classList.add('active');
      addCollectionsHTML();
  } else if (event.target.classList.contains('wishlist')) {
      removeHighlight();
      event.target.classList.add('active');
      addWishlistHTML();
  } else if (event.target.classList.contains('archived')) {
      removeHighlight();
      event.target.classList.add('active');
      addArchivedHTML();
  } else if (event.target.classList.contains('all-courses')) {
      removeHighlight();
      event.target.classList.add('active');
      addAllCoursesHTML();
  }
}

function removeHighlight() {
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove('active')
  }
}
