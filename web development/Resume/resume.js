var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);  // to get the numbe of anchor tags
var interval

for(var i = 0; i<=navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
       event.preventDefault();

       var targetSectionID = this.textContent.trim().toLowerCase();
       var targetSection = document.getElementById(targetSectionID);

    //    console.log(targetSection);
       

    
    //  interval = setInterval(scrollVertically,30,targetSection);

    interval = setInterval(function(){
        scrollVertically(targetSection);
    },30,targetSection);

});
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
        if(targetSectionCoordinates.top <= 0){
            clearInterval (interval);
            return;
        }
            window.scrollBy(0,50)
}



// animated scroll bar

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;


function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();

function fillBars(){
    for(let bar of progressBars){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function()  {
        if (currentWidth > targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    },5);

    }

}



function checkScroll(){
// check wheather skill container is visible

var coordinates = skillsContainer.getBoundingClientRect();
if(!animationDone && coordinates.top < window.innerHeight ){
    animationDone = true;
    console.log('Skill Section Visible');
    fillBars();

}
// else if(coordinates.top < window.innerHeight){
//     animationDone = false;
//     initialiseBars();

// }

}