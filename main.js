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
    navItems[i].classList.remove('active');
  }
}

function addCollectionsHTML() {
  mainContent.innerHTML = `
  <h2>Your collections can be found here!</h2>
  <p>Taxidermy dolore etsy seitan nostrud gastropub tofu live-edge listicle raw denim brunch. Mollit enamel pin cupidatat, waistcoat intelligentsia af velit mustache fingerstache forage. Cardigan lo-fi helvetica, craft beer aliquip trust fund jianbing normcore 3 wolf moon velit duis. Intelligentsia vice tempor, iPhone hell of sed ut mixtape 8-bit in occaecat photo booth microdosing. Biodiesel bicycle rights etsy, proident offal church-key intelligentsia schlitz tilde disrupt beard. Magna shaman viral, letterpress quis hella nisi beard banh mi voluptate.</p>
  <p>Tacos vegan aute tattooed. Ut culpa tilde, cillum raw denim man braid cred fam kale chips bicycle rights poutine. Chambray cupidatat kombucha YOLO kickstarter vaporware incididunt locavore biodiesel chartreuse PBR&B excepteur jianbing bicycle rights sriracha. Waistcoat tattooed prism ipsum try-hard selfies. Taiyaki occaecat af put a bird on it deserunt ramps salvia mollit cupidatat exercitation flannel.</p>
  `;
}

function addWishlistHTML() {
  mainContent.innerHTML = `
  <h2>These are your wishlists!</h2>
  <p>Banh mi ut qui fingerstache duis meggings tattooed. Fanny pack poutine fugiat biodiesel, anim cliche ut proident in aliquip master cleanse plaid literally franzen. Raw denim voluptate kinfolk sed exercitation aliqua. Roof party migas tote bag kogi non freegan authentic, iPhone et do est. Viral gastropub street art health goth live-edge williamsburg forage do. Pariatur kale chips occaecat, 3 wolf moon ut direct trade magna cred lyft franzen.</p>
  <p>Williamsburg glossier consectetur poke crucifix. Meggings distillery fam sriracha artisan, hexagon enim. Labore la croix shabby chic irony tempor, nostrud subway tile polaroid banh mi echo park health goth. Minim magna trust fund everyday carry health goth, listicle dolore subway tile gochujang vape in.</p>
  `;
};

function addArchivedHTML() {
  mainContent.innerHTML = `
  <h2>Check out your archived stuff here!</h2>
  <p>Skateboard wayfarers hella, ad live-edge hammock deserunt fam. Cronut VHS gluten-free, commodo esse scenester palo santo veniam lomo wayfarers prism direct trade subway tile. Est roof party esse gochujang mlkshk ugh austin wayfarers.</p>
  <p>Williamsburg slow-carb bushwick lomo hashtag cronut. Mixtape 8-bit literally locavore laborum. Tattooed swag shaman deep v, cillum poutine you probably haven't heard of them food truck incididunt fugiat cupidatat raclette pitchfork bushwick. Tofu vaporware artisan, brunch hammock la croix irony.</p>
  <p>Drinking vinegar do irure copper mug listicle, in fashion axe banjo photo booth cillum id. Mumblecore hell of pour-over raclette craft beer.</p>
  `;
}

function addAllCoursesHTML() {
  mainContent.innerHTML = `
  <h2>Here are all of your courses!</h2>
  <p>Messenger bag activated charcoal live-edge, dolor tattooed before they sold out ut gochujang mlkshk lumbersexual. Hella subway tile shaman, art party retro chartreuse jianbing ea copper mug trust fund. +1 tilde semiotics dolore DIY. Ullamco trust fund hoodie iceland semiotics live-edge meditation raw denim tattooed mumblecore esse af. Chartreuse craft beer green juice veniam pop-up pariatur scenester. </p>
  <p>Bitters tbh vape, migas succulents ipsum flexitarian commodo cornhole direct trade hoodie nostrud shaman irony pok pok. Everyday carry master cleanse in glossier, PBR&B air plant ea vinyl health goth. Slow-carb crucifix hammock officia. Wayfarers normcore tofu twee ut ex gluten-free woke. Keffiyeh air plant squid knausgaard, pug disrupt slow-carb. Cillum fashion axe deserunt kickstarter etsy selfies minim.</p>
  `;
}
