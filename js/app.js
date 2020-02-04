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
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


let myNavBar = document.getElementById('navbar__list');

let allSections = document.querySelectorAll('section');

// getYCoordinates and GetXCoordinates are no longer used. 
//They got the coordinates from the different sections by passing the 
// index number of the section. They are useful only for the initial
// creation of the links

function getYCoordinates(i){

    let yCoordArray = [];
    allSections.forEach((ele, ind) => {
    let posY = ele.getBoundingClientRect().top;
    yCoordArray.push(posY);
    });
    return yCoordArray[i];
}


function getXCoordinates(i){

    let xCoordArray = [];
    allSections.forEach((ele, ind) => {
    let posX = ele.getBoundingClientRect().left;
    xCoordArray.push(posX);
    });
    return xCoordArray[i];

}

// This is the function that builds the links dynamically

function buildLinks(myNavBar, allSections){
  
   
    for (let i = 0; i < allSections.length; i++){
        let link = document.createElement('li')
        let myAnchor = document.createElement('a')
      
        if (myAnchor.id=="s1") myAnchor.classList = "highlight"
        myAnchor.id="s"+(i+1);
        myAnchor.href = "#section"+(i+1);
        myAnchor.innerText = "Section "+(i+1);
        link.appendChild(myAnchor);
        myNavBar.appendChild(link)
    
    }
}


// This is the actual call to the buildLinks fanction

buildLinks(myNavBar, allSections);


let AllLinks = document.getElementsByTagName("a");


// This function adds event listeners to all anchors 
// for clicks 
// it gets the destination section, gets its coordinates and scrolls to the destination
function addEventListeners(AllLinks){
    for(let i = 0; i < AllLinks.length;i++){
        AllLinks[i].addEventListener('click',() => { 
            let x, y = 50;
            let anchor = event.target;
            let dest = document.getElementById('section'+anchor.id.slice(1));
            y = dest.getBoundingClientRect().top - 15;
            x = dest.getBoundingClientRect().right;
            window.scrollTo(x, y);
        
        })
    }
}


// This is the actual call to the addEventListeners function
addEventListeners(AllLinks)


//a.addEventListener('click', () => console.log(a.href));


 


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

// 
let sectionsLength = allSections.length;

// This adds an event listner to the scroll 
// It gets the top coordinates of the different sections
// and modifies the sections that are active

document.addEventListener("scroll", () => {
    let posArray = [];
    allSections.forEach((ele, ind) => {
        let pos = ele.getBoundingClientRect().top;
        posArray.push(pos);
    })
     
    let candidate = posArray.findIndex(el => el > 0);
   
    for (let i = 0; i < sectionsLength; i++) {
        if (i === candidate) {
            document.getElementById(`section${i+1}`).classList.add("your-active-class");
            document.getElementById(`s${i+1}`).classList.add("highlight");   
        } else {
            document.getElementById(`section${i+1}`).classList.remove("your-active-class");
            document.getElementById(`s${i+1}`).classList.remove("highlight");
        }
    }
})