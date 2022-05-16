console.log('this is navbar.js');
/**
 * i am using width to open or close the menu.
 * i dont find display none method useful for this case as there is some animations also. 
 */
const trigger = document.getElementById("hamburger-trigger");
let isOpen = false;// ! dont temper this it refers to the state of hamburger-menu...
let menu = document.getElementById("hamburger-menu");
const menuHtml = menu.innerHTML;
trigger.addEventListener("click", function () {

    //function to show or hide the hamburger-menu
    if (isOpen === false) {
        //open the menu
        menu.style.animation = `menu-open 2s 1 forwards`;
        setTimeout(() => {
            menu.innerHTML = menuHtml;
        }, 1500);
        isOpen = true;
    }
    else {
        //close the menu
        menu.innerHTML = "";
        menu.style.animation = `menu-close 2s 1 forwards`;
        isOpen = false;
    }
});
