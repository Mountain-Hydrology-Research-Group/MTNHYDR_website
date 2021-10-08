const menu = document.getElementById("myMenu");
totalClicks = -1;

const openNav = () => {
    menu.style.height = "10%";
    menu.style.marginTop = "10vh";
    menu.style.visibility = "visible";
};

const closeNav = () => {
    menu.style.height = "0";
    menu.style.marginTop = "0";
    menu.style.visibility = "hidden";
};

const buttonFunction = () => {
    totalClicks++;

    if (totalClicks > 1) {
        totalClicks = 0;
    }

    if (totalClicks === 0) {
        openNav();
    }
    
    if (totalClicks === 1) {
        closeNav()
    }
}