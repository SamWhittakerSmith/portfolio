// Select UI elements
const navBtn = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.nav-menu');
const menuItems = document.querySelector('.menu-items');
const navItemPreviewMenu = document.querySelector('.nav-item-preview');
const navItemPreview = document.querySelector('.preview');
const navItems = document.querySelectorAll('.nav-item');
const navLinkHome = document.querySelector('.nav-link-home');
const navLinkAbout = document.querySelector('.nav-link-about');
const navLinkProjects = document.querySelector('.nav-link-projects');
const navLinkContact = document.querySelector('.nav-link-contact');

// Set initial state of nav 
let showNav = false;

// Listen for click
navBtn.addEventListener('click', toggleNav);

// Toggle nav
function toggleNav() {
  if (!showNav) {
    navBtn.classList.add('close');
    navMenu.classList.add('show');
    navItemPreviewMenu.classList.add('show');
    menuItems.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set nav state
    showNav = true;
  } else {
    navBtn.classList.remove('close');
    navMenu.classList.remove('show');
    navItemPreviewMenu.classList.remove('show');
    menuItems.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set nav state
    showNav = false;
  }
}

// Listen for mouseenter
navLinkHome.addEventListener('mouseenter', () => {
  showPreview();
  addHomeImage();
});
navLinkAbout.addEventListener('mouseenter', () => {
  showPreview();
  addAboutImage();
});
navLinkProjects.addEventListener('mouseenter', () => {
  showPreview();
  addProjectsImage();
});
navLinkContact.addEventListener('mouseenter', () => {
  showPreview();
  addContactImage();
});

// Show preview items
function showPreview() {
  navItemPreview.classList.add('show');
}

// Add home image class
function addHomeImage() {
  navItemPreview.classList.add('home-image');
}

// Add about image class
function addAboutImage() {
  navItemPreview.classList.add('about-image');
}

// Add projects image class
function addProjectsImage() {
  navItemPreview.classList.add('projects-image');
}

// Add contact image class
function addContactImage() {
  navItemPreview.classList.add('contact-image');
}

// Listen for mouseleave
navLinkHome.addEventListener('mouseleave', () => {
  hidePreview();
  removeHomeImage();
});
navLinkAbout.addEventListener('mouseleave', () => {
  hidePreview();
  removeAboutImage();
});
navLinkProjects.addEventListener('mouseleave', () => {
  hidePreview();
  removeProjectsImage();
});
navLinkContact.addEventListener('mouseleave', () => {
  hidePreview();
  removeContactImage();
});

// Hide preview
function hidePreview() {
  navItemPreview.classList.remove('show');
}

// Remove home image class
function removeHomeImage() {
  navItemPreview.classList.remove('home-image');
}

// Remove about image class
function removeAboutImage() {
  navItemPreview.classList.remove('about-image');
}

// Remove projects image class
function removeProjectsImage() {
  navItemPreview.classList.remove('projects-image');
}

// Remove contact image class
function removeContactImage() {
  navItemPreview.classList.remove('contact-image');
}