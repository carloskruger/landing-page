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



function buildLinks(myNavBar, allSections){
  
   
    for (let i = 0; i < allSections.length; i++){
        let link = document.createElement('li')
        let myAnchor = document.createElement('a')
        let yCoord = getYCoordinates(i)
        let xCoord = getXCoordinates(i)
        console.log(yCoord);
        console.log(xCoord);
        if (myAnchor.id=="s1") myAnchor.classList = "highlight"
        myAnchor.id="s"+(i+1);
        myAnchor.href = "#section"+(i+1);
        myAnchor.innerText = "Section "+(i+1);
        link.appendChild(myAnchor);
        myNavBar.appendChild(link)
    
    }
    

}

buildLinks(myNavBar, allSections);


let AllLinks = document.getElementsByTagName("a");

function addEventListeners(AllLinks){
    for(let i = 0; i < AllLinks.length;i++){
        AllLinks[i].addEventListener('click',() => { 
            let x, y = 50;
            let anchor = event.target;
            let dest = document.getElementById('section'+anchor.id.slice(1));
            console.log(dest);
            y = dest.getBoundingClientRect().top;
            x = dest.getBoundingClientRect().right;
            console.log("x: ", x)
            console.log("y: ", y)
           event.preventDefault();
            window.scrollTo(x, y);
        
        })


    }





}




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
let sectionsLength = allSections.length;

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