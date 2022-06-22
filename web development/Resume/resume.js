var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);  // to get the numbe of anchor tags
var interval

for(var i = 0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
       event.preventDefault();

       var targetSectionID = this.textContent.trim().toLowerCase();
       var targetSection = document.getElementById(targetSectionID);

       console.log(targetSection);
       

    
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
