
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

    var jump = (element.getBoundingClientRect().top * 0.4);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;


   if (!element.lastJump || element.lastJump > Math.abs(jump)){
    element.lastJump = Math.abs(jump);
    setTimeout(function() {

        scrollToElement(element);

    },35);

   } else {
       element.lastJump = null;

   }
   
}

var acumulativeOffset = function(element){
    var top = 0;

    do{
        top += element.offsetTop || 0;
        element = element.offsetParent;

    } while(element);

  

    return top -40;

;}
var WhoIsItOffset = acumulativeOffset(document.getElementById("whoAmI"));
var StudiesOffset = acumulativeOffset(document.getElementById("studies"));
var experienceOffset = acumulativeOffset(document.getElementById("experience"));
var aboutmeOffset = acumulativeOffset(document.getElementById("aboutMe"));
var contactoOffset = acumulativeOffset(document.getElementById("contacto"));


window.addEventListener('scroll', changeMenuStyle);

var previous;

function changeMenuStyle(event) {

    

    var pageOffset = window.pageYOffset;

    if(pageOffset >= 0 && pageYOffset < WhoIsItOffset) {
        if(!previous || previous !== 1){
            previous = 1;
        } else {
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href='#']").parentNode.classList.add("navbar__item--active");

    } else if (pageOffset >= WhoIsItOffset  && pageOffset < StudiesOffset){
        if(!previous || previous !== 1){
            previous = 2;
        } else {
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='whoAmI']").parentNode.classList.add("navbar__item--active");

    } else if (pageOffset >=StudiesOffset && pageOffset < experienceOffset ){
        if(!previous || previous !== 1){
            previous = 3;
        } else {
            return false;
        }
       
        deleteActiveClass();
        document.querySelector("a[href$='studies']").parentNode.classList.add("navbar__item--active");

    } else if ( pageOffset >=experienceOffset && pageOffset < aboutmeOffset ){
        if(!previous || previous !== 1){
            previous = 4;
        } else {
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='experience']").parentNode.classList.add("navbar__item--active");

    } else if( pageOffset >=aboutmeOffset && pageOffset < contactoOffset ){
        if(!previous || previous !== 1){
            previous = 5;
        } else {
            return false;
        }
       
        deleteActiveClass();
        document.querySelector("a[href$='aboutMe']").parentNode.classList.add("navbar__item--active");

    }else if( pageOffset >=contactoOffset && pageOffset  ){
        if(!previous || previous !== 1){
            previous = 6;
        } else {
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='contacto']").parentNode.classList.add("navbar__item--active");

    }

}



 