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
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let NumberOfListItems = sections.length;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItem(){
  for (section of sections){
    sectionName = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');
    //create an item for each section
    listItem = document.createElement('li');
    //add text to item
    listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

    //add listitem to menu
    menu.appendChild(listItem);

  }
}

 //Determines if section is in viewport
 function sectionInViewPort(elem)
 {
   let sectionPos = elem.getBoundingClientRect();
   return (sectionPos.top >= 0);
 }

 //gives the secion being viewed a different appearance
 function toggleActiveClass(){
   for(section of sections){
     //if section is in viewport
     if(sectionInViewPort(section)){
       //check if it doesn't already contain "your-active-class"
       if(! section.classList.contains('your-active-class')){
         //then add it 
         section.classList.add('your-active-class');
       }
      }
      else {//if it is out of the viewport then remove "your-active-class"
         section.classList.remove('your-active-class');
       }
      }
    }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createListItem();



// Add class 'active' to section when near top of viewport

document.addEventListener('scroll' , toggleActiveClass);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


