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

function addCollectionsHTML() {
  mainContent.innerHTML = `<h2>Your collections can be found here!</h2>`
}

function addWishlistHTML() {
  mainContent.innerHTML = `<h2>These are your wishlists!!</h2>`
};

function addArchivedHTML() {
  mainContent.innerHTML = `<h2>Check out your archived stuff here!</h2>`
}

function addAllCoursesHTML() {
  mainContent.innerHTML = `<h2>Here are all of your courses!</h2>`
}
