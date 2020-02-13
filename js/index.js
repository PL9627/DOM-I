const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
let navLinks = document.querySelectorAll('a');

navLinks[0].textContent = 'Services';

navLinks[1].textContent = 'Product';

navLinks[2].textContent = 'Vision';

navLinks[3].textContent = 'Features';

navLinks[4].textContent = 'About';

navLinks[5].textContent = 'Contact';

//cta-text h1
let topH1 = document.querySelector('h1');

topH1.textContent = 'DOM Is Awesome';


//cta-text button
let btn = document.querySelector('button');

btn.textContent = 'Get Started';

//cta circle img
let ctaImg = document.querySelector('#cta-img');

ctaImg.src = 'img/header-img.png';

//mid content img
let midImg = document.querySelector('#middle-img');

midImg.src = 'img/mid-page-accent.jpg';

//features div
let features = document.querySelectorAll('h4');

features[0].textContent = siteContent['main-content']['features-h4'];

let featContent = document.querySelectorAll('p');

featContent[0].textContent = siteContent['main-content']['features-content'];

//About div
let about = document.querySelectorAll('h4');

about[1].textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('p');

aboutContent[1].textContent = siteContent['main-content']['about-content'];

//services div
let service = document.querySelectorAll('h4');

service[2].textContent = siteContent['main-content']['services-h4'];

let servContent = document.querySelectorAll('p');

servContent[2].textContent = siteContent['main-content']['services-content'];

//product div
let prod = document.querySelectorAll('h4');

prod[3].textContent = siteContent['main-content']['product-h4'];

let prodContent = document.querySelectorAll('p');

prodContent[3].textContent = siteContent['main-content']['product-content'];

//Vision div
let vis = document.querySelectorAll('h4');

vis[4].textContent = siteContent['main-content']['vision-h4'];

let visContent = document.querySelectorAll('p');

visContent[4].textContent = siteContent['main-content']['vision-content'];

//contact


//footer
