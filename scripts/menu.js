
var navbarItems = document.getElementsByClassName("navbar__item");

for(var i=0; i <navbarItems.length; i++);
navbarItems[i].addEventListener("click" , function(event){
    console.log(event);
});
