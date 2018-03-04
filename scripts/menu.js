
var navbarItems = document.getElementsByClassName("navbar__item");

for(var i=0; i <navbarItems.length; i++) {
navbarItems[i].addEventListener('click' , function(event) {
   var goTo = this.getElementsByTagName('a')[0].href.split("#");
   
   deleteActiveClass();

   this.classList.add("navbar__item--active");

   if (goTo.length === 2){
       event.preventDefault();
       var sectionToGo = goTo[goTo.length - 1];
       var elementToGo = scrollToElement(sectionToGo);
       ScrollToElement(elementToGo);
       
   }


});

}


function deleteActiveClass () {
    for(var i=0; i <navbarItems.length; i++) {
        navbarItems[i].classList.remove("navbar__item--active");


    }

}

function scrollToElement(id){
    var elm;
    if (id === ''){

        elm = document.getElementsByClassName("header")[0];
    } else{
        elm = document.getElementById(id);
    }

    return elm;
}

function ScrollToElement(element){

    var jump = (element.getBoundingClientRect().top * 0.3);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;


   if (!element.lastJump || element.lastJump > MAth.abs(jump)){
    element.lastJump = Math.abs(jump);
    setTimeout(function() {

        scrollToElement(element);

    },25);

   } else {
       element.lastJump = null;

   }
   
}