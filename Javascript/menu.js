let toggleNavStatus = false;

let toggleNav = function() {
    let getNav = document.querySelector(".nav-main");
    let getMenu = document.querySelector(".menu");
    let getMenuLinks = document.querySelectorAll(".menu a");
    let getToggle = document.querySelector(".btn-toggle-nav");

    if (toggleNavStatus === false){
        getMenu.style.display = "block";
        getNav.style.backgroundColor = "#E8F6EC";
        getNav.style.position = "fixed";
        /*getNav.style.textAlign= "right";*/
        getNav.style.height = "100%";
        getMenu.style.paddingLeft = "0";
    

        let arrayLength = getMenuLinks;

        for (let i=0; i < arrayLength.length; i++){
            getMenuLinks[i].style.opacity = "1";
        }
        
        toggleNavStatus = true;

    }   else if (toggleNavStatus === true) {
        let arrayLength = getMenuLinks;

        for (let i=0; i < arrayLength.length; i++){
            getMenuLinks[i].style.opacity = "0";
        }

        getNav.style.height = "0";
        getMenu.style.paddingLeft = "0";
        getMenu.style.display = "none";
        getNav.style.background = "none";
        getNav.style.position = "relative";

        toggleNavStatus = false;
    }
}