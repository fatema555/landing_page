/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 * 
*/
const menu = document.getElementById("menu");
const sections = [...document.querySelectorAll(".section")]




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const nav_menu_items = () => {
    let nav_menu_container = '';

 sections.forEach(section => {

       const sectionID = section.id;
       const sectionAtrribute = section.dataset.nav;
       nav_menu_container += `<li> <a class="menu_item_link" href="#${sectionID}">${sectionAtrribute}</a></li>`   
     })
 menu.innerHTML=nav_menu_container;
 }
 nav_menu_items();

 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.getElementsByClassName("page__header").innerT=""


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


